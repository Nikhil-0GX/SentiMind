// src/app/terms/page.tsx
import type { Metadata } from 'next';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Terms of Service | Sentimind',
  description: 'Read the Terms of Service for Sentimind AI sentiment analysis tool.',
};

const TermsPage = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Terms of Service</h1>
      </div>
      <Card className="max-w-3xl mx-auto">
        <div className="prose prose-invert prose-slate max-w-none text-slate-300">
        <p className="text-slate-400 text-sm">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using Sentimind (&quot;the Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Service.</p>

          <h2>2. Description of Service</h2>
          <p>Sentimind provides users with an AI-powered tool to analyze the sentiment of text. The Service is provided &quot;AS IS&quot; and we assume no responsibility for the timeliness, deletion, mis-delivery or failure to store any user communications or personalization settings.</p>

          <h2>3. User Conduct</h2>
          <p>You agree not to use the Service to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Analyze any text that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, libelous, invasive of another&apos;s privacy, hateful, or racially, ethnically or otherwise objectionable.</li>
            <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
            <li>Analyze any text that infringes any patent, trademark, trade secret, copyright or other proprietary rights of any party.</li>
            <li>Interfere with or disrupt the Service or servers or networks connected to the Service.</li>
          </ul>

          <h2>4. Intellectual Property</h2>
          <p>The Service and its original content (excluding content provided by users for analysis), features, and functionality are and will remain the exclusive property of Sentimind and its licensors. The text you submit for analysis remains your property; we claim no ownership over it.</p>

          <h2>5. Disclaimer of Warranties</h2>
          <p>You expressly understand and agree that your use of the Service is at your sole risk. The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. Sentimind expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to the implied warranties of merchantability, fitness for a particular purpose and non-infringement.</p>
          <p>Sentimind makes no warranty that (i) the Service will meet your requirements, (ii) the Service will be uninterrupted, timely, secure, or error-free, (iii) the results that may be obtained from the use of the Service will be accurate or reliable.</p>

          <h2>6. Limitation of Liability</h2>
          <p>You expressly understand and agree that Sentimind shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses resulting from the use or the inability to use the service.</p>

          <h2>7. Modification to Terms</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>

          <h2>8. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at [Your Placeholder Contact Email].</p>
        </div>
      </Card>
    </div>
  );
};

export default TermsPage;