// src/components/ui/Card.tsx
import React from 'react'

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: string; // e.g., 'p-6', 'p-8'
}

const Card: React.FC<CardProps> = ({ children, className = '', padding = 'p-6 sm:p-8' }) => {
  return (
    <div
      className={`bg-gray-700/30 backdrop-blur-lg shadow-2xl rounded-xl ${padding} ${className}`}
      // For Safari, sometimes backdrop-filter needs -webkit- prefix, but Tailwind should handle this.
      // If blur isn't working on Safari, you might need to add a custom utility.
    >
      {children}
    </div>
  )
}

export default Card