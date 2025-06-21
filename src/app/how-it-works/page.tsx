// src/app/how-it-works/page.tsx
import type { Metadata } from 'next';
import Card from '@/components/ui/Card';
import { ArrowDownOnSquareIcon, CogIcon, MagnifyingGlassIcon, SparklesIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'How Sentimind Works | AI Sentiment Analysis',
  description: 'Understand the step-by-step process Sentimind uses to analyze text sentiment with advanced AI.',
};

const steps = [
  {
    id: 1,
    name: 'Input Your Text',
    description: 'You begin by typing or pasting the text you wish to analyze into the intuitive input field on our homepage. There\'s no limit to your curiosity!',
    icon: ArrowDownOnSquareIcon,
  },
  {
    id: 2,
    name: 'AI Processing Engine',
    description: 'Once submitted, your text is securely sent to our backend. Here, our advanced AI model, powered by Hugging Face Transformers, gets to work. It tokenizes the text, processes it through multiple layers of neural networks to understand context and nuances.',
    icon: CogIcon,
  },
  {
    id: 3,
    name: 'Sentiment Classification',
    description: 'The AI model then classifies the overall sentiment of the text as Positive, Negative, or Neutral (based on its training and confidence scores). This involves complex calculations to determine the dominant emotional tone.',
    icon: MagnifyingGlassIcon,
  },
  {
    id: 4,
    name: 'Results Displayed',
    description: 'Within moments, the determined sentiment is sent back to your browser and displayed in a clear, easy-to-understand format, often accompanied by visual cues to highlight the emotional tone.',
    icon: SparklesIcon,
  },
];

const HowItWorksPage = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          How{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500">
            Sentimind Works
          </span>
        </h1>
        <p className="mt-4 text-lg leading-7 text-slate-300 max-w-3xl mx-auto">
          Delve into the simple yet powerful process our AI uses to uncover the sentiment hidden within your text.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-10">
          {steps.map((step, index) => (
            <Card key={step.id} className={`relative ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
              {/* Decorative line for larger screens - optional */}
              {index < steps.length -1 && (
                <div className={`hidden md:block absolute top-1/2 ${index % 2 === 0 ? 'right-full mr-4' : 'left-full ml-4'} w-8 h-px bg-slate-600`}></div>
              )}
               <div className={`hidden md:block absolute top-1/2 ${index % 2 === 0 ? 'right-full mr-8 -mt-2' : 'left-full ml-8 -mt-2'} w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-slate-800`}></div>


              <div className="md:flex md:items-start md:space-x-6">
                <div className="flex-shrink-0 flex justify-center items-center w-16 h-16 rounded-full bg-cyan-500/20 mx-auto md:mx-0 mb-4 md:mb-0">
                  <step.icon className="h-8 w-8 text-cyan-400" aria-hidden="true" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-semibold text-slate-100">
                    <span className="text-cyan-400 mr-2">Step {step.id}:</span> {step.name}
                  </h3>
                  <p className="mt-2 text-slate-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <Card className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-100 mb-3">Behind the Magic</h2>
            <p className="text-slate-300 leading-relaxed">
                The "magic" is a result of extensive research in artificial intelligence and machine learning. Our models are trained on vast amounts of text data to learn the patterns and subtleties of human language. While AI is powerful, sentiment can be subjective and context-dependent. Sentimind aims to provide a highly accurate general sentiment, but results should always be considered within their broader context.
            </p>
        </Card>
      </div>
    </div>
  );
};

export default HowItWorksPage;