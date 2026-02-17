
import { GoogleGenAI, Type } from "@google/genai";
import { LandingPageContent } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCampaignContent = async (niche: string): Promise<LandingPageContent> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate a high-converting landing page structure for the niche: ${niche}. 
    Focus on overcoming customer objections and driving immediate action.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          headline: { type: Type.STRING, description: "A punchy, attention-grabbing headline." },
          subheadline: { type: Type.STRING, description: "A supporting subheadline highlighting the primary benefit." },
          benefits: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Three powerful bullet points summarizing key benefits."
          },
          socialProof: { type: Type.STRING, description: "A short testimonial or social proof snippet." },
          ctaText: { type: Type.STRING, description: "A compelling call to action button text." },
          ctaLink: { type: Type.STRING, description: "The default destination link." }
        },
        required: ["headline", "subheadline", "benefits", "socialProof", "ctaText", "ctaLink"]
      }
    }
  });

  try {
    const data = JSON.parse(response.text.trim());
    return data;
  } catch (error) {
    console.error("Failed to parse Gemini response", error);
    // Fallback content
    return {
      headline: "Stop Wasting Money on Facebook Ads",
      subheadline: "The proven system to scale your campaigns to 6-figures without the guesswork.",
      benefits: [
        "Hyper-targeted audience reach",
        "Conversion-optimized ad creative frameworks",
        "Real-time analytics and tracking setup"
      ],
      socialProof: "Join 5,000+ marketers already winning with our strategies.",
      ctaText: "Launch Your Ad Campaign",
      ctaLink: "https://facebook.com/ads/manager"
    };
  }
};
