// src/app/privacy/page.tsx
import type { Metadata } from 'next';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sentimind',
  description: 'Read the Privacy Policy for Sentimind AI sentiment analysis tool.',
};

const PrivacyPage = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
      </div>
      <Card className="max-w-3xl mx-auto">
        <div className="prose prose-invert prose-slate max-w-none text-slate-300"> {/* prose classes for nice text formatting */}
          <p className="text-slate-400 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2>1. Introduction</h2>
          <p>Welcome to Sentimind (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at [Your Contact Email/Link].</p>
          <p>This privacy notice describes how we might use your information if you visit our website at [Your Website URL] or use our services.</p>

          <h2>2. Information We Collect</h2>
          <p>When you use Sentimind, the primary data we process is the text you submit for sentiment analysis. We do <strong className="text-slate-100">not</strong> store the text you analyze after the analysis is complete and the result is returned to you, unless explicitly stated for features like "analysis history" (which is not currently implemented).</p>
          <p>We may collect standard web log information, such as your IP address, browser type, and access times, for the purpose of monitoring and improving our service, and for security purposes. This data is typically anonymized or aggregated.</p>

          <h2>3. How We Use Your Information</h2>
          <p>The text you submit is used solely for the purpose of performing sentiment analysis and returning the result to you. We do not use this text for training our models or for any other purpose without your explicit consent.</p>
          <p>Aggregated and anonymized usage data may be used to understand service usage patterns, improve our application, and ensure its stability and security.</p>

          <h2>4. Will Your Information Be Shared With Anyone?</h2>
          <p>We do not sell, trade, or rent your personal identification information or the content you analyze to others.</p>
          <p>We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.</p>

          <h2>5. Data Security</h2>
          <p>We implement a variety of security measures to maintain the safety of your personal information and the text you analyze. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.</p>

          <h2>6. Your Data Rights</h2>
          <p>Since we do not permanently store the text you analyze (beyond the immediate processing time), there is no persistent data to request deletion for regarding specific analyses. For any concerns about logs or other data, please contact us.</p>

          <h2>7. Changes to This Privacy Notice</h2>
          <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated &quot;Last updated&quot; date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>

          <h2>8. Contact Us</h2>
          <p>If you have questions or comments about this notice, you may email us at [Your Placeholder Contact Email] or by post to:</p>
          <p>[Your Placeholder Physical Address, if applicable]</p>
        </div>
      </Card>
    </div>
  );
};

export default PrivacyPage;