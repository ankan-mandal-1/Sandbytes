import React from 'react';
import { motion } from 'framer-motion';

export const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6 selection:bg-zinc-900 selection:text-white">
      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-zinc lg:prose-xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">Terms of Service</h1>
          <p className="text-zinc-500 font-medium mb-12 uppercase tracking-widest text-sm">Last Updated: January 2026</p>

          <div className="space-y-12 text-zinc-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">1. Engagement & Services</h2>
              <p>Sandbyte Studio provides professional design and development services. By engaging with our studio, you agree to provide necessary assets and feedback in a timely manner to ensure project timelines are met.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">2. Intellectual Property</h2>
              <p>Upon receipt of final payment, full ownership of the design assets and code created during the project is transferred to the client. Sandbyte Studio retains the right to display the work in our portfolio and marketing materials unless otherwise agreed upon in a non-disclosure agreement (NDA).</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">3. Payment Terms</h2>
              <p>For one-time packages, we require an upfront deposit to commence work. For recurring maintenance plans (₹5000/year), billing occurs annually. Failure to renew maintenance may result in temporary suspension of hosting services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-4">4. Revisions & Scope</h2>
              <p>Each package includes a set number of revisions or a defined scope. Work requested outside of the initial agreement will be billed as a separate project or at our standard hourly rate.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};