import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronDown, MessageCircle, Calendar } from 'lucide-react';

/**
 * Pricing & FAQ Component
 * Mobile Improvements:
 * 1. Horizontal scroll for tabs on small screens
 * 2. Stacking cards for mobile view
 * 3. Enhanced touch targets for accordions
 * 4. Integrated Contact CTA
 */

const FAQS = [
  {
    q: "Why wouldn't I just hire a full-time designer?",
    a: "A senior designer now costs over ₹1.5L/month, plus benefits. Aside from the cost, you might not always have enough work to keep them busy. With SandByte, you get studio-quality work at a fraction of the cost, and you can scale your projects as needed without the overhead of a full-time hire."
  },
  {
    q: "How fast will I receive my designs?",
    a: "Most initial concepts are delivered within 48-72 hours. For full website builds or complex dashboards, we work in rapid 1-week sprints to ensure you always have something tangible to review and iterate on."
  },
  {
    q: "Who actually does the work?",
    a: "You work directly with the founders and senior leads. We don't outsource your project to juniors or third-party agencies. This ensures the 'pixel-perfect' quality we promise is what you actually get."
  },
  {
    q: "What if I don't like the design?",
    a: "No worries! We offer unlimited revisions within the scope of your chosen plan. we continue to iterate until you are 100% satisfied with the result. Our goal is to build a product you're proud to show off."
  },
  {
    q: "Do you offer development services too?",
    a: "Yes! We are a full-stack partner. We specialize in Framer, Next.js, and React development, ensuring that the high-fidelity designs we create are translated into clean, high-performance code."
  },
  {
    q: "Who owns the intellectual property?",
    a: "You do. Once the final payment is made, all design assets and code belong to you entirely. We provide organized Figma files and GitHub repository access as part of the handoff."
  }
];

export const PricingFAQ = () => {
  const [activeTab, setActiveTab] = useState('Product');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#EBEBEB]/50 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16 tracking-tighter">Pricing</h2>
        

        {/* --- PRICING CARDS (Mobile Stacked) --- */}
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-20 md:mb-32">
  
  {/* Starter / Consultation Plan */}
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 md:p-10 rounded-[32px] md:rounded-[40px] shadow-sm border border-black/5 flex flex-col"
  >
    <div className="flex justify-between items-start mb-6">
       <div>
          <span className="text-zinc-400 text-[10px] md:text-xs uppercase font-black tracking-widest">Discovery</span>
          <div className="text-3xl md:text-4xl font-black mt-1">₹0</div>
       </div>
       <div className="bg-zinc-50 text-zinc-400 p-2 rounded-xl">
          <MessageCircle size={20} />
       </div>
    </div>
    
    <ul className="space-y-4 mb-10 flex-grow">
      {['Free Consultation', 'Business Discussion', 'Design Selection', 'Project Roadmap'].map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm text-zinc-600 font-medium">
          <Check size={18} className="text-zinc-400 shrink-0" /> {item}
        </li>
      ))}
    </ul>

    <a href="https://wa.me/917031139797" target="_blank" rel="noopener noreferrer">
      <button className="w-full py-4 bg-zinc-100 text-zinc-900 rounded-2xl font-bold hover:bg-zinc-200 transition-colors">
        Start Discussion
      </button>
    </a>
  </motion.div>

  {/* Standard Plan (₹15k) */}
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 md:p-10 rounded-[32px] md:rounded-[40px] shadow-xl border-2 border-zinc-900 flex flex-col relative overflow-hidden"
  >
    <div className="absolute top-4 right-[-35px] bg-zinc-900 text-white text-[10px] font-bold px-10 py-1 rotate-45">
      POPULAR
    </div>
    <div className="flex justify-between items-start mb-6">
       <div>
          <span className="text-zinc-400 text-[10px] md:text-xs uppercase font-black tracking-widest">One-Time Setup</span>
          <div className="text-3xl md:text-4xl font-black mt-1">₹15,000</div>
       </div>
       <div className="bg-blue-50 text-blue-600 p-2 rounded-xl">
          <Calendar size={20} />
       </div>
    </div>
    
    <ul className="space-y-4 mb-10 flex-grow">
      {['Domain & Web Hosting', '1 Year Free Maintenance', 'Professional SEO Setup', 'Responsive Design', '₹5000/yr Renewal after 1yr'].map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm text-zinc-600 font-medium">
          <Check size={18} className="text-green-500 shrink-0" /> {item}
        </li>
      ))}
    </ul>

    <a href="https://cal.com/kael-man/30min" target="_blank" rel="noopener noreferrer">
      <button className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-black transition-colors mb-3">
        Book Project
      </button>
    </a>
  </motion.div>

  {/* Premium Plan (₹20k) */}
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-zinc-900 p-8 md:p-10 rounded-[32px] md:rounded-[40px] shadow-xl text-white flex flex-col"
  >
    <div className="flex justify-between items-start mb-6">
       <div>
          <span className="text-zinc-500 text-[10px] md:text-xs uppercase font-black tracking-widest">Growth Pack</span>
          <div className="text-3xl md:text-4xl font-black mt-1">₹20,000</div>
       </div>
       <div className="bg-zinc-800 text-zinc-400 p-2 rounded-xl">
          <Check size={20} />
       </div>
    </div>

    <ul className="space-y-4 mb-10 flex-grow">
       {[
         'Google Business Profile', 
         'Premium Domain & Hosting', 
         '1 Year Free Maintenance', 
         'Advanced SEO Strategy', 
         'Custom Branding Elements',
         'Priority Support'
       ].map((item) => (
         <li key={item} className="flex items-center gap-3 text-sm text-zinc-300 font-medium">
           <Check size={18} className="text-blue-400 shrink-0" /> {item}
         </li>
       ))}
    </ul>

    <div className="flex flex-col gap-3">
       <a href="https://cal.com/kael-man/30min" target="_blank" rel="noopener noreferrer">
         <button className="w-full py-4 bg-white text-zinc-900 rounded-2xl font-bold hover:bg-zinc-100 transition-colors">
            Get Started
         </button>
       </a>
       <a href="https://wa.me/917031139797" target="_blank" rel="noopener noreferrer" className="w-full py-3 text-center text-xs font-bold text-zinc-500 hover:text-white transition-colors">
          Ask Questions?
       </a>
    </div>
  </motion.div>
</div>

        {/* --- FAQ SECTION (Mobile Optimized) --- */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 md:mb-16 tracking-tighter">FAQs</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-[24px] md:rounded-3xl border border-black/5 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-5 md:p-6 flex justify-between items-center text-left font-bold text-sm md:text-lg group"
                >
                  <span className="pr-4">{faq.q}</span>
                  <div className={`p-2 rounded-full transition-all ${openFaq === i ? 'bg-zinc-900 text-white rotate-180' : 'bg-zinc-50 text-zinc-400 group-hover:bg-zinc-100'}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-5 md:px-6 pb-6 text-zinc-500 text-sm md:text-base leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};