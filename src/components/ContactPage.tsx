import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F4F4F4] pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Let's <span className="text-zinc-400">talk.</span></h1>
          <p className="text-zinc-500 text-lg">Have a project in mind? We'd love to hear about it. Choose the way you want to connect.</p>
          
          <div className="space-y-4">
            <a href="mailto:hello@sandbyte.site" className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-black/5 hover:scale-105 transition-transform">
              <div className="bg-blue-50 p-3 rounded-2xl text-blue-600"><Mail size={24}/></div>
              <div>
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Email Us</div>
                <div className="text-lg font-bold">hello@sandbyte.site</div>
              </div>
            </a>
            <a href="tel:+917031139797" className="flex items-center gap-4 p-6 bg-white rounded-3xl border border-black/5 hover:scale-105 transition-transform">
              <div className="bg-green-50 p-3 rounded-2xl text-green-600"><Phone size={24}/></div>
              <div>
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Call Directly</div>
                <div className="text-lg font-bold">+91 70311 39797</div>
              </div>
            </a>
          </div>
        </div>
        
        <div className="bg-zinc-900 p-8 md:p-12 rounded-[40px] text-white space-y-8">
          <h2 className="text-3xl font-bold">Ready to start?</h2>
          <p className="text-zinc-400">Book a 30-min strategy call to discuss your product goals and how we can help you achieve them.</p>
          <a href="https://cal.com/kael-man/30min" target="_blank" className="block w-full py-5 bg-white text-zinc-900 text-center rounded-2xl font-bold hover:bg-zinc-100 transition-colors">
            Book My Intro Call
          </a>
        </div>
      </div>
    </div>
  );
};