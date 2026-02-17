
import React, { useState, useCallback, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Preview from './components/Preview';
import { LandingPageContent, DesignConfig, AppView } from './types';
import { generateCampaignContent } from './services/geminiService';

const DEFAULT_CONTENT: LandingPageContent = {
  headline: "Stop Wasting Money on Facebook Ads",
  subheadline: "Learn the high-ROI frameworks used by the top 1% of media buyers to scale profitably in 2024.",
  benefits: [
    "Identify profitable scaling opportunities",
    "Creative frameworks that convert cold traffic",
    "Technical tracking for iOS 14+ accuracy"
  ],
  socialProof: "This system changed the way we approach Facebook ads. Our ROAS increased by 40% in just two weeks.",
  ctaText: "Launch Your Ad Campaign",
  ctaLink: "https://facebook.com/ads/manager"
};

const DEFAULT_DESIGN: DesignConfig = {
  bgColor: 'bg-slate-50',
  btnColor: 'bg-indigo-600',
  accentColor: 'indigo-500',
  textColor: 'slate-900'
};

const App: React.FC = () => {
  const [content, setContent] = useState<LandingPageContent>(DEFAULT_CONTENT);
  const [design, setDesign] = useState<DesignConfig>(DEFAULT_DESIGN);
  const [view, setView] = useState<AppView>(AppView.EDITOR);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      // For this demo, we're using a fixed niche as requested: "Facebook Running Ads"
      const newContent = await generateCampaignContent("Facebook Running Ads");
      setContent(newContent);
    } catch (error) {
      console.error("Generation error", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-slate-100">
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200">
        <h1 className="font-bold text-slate-900">Lander Pro</h1>
        <button 
          onClick={() => setView(view === AppView.EDITOR ? AppView.PREVIEW : AppView.EDITOR)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
        >
          {view === AppView.EDITOR ? 'View' : 'Edit'}
        </button>
      </div>

      {/* Editor Sidebar */}
      <div className={`${view === AppView.EDITOR ? 'block' : 'hidden'} md:block flex-shrink-0`}>
        <Sidebar 
          content={content} 
          design={design} 
          onContentChange={setContent}
          onDesignChange={setDesign}
          onGenerate={handleGenerate}
          isGenerating={isGenerating}
        />
      </div>

      {/* Main Canvas Area */}
      <main className={`flex-1 relative overflow-y-auto no-scrollbar ${view === AppView.PREVIEW ? 'block' : 'hidden md:block'}`}>
        {/* Responsive Toggle (Desktop) */}
        <div className="hidden lg:flex absolute top-6 right-8 z-50 bg-white/80 backdrop-blur border border-slate-200 p-1 rounded-xl shadow-lg gap-1">
          <button className="px-3 py-2 rounded-lg bg-indigo-50 text-indigo-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </button>
          <button className="px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
          </button>
        </div>

        <Preview content={content} design={design} />

        {/* Status indicator when generating */}
        {isGenerating && (
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
            <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4"></div>
            <h3 className="text-xl font-bold text-slate-800">Generating AI Campaign...</h3>
            <p className="text-slate-500 mt-2">Crafting high-converting copy for your niche.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
