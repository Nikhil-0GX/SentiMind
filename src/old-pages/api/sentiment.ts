import { NextApiRequest, NextApiResponse } from 'next';
import { SentimentAnalysis } from '@/lib/sentiment-analysis';

const sentimentHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { text } = req.body;

      if (!text) {
        return res.status(400).json({ error: 'Text is required' });
      }

      const sentiment = await SentimentAnalysis(text);
      return res.status(200).json({ sentiment });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to analyze sentiment' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};

export default sentimentHandler;