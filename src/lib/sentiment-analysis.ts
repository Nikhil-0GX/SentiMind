// src/lib/sentiment-analysis.ts
import { pipeline, Pipeline } from '@xenova/transformers';

let sentimentPipeline: Pipeline | null = null;
let isPipelineLoading = false;

async function getSentimentPipeline(): Promise<Pipeline | null> {
  if (sentimentPipeline) {
    return sentimentPipeline;
  }
  while (isPipelineLoading) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  if (sentimentPipeline) {
    return sentimentPipeline;
  }

  isPipelineLoading = true;
  try {
    console.log("Initializing sentiment analysis pipeline (Xenova/distilbert-base-uncased-finetuned-sst-2-english)...");
    sentimentPipeline = await pipeline('sentiment-analysis', 'Xenova/distilbert-base-uncased-finetuned-sst-2-english');
    console.log("Sentiment analysis pipeline initialized successfully.");
  } catch (error) {
    console.error("Failed to initialize sentiment analysis pipeline:", error);
    sentimentPipeline = null;
  } finally {
    isPipelineLoading = false;
  }
  return sentimentPipeline;
}

if (typeof window === 'undefined') {
    getSentimentPipeline().catch(err => {
        console.error("Failed to pre-warm pipeline on server start:", err);
    });
}

interface SentimentResult {
  sentiment: 'positive' | 'negative' | 'neutral';
  score: number;
}

// This is the main analysis function used by your API route
export async function analyzeSentimentText(text: string): Promise<SentimentResult> {
  if (!text || text.trim() === "") {
    return { sentiment: 'neutral', score: 0.5 };
  }

  // Get the initialized pipeline
  const pipe = await getSentimentPipeline();

  if (!pipe) {
    console.error("Sentiment pipeline is not available.");
    return { sentiment: 'neutral', score: 0.0 }; // Fallback if pipeline failed to load
  }
  
  try {
    const truncatedText = text.substring(0, 500); // Truncate for model input limits

    // Use the pipeline directly with the text
    // The pipeline handles tokenization and model inference internally.
    const result = await pipe(truncatedText); // THIS IS THE CORRECT WAY TO USE THE PIPELINE

    // Process the pipeline's result
    if (Array.isArray(result) && result.length > 0 && result[0].label && typeof result[0].score === 'number') {
      const primaryResult = result[0]; // e.g., { label: 'POSITIVE', score: 0.99 }
      let detectedSentiment: 'positive' | 'negative' | 'neutral';
      
      // Heuristic for "neutral" with a binary model (POSITIVE/NEGATIVE)
      if (primaryResult.label.toUpperCase() === 'POSITIVE') {
        detectedSentiment = primaryResult.score > 0.65 ? 'positive' : 'neutral';
      } else if (primaryResult.label.toUpperCase() === 'NEGATIVE') {
        detectedSentiment = primaryResult.score > 0.65 ? 'negative' : 'neutral';
      } else {
        console.warn(`Unexpected label from model: ${primaryResult.label}`);
        detectedSentiment = 'neutral'; // Fallback for unexpected labels
      }
      
      return {
        sentiment: detectedSentiment,
        score: primaryResult.score,
      };
    } else {
      console.warn("Unexpected result format from sentiment pipeline:", result);
      return { sentiment: 'neutral', score: 0.0 };
    }
  } catch (error) {
    console.error("Error during sentiment analysis with pipeline:", error);
    return { sentiment: 'neutral', score: 0.0 }; // Fallback on error
  }
}