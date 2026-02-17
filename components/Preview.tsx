
import React from 'react';
import { LandingPageContent, DesignConfig } from '../types';

interface PreviewProps {
  content: LandingPageContent;
  design: DesignConfig;
  fullView?: boolean;
}

const Preview: React.FC<PreviewProps> = ({ content, design, fullView = false }) => {
  return (
    <div className={`w-full min-h-full transition-colors duration-500 ${design.bgColor} ${fullView ? 'p-0' : 'p-4 md:p-8'}`}>
      <div className={`max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden bg-white ${fullView ? 'shadow-none rounded-none min-h-screen' : ''}`}>
        
        {/* Header/Nav Mock */}
        <nav className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg ${design.btnColor} flex items-center justify-center shadow-lg`}>
              <span className="text-white font-black text-sm">L</span>
            </div>
            <span className="font-bold text-slate-900">Lander Pro</span>
          </div>
          <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Testimonials</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Pricing</a>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="p-8 md:p-16 text-center space-y-6">
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {content.headline}
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {content.subheadline}
          </p>

          <div className="pt-8">
            <a 
              href={content.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-10 py-5 rounded-full text-white font-bold text-lg shadow-xl transform transition-transform hover:scale-105 active:scale-95 ${design.btnColor}`}
            >
              {content.ctaText}
            </a>
            <p className="mt-4 text-xs text-slate-400">Risk-free. No credit card required.</p>
          </div>
        </div>

        {/* Image / Visual Asset Placeholder */}
        <div className="px-8 md:px-16 pb-16">
          <div className="aspect-video w-full rounded-2xl bg-slate-100 overflow-hidden relative shadow-inner border border-slate-200">
            <img 
              src={`https://picsum.photos/seed/${content.headline.length}/1200/675`} 
              alt="Campaign Preview" 
              className="w-full h-full object-cover mix-blend-multiply opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-slate-900 translate-x-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M4.516 3.821c.567-.324 1.277-.324 1.844 0l10.516 6.012c.563.322.563.856 0 1.178l-10.516 6.012c-.567.324-1.277.324-1.844 0-.567-.324-.567-.856 0-1.178v-12.024c0-.522.284-.856.567-.856z"/></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Features / Bullet Points */}
        <div className="bg-slate-50 p-8 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-100">
          {content.benefits.map((benefit, i) => (
            <div key={i} className="space-y-3">
              <div className={`w-10 h-10 rounded-xl ${design.btnColor} bg-opacity-10 flex items-center justify-center`}>
                <svg className={`w-6 h-6 ${design.btnColor.replace('bg-', 'text-')}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
              </div>
              <p className="font-semibold text-slate-900 leading-snug">{benefit}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="p-8 md:p-16 text-center border-t border-slate-100 bg-white">
          <div className="flex justify-center gap-1 mb-6">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl font-medium text-slate-800 italic max-w-3xl mx-auto leading-relaxed">
            "{content.socialProof}"
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200">
              <img src="https://picsum.photos/seed/profile/200/200" alt="Reviewer" />
            </div>
            <div className="text-left">
              <p className="font-bold text-slate-900">Alex Rivers</p>
              <p className="text-sm text-slate-500">Growth Lead @ MarketScale</p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-slate-900 text-white p-12 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to scale your business?</h3>
          <button 
            className={`px-8 py-4 rounded-full font-bold transition-all hover:opacity-90 active:scale-95 ${design.btnColor}`}
          >
            {content.ctaText}
          </button>
          <div className="mt-12 text-slate-500 text-xs flex flex-col md:flex-row justify-center gap-4 md:gap-12">
            <span>&copy; 2024 Lander Pro Inc.</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
