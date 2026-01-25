import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Component Imports
import { HeroSection } from './components/HeroSection';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { TeamSection } from './components/TeamSection';
import { PricingFAQ } from './components/PricingFAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navItems = ['Work', 'Services', 'Pricing', 'About'];

  return (
    <div className="min-h-screen bg-[#F4F4F4] text-[#1A1A1A] selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden font-sans">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-zinc-900 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* --- MOBILE & DESKTOP NAVBAR --- */}
      <header className="fixed top-0 w-full z-50 px-4 md:px-6 py-4 md:py-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="pointer-events-auto flex items-center gap-2"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-2xl shadow-sm border border-black/5 flex items-center justify-center font-black text-xl italic">
              K
            </div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex gap-1 bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-black/5 shadow-sm pointer-events-auto"
          >
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="px-6 py-2.5 rounded-full text-sm font-bold text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-all"
              >
                {item}
              </a>
            ))}
          </motion.nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <motion.button 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#1A1A1A] text-white px-5 md:px-8 py-2.5 md:py-3.5 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              Let's talk
            </motion.button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-11 h-11 bg-white rounded-2xl flex items-center justify-center border border-black/5 shadow-sm text-zinc-900"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#F4F4F4] pt-32 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              {navItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-bold tracking-tighter text-zinc-900 p-4 border-b border-black/5 flex justify-between items-center"
                >
                  {item}
                  <span className="text-sm font-medium text-zinc-400">0{idx + 1}</span>
                </motion.a>
              ))}
            </nav>
            
            <div className="absolute bottom-12 left-6 right-6">
              <p className="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-4">Get in touch</p>
              <a href="mailto:hello@kargul.studio" className="text-xl font-bold">hello@ankan.studio</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN CONTENT --- */}
      <main className={`relative transition-all duration-500 ${isMenuOpen ? 'blur-xl scale-95 opacity-50' : 'blur-0 scale-100 opacity-100'}`}>
        <HeroSection />
        
        {/* Responsive padding for sections */}
        <div className="space-y-20 md:space-y-0">
          <Features />
          <Testimonials />
          <TeamSection />
          <PricingFAQ />
        </div>
        
        <Footer />
      </main>

      {/* Soft Background Blobs (Optimized for Mobile Performance) */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-5%] left-[-10%] w-[70%] md:w-[40%] h-[40%] bg-blue-100/40 blur-[80px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[70%] md:w-[40%] h-[40%] bg-zinc-200/60 blur-[80px] md:blur-[120px] rounded-full" />
      </div>
    </div>
  );
};

export default App;