import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

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

  const navItems = [
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' }
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F4] text-[#1A1A1A] selection:bg-zinc-900 selection:text-white overflow-x-hidden font-sans">
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-zinc-900 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* --- RESPONSIVE NAVBAR --- */}
      <header className="fixed top-0 w-full z-50 px-4 md:px-6 py-4 md:py-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo Container */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="pointer-events-auto shrink-0"
          >
            <a href="/" className="block">
              <img 
                src="assets/SANDBYTE-LOGO.png" 
                alt="Logo" 
                className="h-8 md:h-12 w-auto object-contain hover:scale-105 transition-transform"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="hidden sm:flex md:hidden w-10 h-10 bg-white rounded-xl shadow-sm border border-black/5 items-center justify-center font-black text-xl italic">
                S
              </div>
            </a>
          </motion.div>
          
          {/* Desktop Navigation */}
          <motion.nav 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex gap-1 bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-black/5 shadow-sm pointer-events-auto"
          >
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="px-6 py-2.5 rounded-full text-sm font-bold text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-all"
              >
                {item.name}
              </a>
            ))}
          </motion.nav>

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center gap-2 pointer-events-auto">
            {/* Call Button - Always visible on mobile for quick access */}
            <a 
              href="tel:+917031139797"
              className="flex items-center justify-center w-11 h-11 bg-white md:bg-[#1A1A1A] text-zinc-900 md:text-white rounded-2xl md:rounded-full md:px-6 md:w-auto shadow-sm md:shadow-lg border border-black/5 md:border-none hover:scale-105 active:scale-95 transition-all"
            >
              <Phone size={18} className="md:mr-2" />
              <span className="hidden md:block text-sm font-bold">Call Now</span>
            </a>

            {/* Let's Talk - Hidden on small mobile to prevent overlap */}
            <button className="hidden sm:block bg-[#1A1A1A] text-white px-6 py-3 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-lg">
              Let's talk
            </button>

            {/* Hamburger Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-11 h-11 bg-white rounded-2xl flex items-center justify-center border border-black/5 shadow-sm text-zinc-900"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE FULLSCREEN OVERLAY --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#F4F4F4] pt-28 px-6 md:hidden flex flex-col justify-between pb-12"
          >
            <nav className="flex flex-col">
              {navItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-bold tracking-tighter text-zinc-900 py-4 border-b border-black/5 flex justify-between items-end"
                >
                  {item.name}
                  <span className="text-xs font-black text-zinc-300 mb-2">0{idx + 1}</span>
                </motion.a>
              ))}
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 bg-zinc-900 text-white w-full py-5 rounded-3xl font-bold text-lg"
              >
                Start a Project
              </motion.button>
            </nav>
            
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-zinc-400 font-bold text-[10px] uppercase tracking-widest">Speak to Ankan</p>
                <a href="tel:+917031139797" className="text-xl font-bold block">+91 70311 39797</a>
              </div>
              <div className="space-y-1">
                <p className="text-zinc-400 font-bold text-[10px] uppercase tracking-widest">Email Us</p>
                <a href="mailto:hello@sandbyte.studio" className="text-xl font-bold block underline underline-offset-4 decoration-zinc-300">hello@sandbyte.studio</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`relative transition-all duration-700 ${isMenuOpen ? 'blur-2xl scale-95 opacity-50' : 'blur-0 scale-100 opacity-100'}`}>
        <HeroSection />
        <div className="px-0 md:px-0">
          <Features />
          <Testimonials />
          <TeamSection />
          <PricingFAQ />
        </div>
        <Footer />
      </main>

      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-5%] left-[-10%] w-[80%] h-[40%] bg-blue-100/40 blur-[80px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[80%] h-[40%] bg-zinc-200/60 blur-[80px] rounded-full" />
      </div>
    </div>
  );
};

export default App;