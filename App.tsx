
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Preview from './components/Preview';
import { LandingPageContent, DesignConfig, AppView } from './types';
import { generateCampaignContent } from './services/geminiService';

const DEFAULT_CONTENT: LandingPageContent = {
  headline: "Stop Wasting Money on Facebook Ads",
  subheadline: "The proven high-ROI system used by the top 1% of digital marketers to scale campaigns profitably.",
  benefits: [
    "Precision targeting for high-intent buyers",
    "Conversion-optimized ad creative frameworks",
    "Scalable tracking systems for iOS 14+ compliance"
  ],
  socialProof: "Lander Pro transformed our ad strategy. We saw a 3.5x ROAS increase within the first month of switching.",
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
  const [niche, setNiche] = useState<string>("Facebook Running Ads");
  const [view, setView] = useState<AppView>(AppView.EDITOR);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!niche) return;
    setIsGenerating(true);
    try {
      const newContent = await generateCampaignContent(niche);
      setContent(newContent);
    } catch (error) {
      console.error("Generation error", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-slate-100 overflow-hidden">
      {/* View Toggle Bar (Floating) */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[100] bg-white/90 backdrop-blur-md border border-slate-200 p-1.5 rounded-2xl shadow-2xl flex items-center gap-1">
        <button 
          onClick={() => setView(AppView.EDITOR)}
          className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold transition-all ${view === AppView.EDITOR ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
          Edit
        </button>
        <button 
          onClick={() => setView(AppView.PREVIEW)}
          className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold transition-all ${view === AppView.PREVIEW ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
          View
        </button>
      </div>

      {/* Editor Sidebar */}
      <div className={`transition-all duration-300 ease-in-out ${view === AppView.EDITOR ? 'w-full md:w-80 lg:w-96 translate-x-0' : 'w-0 -translate-x-full overflow-hidden'}`}>
        <Sidebar 
          niche={niche}
          onNicheChange={setNiche}
          content={content} 
          design={design} 
          onContentChange={setContent}
          onDesignChange={setDesign}
          onGenerate={handleGenerate}
          isGenerating={isGenerating}
        />
      </div>

      {/* Main Canvas Area */}
      <main className={`flex-1 relative overflow-y-auto no-scrollbar transition-all duration-300 ${view === AppView.PREVIEW ? 'w-full' : ''}`}>
        <div className={`transition-all duration-500 ${view === AppView.PREVIEW ? 'scale-100 opacity-100' : 'scale-[0.98] opacity-95'}`}>
          <Preview content={content} design={design} fullView={view === AppView.PREVIEW} />
        </div>

        {/* Generation Overlay */}
        {isGenerating && (
          <div className="fixed inset-0 bg-white/80 backdrop-blur-md z-[200] flex flex-col items-center justify-center animate-in fade-in duration-300">
            <div className="relative">
              <div className="w-24 h-24 border-8 border-slate-100 border-t-indigo-600 rounded-full animate-spin"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg animate-pulse flex items-center justify-center">
                   <span className="text-white font-black text-xl">L</span>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-black text-slate-900 mt-8 tracking-tight">Designing Your Campaign</h3>
            <p className="text-slate-500 mt-2 font-medium">Gemini AI is analyzing competitive ad data...</p>
            <div className="mt-8 flex gap-2">
              <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
