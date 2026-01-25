import React from 'react';
import { motion } from 'framer-motion';

export const Disclaimer: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">Disclaimer</h1>
          <p className="text-zinc-500 font-medium mb-12 uppercase tracking-widest text-sm">Effective: January 2026</p>

          <div className="space-y-12 text-zinc-600 leading-relaxed">
            <section className="p-8 bg-zinc-50 rounded-[32px] border border-black/5">
              <h2 className="text-xl font-bold text-zinc-900 mb-4">No Guarantee of Results</h2>
              <p>While we take pride in helping startups raise capital and scale, Sandbyte site does not guarantee specific financial outcomes, funding success, or specific Google search rankings. Business success depends on market variables beyond our control.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Third-Party Tools</h2>
              <p>We use industry-standard tools like Framer, Webflow, and Vercel. Sandbyte site is not responsible for service outages, price changes, or data breaches occurring on these third-party platforms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">Content Accuracy</h2>
              <p>Clients are responsible for the final proofreading and accuracy of all content (text, data, and legal info) provided for the website. We are not liable for errors in content approved by the client.</p>
            </section>

            <div className="pt-12">
              <a href="mailto:hello@sandbyte.site" className="text-zinc-900 font-bold underline decoration-zinc-300 underline-offset-8">
                Questions? Contact our legal team
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};