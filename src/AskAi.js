import { createGroq } from '@ai-sdk/groq';
import { generateText } from 'ai';

const apiKey = import.meta.env.VITE_GROQ_API_KEY;

if (!apiKey) {
    throw new Error('Groq API key is missing. Check your .env file.');
}

const groq = createGroq({
    apiKey: apiKey,
});

export default async function askAi(question) {
    const result = await generateText({
        model: groq('openai/gpt-oss-20b'),
        prompt: question,
    });

    return result.text;
}