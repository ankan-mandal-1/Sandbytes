import React, { useState } from 'react';
import { Check, Zap } from 'lucide-react';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  // Pricing values in INR
  const monthlyRate = 899;
  const yearlyRate = 699; 

  return (
    <section className="py-12 md:py-32 max-w-7xl mx-auto relative">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-purple-200/20 blur-[80px] md:blur-[100px] rounded-full" />
      </div>

      <div className="text-center mb-10 md:mb-24 px-4">
        <div className="inline-flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-full mb-4 md:mb-6">
          <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
          <span className="text-purple-600 font-bold text-[9px] md:text-[10px] uppercase tracking-widest">Investment Plans</span>
        </div>
        
        <h2 className="text-4xl md:text-7xl font-[1000] text-slate-900 mb-4 tracking-tighter leading-none">
          Scale your <span className="italic font-serif text-slate-400">vision.</span>
        </h2>
        
        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <span className={`text-xs font-black transition-colors ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className="w-14 h-7 bg-slate-200 rounded-full relative p-1 transition-all duration-300"
          >
            <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-out ${isYearly ? 'translate-x-7' : 'translate-x-0'}`} />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-black transition-colors ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Yearly</span>
            <span className="bg-emerald-100 text-emerald-600 text-[8px] font-black px-1.5 py-0.5 rounded-md uppercase tracking-tighter">Save 20%</span>
          </div>
        </div>
      </div>

      {/* MOBILE SCROLL CONTAINER */}
      {/* md:grid switches to grid on desktop; flex/overflow-x-auto enables scroll on mobile */}
      <div className="flex md:grid md:grid-cols-2 gap-4 md:gap-8 overflow-x-auto md:overflow-x-visible px-4 md:px-6 pb-8 snap-x snap-mandatory no-scrollbar max-w-5xl mx-auto">
        
        {/* Basic Plan - Added snap-center and min-w for mobile */}
        <div className="min-w-[85vw] md:min-w-0 snap-center bg-white border border-slate-100 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 group relative">
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-black mb-1 tracking-tight">Starter Lab</h3>
            <p className="text-slate-400 text-xs font-medium">Ideal for MVPs and startups.</p>
          </div>
          
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-5xl md:text-6xl font-[1000] tracking-tighter text-slate-900">₹0</span>
            <span className="text-slate-400 font-bold text-xs tracking-tight">/ month</span>
          </div>

          <button className="w-full py-4 md:py-5 border-2 border-slate-900 text-slate-900 rounded-2xl font-black text-base hover:bg-slate-900 hover:text-white transition-all duration-300 mb-10">
            Claim Free Trial
          </button>
          
          <div className="space-y-4">
            <p className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-400">Core Features</p>
            {[
              "Custom Architecture Design",
              "Repository Setup & Handover",
              "Basic Security Audit",
              "Community Support Access",
              "Bi-weekly Progress Syncs"
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3 text-xs md:text-sm font-medium text-slate-600">
                <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 shrink-0 mt-0.5">
                  <Check size={10} strokeWidth={3} />
                </div>
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Pro Plan - Added snap-center and min-w for mobile */}
        <div className="min-w-[85vw] md:min-w-0 snap-center bg-slate-900 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] text-white shadow-3xl relative overflow-hidden group border border-white/5">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-600/20 blur-[60px] rounded-full" />
          
          <div className="absolute top-6 right-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
            <Zap size={8} fill="currentColor" /> Most Popular
          </div>
          
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-black mb-1 tracking-tight">Growth Scale</h3>
            <p className="text-slate-400 text-xs font-medium">Full ownership & speed.</p>
          </div>

          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-5xl md:text-6xl font-[1000] tracking-tighter">₹{isYearly ? yearlyRate : monthlyRate}</span>
            <span className="text-slate-400 font-bold text-xs tracking-tight">/ month</span>
          </div>

          <button className="w-full py-4 md:py-5 bg-purple-600 text-white rounded-2xl font-black text-base hover:bg-purple-500 transition-all duration-300 mb-10 shadow-xl shadow-purple-900/40">
            Start Scaling
          </button>
          
          <div className="space-y-4 relative z-10">
            <p className="font-black text-[10px] uppercase tracking-[0.2em] text-slate-500">Premium Ecosystem</p>
            {[
              "Everything in Starter Lab",
              "Full Source Code Transfer",
              "Unlimited Performance SEO",
              "24/7 Priority Engineering",
              "Advanced AI Models"
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3 text-xs md:text-sm font-medium text-slate-300">
                <div className="w-4 h-4 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 border border-purple-500/30 mt-0.5">
                  <Check size={10} strokeWidth={3} />
                </div>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Pricing;