// src/components/SentimentAnalysisResult.tsx
import React from 'react';
import {
  FaceSmileIcon,
  FaceFrownIcon,
  MinusCircleIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline';

interface SentimentAnalysisResultProps {
  sentiment: 'positive' | 'negative' | 'neutral' | string | null;
  // confidence?: number; // For future
}

const SentimentAnalysisResult: React.FC<SentimentAnalysisResultProps> = ({ sentiment }) => {
  if (!sentiment) return null;

  let bgColorClass = 'bg-gray-600/40';
  let textColorClass = 'text-gray-200';
  let borderColorClass = 'border-gray-500';
  let Icon = QuestionMarkCircleIcon;
  let sentimentText = 'Unknown';

  switch (sentiment.toLowerCase()) {
    case 'positive':
      bgColorClass = 'bg-green-500/30';
      textColorClass = 'text-green-300';
      borderColorClass = 'border-green-500/50';
      Icon = FaceSmileIcon;
      sentimentText = 'Positive';
      break;
    case 'negative':
      bgColorClass = 'bg-red-500/30';
      textColorClass = 'text-red-300';
      borderColorClass = 'border-red-500/50';
      Icon = FaceFrownIcon;
      sentimentText = 'Negative';
      break;
    case 'neutral':
      bgColorClass = 'bg-sky-500/30';
      textColorClass = 'text-sky-300';
      borderColorClass = 'border-sky-500/50';
      Icon = MinusCircleIcon;
      sentimentText = 'Neutral';
      break;
  }

  return (
    <div
      className={`mt-8 p-6 rounded-xl border ${borderColorClass} ${bgColorClass} shadow-lg transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center">
        <Icon className={`h-12 w-12 mr-4 flex-shrink-0 ${textColorClass}`} />
        <div>
          <p className={`text-sm font-medium ${textColorClass} opacity-80`}>Detected Sentiment:</p>
          <p className={`text-3xl font-semibold ${textColorClass}`}>{sentimentText}</p>
        </div>
      </div>
      {/* Placeholder for confidence score if added later
      {typeof confidence === 'number' && (
        <div className="mt-4">
          <p className={`text-xs ${textColorClass} opacity-70`}>Confidence: {(confidence * 100).toFixed(1)}%</p>
          <div className="w-full bg-slate-700 rounded-full h-1.5 mt-1">
            <div
              className={`h-1.5 rounded-full ${bgColorClass.replace('/30', '/80')}`} // A bit hacky for color
              style={{ width: `${confidence * 100}%` }}
            ></div>
          </div>
        </div>
      )}
      */}
    </div>
  );
};

export default SentimentAnalysisResult;