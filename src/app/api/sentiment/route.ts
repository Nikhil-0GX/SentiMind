// src/app/api/sentiment/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { analyzeSentimentText } from '@/lib/sentiment-analysis'; // Ensure this path is correct

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const textToAnalyze = body.text;

    if (typeof textToAnalyze !== 'string' || !textToAnalyze.trim()) {
      return NextResponse.json({ error: 'Text is required and must be a non-empty string.' }, { status: 400 });
    }

    // The analyzeSentimentText function now returns an object like { sentiment: 'positive', score: 0.9 }
    const analysisResult = await analyzeSentimentText(textToAnalyze);

    // The frontend expects an object with a `sentiment` key (and optionally `score` or `error`)
    return NextResponse.json({ 
      sentiment: analysisResult.sentiment, 
      score: analysisResult.score 
      // If analyzeSentimentText throws an error, the catch block handles it.
      // If it returns a neutral/error due to internal issues, that's what's sent.
    }, { status: 200 });

  } catch (error: any) {
    console.error("API Error in /api/sentiment:", error);
    // Ensure a generic error is sent to the client for unexpected issues
    return NextResponse.json({ error: error.message || 'Failed to analyze sentiment due to an internal server error.' }, { status: 500 });
  }
}