import React from 'react';
import { motion } from 'framer-motion';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F4F4F4] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <header className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900">
              Building the <span className="italic text-zinc-400">future</span>, one pixel at a time.
            </h1>
            <p className="text-xl text-zinc-500 leading-relaxed">
              Sandbyte site is a lean, mean, design and development machine based in India, helping global startups ship world-class products.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12 text-zinc-600 leading-relaxed">
            <p>
              We founded Sandbyte because we were tired of "standard" agency culture—slow timelines, bloated costs, and fragmented communication. We decided to build a site that moves at the speed of a startup.
            </p>
            <p>
              Our philosophy is simple: obsess over quality, ignore the fluff, and focus on metrics that matter—like helping our clients raise over 50 Lakhs in funding through high-converting design.
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[40px] border border-black/5 shadow-sm">
            <h3 className="text-2xl font-bold text-zinc-900 mb-6">Our Core Values</h3>
            <div className="grid sm:grid-cols-3 gap-8">
              {['Speed', 'Transparency', 'Pixel-Perfection'].map((val) => (
                <div key={val} className="space-y-2">
                  <div className="text-zinc-900 font-bold">{val}</div>
                  <div className="text-sm text-zinc-500">Delivering at a pace that keeps your momentum high.</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};