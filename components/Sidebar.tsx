
import React from 'react';
import { DesignConfig, LandingPageContent, TailwindColor } from '../types';
import { COLOR_PALETTE, BG_PALETTE } from '../constants';

interface SidebarProps {
  content: LandingPageContent;
  design: DesignConfig;
  niche: string;
  onNicheChange: (niche: string) => void;
  onContentChange: (content: LandingPageContent) => void;
  onDesignChange: (design: DesignConfig) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  content, 
  design, 
  niche,
  onNicheChange,
  onContentChange, 
  onDesignChange, 
  onGenerate, 
  isGenerating 
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onContentChange({ ...content, [name]: value });
  };

  const setBtnColor = (color: TailwindColor) => {
    onDesignChange({ ...design, btnColor: color.bgClass });
  };

  const setBgColor = (color: TailwindColor) => {
    onDesignChange({ ...design, bgColor: color.bgClass });
  };

  return (
    <aside className="w-full md:w-80 lg:w-96 border-r border-slate-200 bg-white h-screen overflow-y-auto no-scrollbar flex flex-col shadow-xl z-20">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-xs">LP</span>
          </div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Lander Pro</h1>
        </div>
        <span className="px-2 py-0.5 text-[10px] font-bold bg-indigo-50 text-indigo-600 rounded-md uppercase tracking-wider">v2.0</span>
      </div>

      <div className="p-6 space-y-8 flex-1">
        {/* Topic Section */}
        <section>
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Topic / Niche</label>
          <div className="space-y-3">
            <input 
              type="text" 
              placeholder="e.g. Facebook Running Ads" 
              className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all bg-slate-50 font-medium"
              value={niche}
              onChange={(e) => onNicheChange(e.target.value)}
            />
            <button 
              onClick={onGenerate}
              disabled={isGenerating || !niche}
              className="w-full bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 text-white px-4 py-3 rounded-xl text-sm font-bold transition-all transform active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                  Thinking...
                </>
              ) : 'Generate AI Campaign'}
            </button>
          </div>
        </section>

        {/* Design Section */}
        <section className="space-y-5">
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Design Controls</label>
          
          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-3 ml-1 uppercase tracking-tighter">BG COLOR</label>
            <div className="flex flex-wrap gap-2.5">
              {BG_PALETTE.map((c) => (
                <button 
                  key={c.name}
                  onClick={() => setBgColor(c)}
                  className={`w-9 h-9 rounded-xl border-2 transition-all ${c.bgClass} ${design.bgColor === c.bgClass ? 'ring-2 ring-indigo-500 border-white scale-110 shadow-md' : 'border-slate-100 hover:scale-105'}`}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-slate-500 mb-3 ml-1 uppercase tracking-tighter">BUTTON COLOR</label>
            <div className="flex flex-wrap gap-2.5">
              {COLOR_PALETTE.map((c) => (
                <button 
                  key={c.name}
                  onClick={() => setBtnColor(c)}
                  className={`w-9 h-9 rounded-xl border-2 transition-all ${c.bgClass} ${design.btnColor === c.bgClass ? 'ring-2 ring-indigo-500 border-white scale-110 shadow-md' : 'border-slate-100 hover:scale-105'}`}
                  title={c.name}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="space-y-4">
          <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Content & Links</label>
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1.5 ml-1 uppercase tracking-tighter">Headline</label>
              <textarea 
                name="headline"
                rows={3}
                className="w-full px-4 py-3 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none resize-none bg-slate-50 font-medium leading-relaxed"
                value={content.headline}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1.5 ml-1 uppercase tracking-tighter">CTA Text</label>
              <input 
                name="ctaText"
                type="text" 
                className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none bg-slate-50 font-medium"
                value={content.ctaText}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 mb-1.5 ml-1 uppercase tracking-tighter">Destination URL</label>
              <input 
                name="ctaLink"
                type="text" 
                className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none bg-slate-50 font-medium"
                value={content.ctaLink}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </section>
      </div>

      <div className="p-6 bg-slate-50 border-t border-slate-100 grid grid-cols-1 gap-3 sticky bottom-0">
        <button 
          onClick={() => alert('Lander package export is being prepared...')}
          className="flex items-center justify-center gap-2 w-full p-3.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm active:scale-95 group"
        >
          <svg className="w-5 h-5 text-slate-500 group-hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Download Lander</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
