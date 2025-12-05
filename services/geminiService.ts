import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
// Note: In a real production app, ensure API_KEY is handled securely.
// We are following the specific strict guidelines for this environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateAIResponse = async (userMessage: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "I'm currently in offline mode (API Key missing). I can tell you that XYZ Solutions offers premier GPS tracking services.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `
      You are the AI Assistant for XYZ Solutions, a cutting-edge GPS technology company built for "Hustle Arena" by "Team Predator".
      Your tone is professional, futuristic, and helpful.
      
      Company Info:
      - Name: XYZ Solutions (Powered by Latiyal Nexus technology)
      - Focus: Smart vehicle tracking, fleet monitoring, logistics data.
      - Key Features: GPS Tracking, Route Monitoring, Anti-Theft, Analytics, Fuel Tracking.
      - Team: Harsh, Aryan, Ranjan (Team Predator).
      - Institutional Context: IIT Patna BSc.
      
      Keep responses concise (under 50 words unless asked for detail).
      Emphasize "Security", "Speed", and "Technology".
    `;

    const response = await ai.models.generateContent({
      model,
      contents: userMessage,
      config: {
        systemInstruction,
      }
    });

    return response.text || "I processed that, but couldn't generate a text response.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "System interference detected. Please try again later.";
  }
};