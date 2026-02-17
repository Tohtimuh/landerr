
import React from 'react';
import { DesignConfig, LandingPageContent, TailwindColor } from '../types';
import { COLOR_PALETTE, BG_PALETTE } from '../constants';

interface SidebarProps {
  content: LandingPageContent;
  design: DesignConfig;
  onContentChange: (content: LandingPageContent) => void;
  onDesignChange: (design: DesignConfig) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  content, 
  design, 
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
    <aside className="w-full md:w-80 lg:w-96 border-r border-slate-200 bg-white h-screen overflow-y-auto no-scrollbar flex flex-col">
      <div className="p-6 border-b border-slate-100 flex items-center justify-between">
        <h1 className="text-xl font-bold text-slate-900 tracking-tight">Lander Pro</h1>
        <span className="px-2 py-1 text-[10px] font-bold bg-indigo-100 text-indigo-700 rounded-full uppercase">Alpha</span>
      </div>

      <div className="p-6 space-y-8 flex-1">
        {/* Topic Section */}
        <section>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">AI Campaign Topic</label>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="e.g. Facebook Running Ads" 
              className="flex-1 px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              value={content.headline === 'Stop Wasting Money on Facebook Ads' ? 'Facebook Running Ads' : ''}
              readOnly
            />
            <button 
              onClick={onGenerate}
              disabled={isGenerating}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              {isGenerating ? '...' : 'AI Generate'}
            </button>
          </div>
        </section>

        {/* Content Section */}
        <section className="space-y-4">
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Content & Links</label>
          <div>
            <label className="block text-xs text-slate-500 mb-1 ml-1">Headline</label>
            <textarea 
              name="headline"
              rows={2}
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
              value={content.headline}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1 ml-1">CTA Text</label>
            <input 
              name="ctaText"
              type="text" 
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              value={content.ctaText}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 mb-1 ml-1">Destination URL</label>
            <input 
              name="ctaLink"
              type="text" 
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              value={content.ctaLink}
              onChange={handleInputChange}
            />
          </div>
        </section>

        {/* Design Section */}
        <section className="space-y-4">
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Design Controls</label>
          
          <div>
            <label className="block text-xs text-slate-500 mb-2 ml-1">Background Color</label>
            <div className="flex flex-wrap gap-2">
              {BG_PALETTE.map((c) => (
                <button 
                  key={c.name}
                  onClick={() => setBgColor(c)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${c.bgClass} ${design.bgColor === c.bgClass ? 'ring-2 ring-indigo-500 border-white' : 'border-slate-200'}`}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs text-slate-500 mb-2 ml-1">Button Color</label>
            <div className="flex flex-wrap gap-2">
              {COLOR_PALETTE.map((c) => (
                <button 
                  key={c.name}
                  onClick={() => setBtnColor(c)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${c.bgClass} ${design.btnColor === c.bgClass ? 'ring-2 ring-indigo-500 border-white' : 'border-slate-200'}`}
                  title={c.name}
                />
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="p-6 bg-slate-50 border-t border-slate-100 grid grid-cols-2 gap-3">
        <button 
          onClick={() => alert('Feature coming soon: Download full package')}
          className="flex flex-col items-center justify-center p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-sm"
        >
          <svg className="w-5 h-5 text-slate-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">Download</span>
        </button>
        <button 
          onClick={() => window.open(content.ctaLink, '_blank')}
          className="flex flex-col items-center justify-center p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors shadow-sm"
        >
          <svg className="w-5 h-5 text-slate-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
          <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tighter">View Live</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
