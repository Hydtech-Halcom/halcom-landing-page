import Groq from "groq-sdk";
import chatbotData from "@/app/data/chabot.json";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Prepare system prompt using the knowledge base from JSON
    const knowledgeBase = JSON.stringify(chatbotData.data, null, 2);

    const systemPrompt = `
      You are the Halcom Virtual Assistant, an AI representative for Halcom, an IT Infrastructure Specialist established in 2003.
      
      Your goal is to assist users based on the following company knowledge base:
      ${knowledgeBase}
      
      Guidelines:
      1. Use the knowledge base provided above as your primary source of truth.
      2. If the user asks something not in the knowledge base, try to answer professionally while staying relevant to IT Infrastructure, or direct them to sales@halcominovasi.co.id.
      3. Be professional, helpful, and friendly.
      4. Keep responses concise and suitable for a chat window.
      5. You can speak in the language the user uses (English or Indonesian).
    `;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map((m: any) => ({
          role: m.sender === "user" ? "user" : "assistant",
          content: m.text,
        })),
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 500,
    });

    const response = chatCompletion.choices[0]?.message?.content || "I'm sorry, I couldn't process that.";

    return new Response(JSON.stringify({ text: response }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Groq API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch response" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
