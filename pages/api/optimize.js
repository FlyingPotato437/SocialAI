// pages/api/optimize.js
import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { text, platform } = req.body;

  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    // Example prompt, modify as needed
    const prompt = `Please optimize the following text for ${platform}:\n\n${text}`;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 150
    });

    res.status(200).json({ optimizedText: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error('Error in OpenAI request:', error);
    res.status(500).json({ message: 'Error processing your request' });
  }
}
