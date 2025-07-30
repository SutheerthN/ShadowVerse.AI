import { getJinWooResponse } from '../../chatbot';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    try {
      const response = await getJinWooResponse(message);
      res.status(200).json({ response });
    } catch (error) {
      res.status(500).json({ error: 'Failed to summon the Shadow Monarch.' });
    }
  } else {
    res.status(405).json({ error: 'Only POST allowed.' });
  }
}
