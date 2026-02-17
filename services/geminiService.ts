
import { GoogleGenAI, Type } from "@google/genai";
import { LandingPageContent } from "../types";

// Helper to simulate a delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock generator to ensure "AI" functionality works even without a key
const simulateAICampaign = (niche: string): LandingPageContent => {
  const topics = niche.toLowerCase();
  
  if (topics.includes('running') || topics.includes('ads') || topics.includes('facebook')) {
    return {
      headline: `The Proven Framework for ${niche}`,
      subheadline: `Stop wasting your budget on low-performing creative. Use the "Precision-First" system to scale to $10k/day profitably.`,
      benefits: [
        "Algorithm-syncing creative strategies",
        "Deep-funnel conversion tracking for iOS 14+",
        "High-velocity testing protocols"
      ],
      socialProof: "Our ROAS went from 1.2 to 4.5 in just three weeks. This is the only system that actually works in 2024.",
      ctaText: "Get The Scaling Blueprint",
      ctaLink: "https://facebook.com/ads/manager"
    };
  }

  return {
    headline: `Mastering ${niche} in 2024`,
    subheadline: `Unlock the hidden potential of your business with our AI-driven ${niche} optimization strategy.`,
    benefits: [
      "Industry-leading conversion frameworks",
      "Automated growth tracking & analytics",
      "Zero-fluff implementation guides"
    ],
    socialProof: "The results were immediate. We saved 40+ hours of manual work every month using this exact framework.",
    ctaText: "Start Generating Leads",
    ctaLink: "#"
  };
};

export const generateCampaignContent = async (niche: string): Promise<LandingPageContent> => {
  // If no API key is present, simulate the "Thinking" state and return mock data
  if (!process.env.API_KEY || process.env.API_KEY === 'undefined' || process.env.API_KEY.includes('YOUR_API_KEY')) {
    await delay(2000); // Simulate AI thinking time
    return simulateAICampaign(niche);
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
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

    const data = JSON.parse(response.text.trim());
    return data;
  } catch (error) {
    console.warn("Gemini API call failed or timed out, falling back to simulated generation.", error);
    await delay(1000); 
    return simulateAICampaign(niche);
  }
};
