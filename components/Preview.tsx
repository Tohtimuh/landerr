
import React from 'react';
import { LandingPageContent, DesignConfig } from '../types';

interface PreviewProps {
  content: LandingPageContent;
  design: DesignConfig;
  fullView?: boolean;
}

const Preview: React.FC<PreviewProps> = ({ content, design, fullView = false }) => {
  return (
    <div className={`w-full min-h-screen transition-all duration-700 ease-in-out ${design.bgColor} ${fullView ? 'p-0' : 'p-4 md:p-12 lg:p-20'}`}>
      <div className={`max-w-5xl mx-auto transition-all duration-700 ${fullView ? 'shadow-none rounded-none w-full max-w-none' : 'rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] bg-white overflow-hidden ring-1 ring-slate-200'}`}>
        
        <div className="bg-white min-h-screen flex flex-col">
          {/* Nav */}
          <nav className="p-8 md:px-12 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl ${design.btnColor} flex items-center justify-center shadow-lg shadow-indigo-200`}>
                <span className="text-white font-black text-lg">L</span>
              </div>
              <span className="font-extrabold text-slate-900 tracking-tight text-xl">Lander Pro</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm font-bold text-slate-400 uppercase tracking-widest">
              <a href="#" className="hover:text-slate-900 transition-colors">Framework</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Success Stories</a>
              <button className={`px-5 py-2 rounded-full text-white text-xs font-black tracking-widest uppercase transition-all hover:scale-105 active:scale-95 shadow-md ${design.btnColor}`}>Join Waitlist</button>
            </div>
          </nav>

          {/* Hero */}
          <div className="p-8 md:p-20 lg:p-24 text-center space-y-8 flex-1 flex flex-col justify-center">
            <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-[11px] font-black uppercase tracking-[0.2em] animate-fade-in">
              Proprietary Ad System 2.0
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-[900] text-slate-900 tracking-tighter leading-[1.05] max-w-4xl mx-auto">
              {content.headline}
            </h2>
            <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
              {content.subheadline}
            </p>

            <div className="pt-10 space-y-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <a 
                  href={content.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block px-12 py-5 rounded-2xl text-white font-black text-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] transform transition-all hover:scale-105 hover:-translate-y-1 active:scale-95 active:translate-y-0 ${design.btnColor}`}
                >
                  {content.ctaText}
                </a>
                <div className="text-left flex items-center gap-4 px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                      <img key={i} className="w-8 h-8 rounded-full ring-2 ring-white" src={`https://i.pravatar.cc/100?u=${i}`} alt="user" />
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900">12k+ Marketers</p>
                    <p className="text-[10px] text-slate-400 font-medium">Joined this week</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">No recurring fees • Instant Deployment</p>
            </div>
          </div>

          {/* Feature Highlight */}
          <div className="px-8 md:px-20 pb-20">
            <div className="relative group">
              <div className={`absolute -inset-4 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity ${design.btnColor}`}></div>
              <div className="relative aspect-[16/9] w-full rounded-[2rem] bg-slate-900 overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80`} 
                  alt="Dashboard Preview" 
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center shadow-2xl">
                    <svg className="w-10 h-10 text-white fill-current translate-x-1" viewBox="0 0 20 20"><path d="M4.516 3.821c.567-.324 1.277-.324 1.844 0l10.516 6.012c.563.322.563.856 0 1.178l-10.516 6.012c-.567.324-1.277.324-1.844 0-.567-.324-.567-.856 0-1.178v-12.024c0-.522.284-.856.567-.856z"/></svg>
                  </div>
                </div>
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                   <div className="space-y-1">
                      <p className="text-white font-bold text-lg">System Dashboard</p>
                      <p className="text-slate-400 text-sm font-medium">Real-time ROAS Tracking</p>
                   </div>
                   <div className="bg-emerald-500/20 backdrop-blur-md border border-emerald-500/50 px-4 py-2 rounded-xl">
                      <span className="text-emerald-400 font-bold text-sm">+248% Conversion</span>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-slate-50/50 p-8 md:p-20 lg:p-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-100">
            {content.benefits.map((benefit, i) => (
              <div key={i} className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className={`w-14 h-14 rounded-2xl ${design.btnColor} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <svg className={`w-8 h-8 ${design.btnColor.replace('bg-', 'text-')}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Benefit {i + 1}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div className="p-12 md:p-24 bg-white text-center">
            <div className="max-w-4xl mx-auto space-y-10">
              <div className="flex justify-center gap-1.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <blockquote className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug">
                "{content.socialProof}"
              </blockquote>
              <div className="flex flex-col items-center gap-4 pt-6">
                <img src="https://i.pravatar.cc/150?u=media-buyer" className="w-16 h-16 rounded-full border-4 border-slate-50 shadow-lg" alt="Testimonial Author" />
                <div>
                  <p className="text-lg font-black text-slate-900">Sarah Jenkins</p>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Director of Performance @ Elevate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Global CTA */}
          <div className="m-8 md:m-12 p-12 md:p-24 bg-slate-900 rounded-[3rem] text-center overflow-hidden relative">
            <div className={`absolute top-0 right-0 w-96 h-96 blur-[120px] rounded-full opacity-30 -mr-48 -mt-48 ${design.btnColor}`}></div>
            <div className={`absolute bottom-0 left-0 w-96 h-96 blur-[120px] rounded-full opacity-20 -ml-48 -mb-48 ${design.btnColor}`}></div>
            
            <div className="relative z-10 space-y-8">
              <h3 className="text-4xl md:text-6xl font-[900] text-white tracking-tighter max-w-2xl mx-auto">
                Ready to dominate your market?
              </h3>
              <p className="text-slate-400 font-medium text-lg max-w-lg mx-auto">
                Join 50,000+ businesses who have scaled their operations using our high-converting landing page frameworks.
              </p>
              <div className="pt-8">
                <button 
                  className={`px-12 py-5 rounded-2xl text-white font-black text-xl shadow-2xl transition-all hover:scale-105 active:scale-95 ${design.btnColor}`}
                >
                  {content.ctaText}
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="p-12 text-center border-t border-slate-100 bg-white">
            <div className="flex flex-col items-center gap-8">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg ${design.btnColor} flex items-center justify-center`}>
                  <span className="text-white font-black text-xs">L</span>
                </div>
                <span className="font-extrabold text-slate-900 tracking-tight">Lander Pro</span>
              </div>
              <div className="flex flex-wrap justify-center gap-8 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Support</a>
                <a href="#" className="hover:text-slate-900 transition-colors">Billing</a>
              </div>
              <p className="text-[10px] text-slate-300 font-medium tracking-widest uppercase">
                © 2024 Lander Pro Inc. All rights reserved. Powered by Gemini AI.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Preview;
