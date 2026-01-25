import React from 'react';
import { Calendar, Mail, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#F4F4F4] pt-32 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-32">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter">
            Let's build <span className="text-zinc-400 italic">something cool</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://cal.com/kael-man/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full flex items-center justify-center gap-2 bg-[#1A1A1A] text-white px-10 py-5 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-xl group">
                <Calendar size={20} className="group-hover:rotate-12 transition-transform" />
                Book Intro Call
              </button>
            </a>
            
            <a 
              href="https://wa.me/917031139797?text=Hi%20Ankan,%20I'm%20interested%20in%20working%20with%20Sandbyte%20site!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <button className="w-full flex items-center justify-center gap-2 bg-white border border-black/10 px-10 py-5 rounded-full font-bold hover:bg-zinc-50 active:scale-95 transition-all shadow-sm">
                <MessageCircle size={20} className="text-[#25D366]" />
                Send Message
              </button>
            </a>
          </div>
        </div>

        {/* --- FOOTER BOTTOM NAV --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-black/5 text-sm">
          {/* Brand Column */}
          <div className="space-y-4 text-center md:text-left">
            <div className="font-black text-xl italic tracking-tighter">SANDBYTE</div>
            <p className="text-zinc-400 max-w-[200px] mx-auto md:mx-0">
              High-growth design and dev partner for modern startups.
            </p>
            <p className="text-zinc-300">© 2026 Sandbyte site</p>
          </div>

          {/* Links Column */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 font-bold text-zinc-500">
            <div className="flex flex-col gap-4">
              <a href="/about" className="hover:text-zinc-900 transition-colors">About Us</a>
              <a href="/contact" className="hover:text-zinc-900 transition-colors">Contact Us</a>
              <a href="https://twitter.com/your-handle" className="hover:text-zinc-900 transition-colors">Twitter / X</a>
            </div>
            <div className="flex flex-col gap-4">
              <a href="/privacy" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-zinc-900 transition-colors">Terms of Service</a>
              <a href="/disclaimer" className="hover:text-zinc-900 transition-colors">Disclaimer</a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="text-center md:text-right space-y-2">
            <p className="font-bold text-zinc-400 uppercase tracking-widest text-[10px]">Get in touch</p>
            <a href="mailto:hello@sandbyte.site" className="text-lg font-bold text-zinc-900 hover:underline decoration-zinc-300 underline-offset-4">
              hello@sandbyte.site
            </a>
            <p className="text-zinc-400">+91 70311 39797</p>
          </div>
        </div>
      </div>
    </footer>
  );
};