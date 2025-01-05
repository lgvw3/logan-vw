import { AssistantResponse } from 'ai';
import OpenAI from 'openai';


const openai = new OpenAI({
    apiKey: process.env.OPEN_AI_KEY || '',
});

export async function POST(req: Request) {
    const input: {
        threadId: string | null;
        message: string;
    } = await req.json();

    // Create a new thread if threadId is not provided
    const threadId = input.threadId ?? (await openai.beta.threads.create({})).id;

    // Add the user's message to the thread
    const createdMessage = await openai.beta.threads.messages.create(threadId, {
        role: 'user',
        content: input.message,
    });

    // Use AssistantResponse to stream the response
    return AssistantResponse(
        { threadId, messageId: createdMessage.id },
        async ({ forwardStream }) => {
            const runStream = openai.beta.threads.runs.stream(threadId, {
                assistant_id: process.env.ASSISTANT_ID ?? (() => {
                throw new Error('ASSISTANT_ID is not set');
                })(),
            });

            await forwardStream(runStream);
        }
    );
}

