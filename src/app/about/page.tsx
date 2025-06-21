// src/app/about/page.tsx
import type { Metadata } from 'next';
import Card from '@/components/ui/Card';
import { InformationCircleIcon, CpuChipIcon, CodeBracketIcon, UsersIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'About Sentimind | AI Sentiment Analysis',
  description: 'Discover the mission, technology, and vision behind Sentimind, your advanced AI-powered sentiment analysis tool.',
};

const AboutPage = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          About{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500">
            Sentimind
          </span>
        </h1>
        <p className="mt-4 text-lg leading-7 text-slate-300 max-w-3xl mx-auto">
          Sentimind is dedicated to making advanced AI accessible for understanding the emotional nuances in text. We believe in the power of language and the insights AI can provide.
        </p>
      </div>

      <div className="max-w-5xl mx-auto space-y-12">
        <Card>
          <div className="md:flex md:items-start md:space-x-8">
            <div className="flex-shrink-0 flex justify-center md:justify-start mb-4 md:mb-0">
              <InformationCircleIcon className="h-16 w-16 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-100 mb-3">Our Mission</h2>
              <p className="text-slate-300 leading-relaxed">
                Our mission is to provide an intuitive, powerful, and reliable tool that empowers individuals and businesses to gain deeper insights from textual data. We aim to demystify sentiment analysis, making it a practical asset for content creators, marketers, researchers, and anyone interested in the emotional tone of communication.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="md:flex md:items-start md:space-x-8">
            <div className="flex-shrink-0 flex justify-center md:justify-start mb-4 md:mb-0">
              <CpuChipIcon className="h-16 w-16 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-100 mb-3">The Technology</h2>
              <p className="text-slate-300 leading-relaxed">
                Sentimind leverages state-of-the-art Natural Language Processing (NLP) models. At its core, it utilizes a sophisticated transformer-based architecture, specifically a fine-tuned DistilBERT model from the Hugging Face ecosystem. This allows for nuanced understanding of context and sentiment, going beyond simple keyword matching.
              </p>
              <p className="text-slate-300 leading-relaxed mt-3">
                The backend is designed for efficiency, aiming to deliver quick and accurate analyses. The frontend is built with modern web technologies to ensure a seamless and responsive user experience.
              </p>
            </div>
          </div>
        </Card>

        <Card>
           <div className="md:flex md:items-start md:space-x-8">
            <div className="flex-shrink-0 flex justify-center md:justify-start mb-4 md:mb-0">
              <CodeBracketIcon className="h-16 w-16 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-100 mb-3">Built With Passion & Precision</h2>
              <p className="text-slate-300 leading-relaxed">
                This application is crafted using a modern tech stack including:
              </p>
              <ul className="list-disc list-inside text-slate-300 mt-3 space-y-1">
                <li><strong className="text-slate-200">Next.js (App Router):</strong> For a fast, scalable, and modern React framework.</li>
                <li><strong className="text-slate-200">TypeScript:</strong> For robust, type-safe code.</li>
                <li><strong className="text-slate-200">Tailwind CSS:</strong> For utility-first, responsive design.</li>
                <li><strong className="text-slate-200">Hugging Face Transformers:</strong> For cutting-edge NLP models.</li>
              </ul>
            </div>
          </div>
        </Card>
         <Card>
           <div className="md:flex md:items-start md:space-x-8">
            <div className="flex-shrink-0 flex justify-center md:justify-start mb-4 md:mb-0">
              <UsersIcon className="h-16 w-16 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-slate-100 mb-3">The Team (Conceptual)</h2>
              <p className="text-slate-300 leading-relaxed">
                Sentimind is developed by a passionate individual/team dedicated to exploring the intersection of AI and human language. We are committed to continuous improvement and bringing valuable AI tools to a wider audience.
                 {/* If this is a portfolio project, you can add a bit about yourself here. */}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;