// src/components/SentimentAnalysisForm.tsx
import React from 'react';
import LoadingSpinner from '@/components/ui/LoadingSpinner'; // Assuming you have this for the button

interface SentimentAnalysisFormProps {
  text: string;
  setText: (text: string) => void; // Function passed from HomePage to update the text state
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  placeholder?: string;
}

const SentimentAnalysisForm: React.FC<SentimentAnalysisFormProps> = ({
  text,
  setText, // This is the prop from HomePage used to update the text state
  onSubmit,
  isLoading,
  placeholder = "Enter text to analyze sentiment..."
}) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label htmlFor="sentiment-text" className="sr-only">
          {placeholder}
        </label>
        <textarea
          id="sentiment-text"
          name="sentimentText"
          rows={5}
          className="block w-full p-4 bg-slate-700/50 border border-slate-600 rounded-lg shadow-sm placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm text-slate-100 transition-shadow duration-150 ease-in-out"
          placeholder={placeholder}
          value={text} // Controlled component: value is driven by the 'text' prop
          // Corrected onChange:
          // It takes the event, extracts the new value from e.target.value,
          // and calls the 'setText' function (passed as a prop) to update
          // the state in the parent component (HomePage).
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
          disabled={isLoading}
          required // HTML5 validation for non-empty field
        />
      </div>
      <div>
        <button
          type="submit"
          disabled={isLoading || !text.trim()} // Disable if loading or text is empty/whitespace
          className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 focus:ring-offset-slate-900 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-150 ease-in-out"
        >
          {isLoading ? (
            <>
              <LoadingSpinner className="h-5 w-5 mr-3 text-white" /> {/* Adjusted margin */}
              <span>Analyzing...</span>
            </>
          ) : (
            <span>Analyze Sentiment</span>
          )}
        </button>
      </div>
    </form>
  );
};

export default SentimentAnalysisForm;