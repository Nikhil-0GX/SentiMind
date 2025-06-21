// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// THIS IMPORT IS THE MOST LIKELY CULPRIT IF NO STYLES APPEAR
import './../styles/globals.css'; // IF globals.css IS IN src/styles/
// OR (if globals.css is directly in src/app/ - less common for shared styles)
// import './globals.css'; 
// OR (if using path alias like @/ for src/ and globals.css is in src/styles/)
// import '@/styles/globals.css';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Sentimind - AI Sentiment Analysis',
  description: 'Analyze text sentiment with cutting-edge AI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      {/* Ensure `inter.className` is applied for the font, but main styling comes from globals.css */}
      <body className={`${inter.className} flex flex-col h-full`}> {/* The classes here are from Tailwind, driven by globals.css */}
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}