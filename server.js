const express = require('express');
const next = require('next');
const dotenv = require('dotenv');
const { getJinWooResponse } = require('./chatbot'); // ✅ fixed import

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;
      const response = await getJinWooResponse(message); // ✅ fixed call
      res.json({ response });
    } catch (error) {
      console.error('Error in /api/chat:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
