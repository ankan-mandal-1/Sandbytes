import React from 'react';
import { Calendar, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-[#F4F4F4] pt-32 pb-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-12">Let's build something cool</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-32">
                   <a 
            href="https://cal.com/kael-man/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto block"
          >
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1A1A1A] text-white px-10 py-5 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-xl group">
              <Calendar size={20} className="group-hover:rotate-12 transition-transform" />
              Book Intro Call
            </button>
          </a>
                    <a 
            href="https://wa.me/917031139797?text=Hi%20Ankan,%20I'm%20interested%20in%20working%20with%20Sandbyte%20Studio!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto block"
          >
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-black/10 px-10 py-5 rounded-full font-bold hover:bg-zinc-50 active:scale-95 transition-all shadow-sm">
              <Mail size={20} className="text-[#25D366]" /> {/* Changed icon color to WhatsApp Green */}
              Send Message
            </button>
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/5 text-zinc-400 text-sm font-medium">
          <p>© 2026. Sandbyte Studio</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="mailto:hello@Sandbyte" className="hover:text-zinc-900 transition-colors">hello@Sandbyte</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Twitter/X</a>
          </div>
        </div>
      </div>
    </footer>
  );
};