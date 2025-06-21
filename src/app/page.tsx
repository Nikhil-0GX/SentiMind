// src/app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import SentimentAnalysisForm from '@/components/SentimentAnalysisForm';
import SentimentAnalysisResult from '@/components/SentimentAnalysisResult';
import Card from '@/components/ui/Card';
import ErrorMessage from '@/components/ui/ErrorMessage';
import { ArrowPathIcon } from '@heroicons/react/24/outline'; // For reset button

interface ApiSentimentResponse {
  sentiment?: 'positive' | 'negative' | 'neutral' | string;
  error?: string;
  // confidence?: number; // If API returns this
}

const HomePage = () => {
  const [text, setText] = useState('');
  const [apiResponse, setApiResponse] = useState<ApiSentimentResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  // Separate error state for UI-specific errors, distinct from API errors
  const [uiError, setUiError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!text.trim()) {
      setUiError("Please enter some text to analyze.");
      setApiResponse(null); // Clear any previous API response
      return;
    }

    setIsLoading(true);
    setUiError(null); // Clear UI error
    setApiResponse(null); // Clear previous API response

    try {
      const response = await fetch('/api/sentiment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      const data: ApiSentimentResponse = await response.json();

      if (!response.ok) {
        // If API returns an error message in its body, use that. Otherwise, a generic one.
        throw new Error(data.error || `Analysis failed (status: ${response.status})`);
      }
      setApiResponse(data);

    } catch (e: any) {
      console.error("Analysis submission error:", e);
      // Set the error in apiResponse so ErrorMessage can display it
      setApiResponse({ error: e.message || 'An unexpected error occurred. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setText('');
    setApiResponse(null);
    setUiError(null);
    setIsLoading(false); // Ensure loading state is reset
  };

  // Clear UI error when text is entered
  useEffect(() => {
    if (text.trim() && uiError) {
      setUiError(null);
    }
  }, [text, uiError]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] py-10 px-4 sm:px-6 lg:px-8"> {/* Adjust min-height based on nav/footer height */}
      <div className="w-full max-w-2xl space-y-10">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500">
              Sentimind AI
            </span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-xl mx-auto">
            Instantly analyze the emotional tone of any text with our advanced AI.
          </p>
        </div>

        <Card className="w-full" padding="p-6 sm:p-10"> {/* Added more padding to the card */}
          <SentimentAnalysisForm
            text={text}
            setText={setText}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            placeholder="Type or paste your text here..."
          />

          {/* Display UI-specific errors (e.g., empty input) */}
          {uiError && !isLoading && (
            <div className="mt-6">
              <ErrorMessage title="Input Required" message={uiError} />
            </div>
          )}

          {/* Display API errors or results */}
          {apiResponse && !isLoading && (
            apiResponse.error ? (
              <div className="mt-6">
                <ErrorMessage title="Analysis Error" message={apiResponse.error} />
              </div>
            ) : apiResponse.sentiment ? (
              <SentimentAnalysisResult sentiment={apiResponse.sentiment} />
            ) : null // Should not happen if API response is structured correctly
          )}
          
          {/* Show reset button if there's a result or an error, and not currently loading */}
          {(!isLoading && (apiResponse || uiError)) && (
             <button
              onClick={handleReset}
              className="mt-8 w-full flex items-center justify-center py-2.5 px-4 border border-slate-600/70 rounded-lg shadow-sm text-sm font-medium text-slate-300 hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-slate-900 transition-colors duration-150 ease-in-out"
            >
              <ArrowPathIcon className="h-5 w-5 mr-2" />
              Analyze Another Text
            </button>
          )}
        </Card>
        
        {/* Optional: Small hint about processing time for first-time users or complex models */}
        {!isLoading && !apiResponse && !uiError && (
            <p className="text-center text-xs text-slate-500 mt-6">
                Powered by advanced AI. Analysis may take a few moments.
            </p>
        )}
      </div>
    </div>
  );
};

export default HomePage;