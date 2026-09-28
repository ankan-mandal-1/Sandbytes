import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';

// Main Components
import { HeroSection } from './components/HeroSection';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { TeamSection } from './components/TeamSection';
import { PricingFAQ } from './components/PricingFAQ';
import { Footer } from './components/Footer';

// Legal & Secondary Pages
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Disclaimer } from './components/Disclaimer';

// --- HELPER: SCROLL TO TOP ON ROUTE CHANGE ---
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navigation: React.FC<{ isMenuOpen: boolean; setIsMenuOpen: (val: boolean) => void }> = ({ isMenuOpen, setIsMenuOpen }) => {
  const navItems = [
    { name: 'Work', href: '/#work' },
    { name: 'Services', href: '/#services' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'About', href: '/about' }
  ];

  return (

    <>
      return (
  <main className="min-h-screen bg-white text-black overflow-hidden">

    {/* HERO */}
    <section className="relative min-h-screen flex flex-col">

      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 sm:px-10 lg:px-16 xl:px-20 py-7">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <div className="absolute left-0 top-0 w-7 h-7 rounded-full bg-[#2638ff]" />
            <div
              className="absolute right-0 bottom-0 w-7 h-10 rounded-full bg-[#2638ff] rotate-[25deg]"
            />
          </div>

          <span className="text-2xl sm:text-3xl font-light tracking-[-0.06em]">
            Sand<span className="font-normal">Byte</span>
          </span>
        </div>

        {/* Header Right */}
        <div className="hidden sm:flex items-center gap-5 text-[10px] sm:text-xs tracking-[0.18em] text-slate-500 uppercase">
          <span>
            Performance Marketing
            <br />
            For Growth
          </span>

          <div className="w-12 h-px bg-slate-400" />
        </div>
      </header>


      {/* Main Hero */}
      <div className="relative flex-1 flex items-center px-6 sm:px-10 lg:px-16 xl:px-20 pb-16 lg:pb-24">

        {/* Left Content */}
        <div className="relative z-10 w-full lg:w-[62%] xl:w-[60%]">

          {/* Small Section Label */}
          <div className="flex items-center gap-4 mb-8 lg:mb-10">
            <div className="w-1 h-10 bg-[#2638ff]" />

            <span className="text-xs sm:text-sm tracking-[0.25em] text-slate-500 uppercase">
              Performance Marketing
            </span>
          </div>


          {/* Main Heading */}
          <h1 className="max-w-5xl text-[clamp(3.5rem,7.5vw,8rem)] leading-[0.88] tracking-[-0.065em] font-semibold">

            <span className="block">
              We Are
            </span>

            <span className="block text-[#2638ff]">
              Rewriting
            </span>

            <span className="block">
              the Playbook
            </span>

          </h1>


          {/* Description */}
          <p className="mt-8 lg:mt-10 max-w-2xl text-lg sm:text-xl lg:text-2xl leading-[1.35] tracking-[-0.02em] text-slate-500">
            Let’s combine strategy, creativity and performance
            <br className="hidden sm:block" />
            to build a{" "}
            <span className="font-semibold text-[#2638ff]">
              Million Dollar Brand
            </span>{" "}
            together.
          </p>


          {/* Pillars */}
          <div className="mt-12 lg:mt-16 flex flex-wrap items-stretch gap-0 max-w-3xl">

            {/* Pillar 1 */}
            <div className="flex items-center gap-4 pr-8 mr-8 border-r border-slate-200">

              <div className="w-14 h-14 rounded-xl bg-[#eef1ff] flex items-center justify-center">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2638ff"
                  strokeWidth="1.7"
                >
                  <path d="M3 3v18h18" />
                  <path d="M7 16l4-5 3 3 5-7" />
                </svg>
              </div>

              <div>
                <p className="text-base sm:text-lg font-semibold leading-tight">
                  Smarter
                  <br />
                  Strategy
                </p>
              </div>

            </div>


            {/* Pillar 2 */}
            <div className="flex items-center gap-4 pr-8 mr-8 border-r border-slate-200">

              <div className="w-14 h-14 rounded-xl bg-[#eef1ff] flex items-center justify-center">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2638ff"
                  strokeWidth="1.7"
                >
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M8.5 14.5C7.5 13.5 6 12 6 9.5a6 6 0 0 1 12 0c0 2.5-1.5 4-2.5 5" />
                  <path d="M9 10a3 3 0 0 1 6 0" />
                </svg>
              </div>

              <div>
                <p className="text-base sm:text-lg font-semibold leading-tight">
                  Bolder
                  <br />
                  Creatives
                </p>
              </div>

            </div>


            {/* Pillar 3 */}
            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-xl bg-[#eef1ff] flex items-center justify-center">
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2638ff"
                  strokeWidth="1.7"
                >
                  <path d="M4 16l4-4 3 3 6-7" />
                  <path d="M14 8h3v3" />
                  <path d="M13 5l2-2 4 4-2 2" />
                </svg>
              </div>

              <div>
                <p className="text-base sm:text-lg font-semibold leading-tight">
                  Bigger
                  <br />
                  Growth
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* RIGHT ABSTRACT VISUAL */}
        <div className="absolute right-[-8%] bottom-[-15%] lg:right-[-5%] lg:bottom-[-12%] w-[58%] lg:w-[53%] h-[75%] lg:h-[82%] pointer-events-none">

          {/* Pale Blue Geometric Shape */}
          <div
            className="
              absolute
              top-[8%]
              right-[12%]
              w-[48%]
              h-[72%]
              bg-[#e7ecff]
              rounded-[70px]
              rotate-[28deg]
            "
          />

          {/* Architectural Form */}
          <div className="absolute inset-0 flex items-end justify-end overflow-hidden">

            <svg
              viewBox="0 0 800 900"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >

              <defs>

                <linearGradient
                  id="waveGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#ffffff"
                  />

                  <stop
                    offset="45%"
                    stopColor="#e8e8e8"
                  />

                  <stop
                    offset="100%"
                    stopColor="#1b1b1b"
                  />
                </linearGradient>

                <linearGradient
                  id="waveDark"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#f7f7f7"
                  />

                  <stop
                    offset="55%"
                    stopColor="#cfcfcf"
                  />

                  <stop
                    offset="100%"
                    stopColor="#222222"
                  />
                </linearGradient>

              </defs>


              {/* Large flowing architectural ribbons */}
              <path
                d="
                  M180 900
                  C220 720 320 650 430 570
                  C535 495 600 400 625 250
                  L790 70
                  L800 900
                  Z
                "
                fill="url(#waveGradient)"
              />

              <path
                d="
                  M235 900
                  C280 735 360 680 455 610
                  C555 535 625 430 655 275
                  L800 115
                  L800 900
                  Z
                "
                fill="url(#waveDark)"
                opacity="0.8"
              />

              {/* Architectural rib lines */}
              <g
                fill="none"
                stroke="#ffffff"
                strokeWidth="12"
                opacity="0.75"
              >

                <path d="M205 900 C250 730 340 660 445 585 C550 510 615 400 645 245" />

                <path d="M245 900 C290 745 370 680 470 605 C570 530 635 415 665 265" />

                <path d="M290 900 C330 755 405 700 495 625 C585 550 650 435 680 285" />

                <path d="M340 900 C375 770 440 720 520 650 C600 580 665 455 695 310" />

                <path d="M395 900 C425 785 480 735 550 675 C625 610 685 485 710 340" />

                <path d="M455 900 C480 800 520 755 580 700 C645 640 705 515 730 375" />

                <path d="M520 900 C540 810 570 775 625 720 C680 665 725 550 750 420" />

              </g>

            </svg>

          </div>


          {/* Floating Blue Label */}
          <div
            className="
              absolute
              right-[7%]
              top-[32%]
              w-44
              sm:w-52
              lg:w-60
              h-44
              sm:h-52
              lg:h-60
              bg-[#2638ff]
              text-white
              p-7
              sm:p-9
              flex
              flex-col
              justify-between
              shadow-2xl
              [clip-path:polygon(0_0,85%_0,100%_15%,100%_100%,0_100%)]
            "
          >

            <div className="self-end text-4xl font-light">
              ↗
            </div>

            <div className="text-xs sm:text-sm tracking-[0.24em] uppercase leading-[1.8]">
              Strategy
              <br />
              Creativity
              <br />
              Performance
              <br />
              Growth
            </div>

          </div>

        </div>

      </div>


      {/* Bottom Micro Detail */}
      <div className="relative z-20 px-6 sm:px-10 lg:px-16 xl:px-20 pb-6 flex items-center justify-between text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-slate-400">

        <span>
          SandByte
        </span>

        <div className="hidden sm:flex items-center gap-3">
          <span>Strategy</span>
          <span>•</span>
          <span>Creativity</span>
          <span>•</span>
          <span>Performance</span>
        </div>

        <span>
          Growth
        </span>

      </div>

    </section>


    {/* SECOND SECTION — REINFORCE THE REDESIGN */}
    <section className="bg-[#f8f9ff] px-6 sm:px-10 lg:px-16 xl:px-20 py-24 lg:py-32">

      <div className="max-w-7xl mx-auto">

        <div className="max-w-3xl">

          <p className="text-xs tracking-[0.25em] uppercase text-[#2638ff] mb-6">
            The New Playbook
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.05em] leading-[0.95]">
            Growth isn't just about
            <span className="text-[#2638ff]"> spending more.</span>
          </h2>

          <p className="mt-7 text-lg text-slate-500 leading-relaxed max-w-2xl">
            We build acquisition systems around strategy, creative testing,
            data and continuous optimization — turning paid traffic into
            sustainable growth.
          </p>

        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 mt-16">

          <div className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-10">
            <span className="text-sm text-slate-400">01</span>
            <h3 className="mt-12 text-2xl font-semibold">
              Strategy
            </h3>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Understand the audience, offer and growth opportunity before
              spending aggressively.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-10">
            <span className="text-sm text-slate-400">02</span>
            <h3 className="mt-12 text-2xl font-semibold">
              Creative
            </h3>
            <p className="mt-4 text-slate-500 leading-relaxed">
              Test hooks, formats, messaging and angles to discover what
              actually gets attention.
            </p>
          </div>

          <div className="bg-[#2638ff] text-white rounded-2xl p-8 lg:p-10">
            <span className="text-sm text-blue-200">03</span>
            <h3 className="mt-12 text-2xl font-semibold">
              Performance
            </h3>
            <p className="mt-4 text-blue-100 leading-relaxed">
              Measure what matters, optimize continuously and scale the
              combinations that perform.
            </p>
          </div>

        </div>

      </div>

    </section>


    {/* CTA */}
    <section className="px-6 sm:px-10 lg:px-16 xl:px-20 py-24 lg:py-32 bg-white">

      <div className="max-w-7xl mx-auto">

        <div className="border-t border-slate-200 pt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-10">

          <div>

            <p className="text-xs tracking-[0.25em] uppercase text-slate-400">
              Ready to rewrite the playbook?
            </p>

            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.05em]">
              Let’s build
              <span className="text-[#2638ff]"> together.</span>
            </h2>

          </div>


          <button
            className="
              group
              flex
              items-center
              justify-between
              gap-10
              bg-[#2638ff]
              text-white
              px-7
              py-5
              rounded-xl
              text-sm
              font-medium
              tracking-[0.12em]
              uppercase
              hover:bg-[#1d2edb]
              transition-all
              duration-300
              min-w-[220px]
            "
          >
            <span>
              Let's Talk
            </span>

            <span className="text-xl group-hover:translate-x-1 transition-transform">
              →
            </span>
          </button>

        </div>

      </div>

    </section>

  </main>
)
    </>
    
    {/* <>
      
      <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#F4F4F4] border-b border-black/5 px-4 md:px-8 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-[72px] md:h-[90px]">
          
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="shrink-0">
            <Link to="/" className="block">
              <img src="assets/SANDBYTE-LOGO.png" alt="Logo" className="h-8 md:h-11 w-auto object-contain hover:scale-105 transition-transform" />
            </Link>
          </motion.div>
          
          <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="hidden md:flex gap-1 bg-white p-1.5 rounded-full border border-black/5 shadow-sm">
            {navItems.map((item) => (
              item.href.startsWith('/#') ? (
                <a key={item.name} href={item.href} className="px-6 py-2.5 rounded-full text-sm font-bold text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-all">
                  {item.name}
                </a>
              ) : (
                <Link key={item.name} to={item.href} className="px-6 py-2.5 rounded-full text-sm font-bold text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-all">
                  {item.name}
                </Link>
              )
            ))}
          </motion.nav>

          <div className="flex items-center gap-2">
            <a href="tel:+917031139797" className="flex items-center justify-center w-11 h-11 bg-[#1A1A1A] text-white rounded-2xl md:rounded-full md:px-6 md:w-auto shadow-lg hover:scale-105 active:scale-95 transition-all">
              <Phone size={18} className="md:mr-2" />
              <span className="hidden md:block text-sm font-bold">Call Now</span>
            </a>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden w-11 h-11 bg-white rounded-2xl flex items-center justify-center border border-black/5 shadow-sm text-zinc-900">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-0 z-[60] bg-[#F4F4F4] pt-28 px-6 md:hidden flex flex-col justify-between pb-12">
            <nav className="flex flex-col">
              {navItems.map((item, idx) => (
                <Link key={item.name} to={item.href} onClick={() => setIsMenuOpen(false)} className="text-4xl font-bold tracking-tighter text-zinc-900 py-4 border-b border-black/5 flex justify-between items-end">
                  {item.name}
                  <span className="text-xs font-black text-zinc-300 mb-2">0{idx + 1}</span>
                </Link>
              ))}
            </nav>
            <div className="space-y-6">
              <div className="space-y-1">
                <p className="text-zinc-400 font-bold text-[10px] uppercase tracking-widest">Email Us</p>
                <a href="mailto:hello@sandbyte.site" className="text-xl font-bold block underline underline-offset-4 decoration-zinc-300">hello@sandbyte.site</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </> */}
  );
};

const HomePage = () => (
  <>
    <HeroSection />
    <div id="services"><Features /></div>
    <div id="testimonials"><Testimonials /></div>
    <TeamSection />
    <div id="pricing"><PricingFAQ /></div>
  </>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F4F4F4] text-[#1A1A1A] selection:bg-zinc-900 selection:text-white overflow-x-hidden font-sans">
        
        <motion.div className="fixed top-0 left-0 right-0 h-1 bg-zinc-900 origin-left z-[70]" style={{ scaleX }} />

        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

        {/* FIXED: Added 'pt-[80px] md:pt-[100px]' to push main content below the fixed header. 
        */}
        <main className={`relative pt-[80px] md:pt-[100px] transition-all duration-700 ${isMenuOpen ? 'blur-2xl scale-95 opacity-50' : 'blur-0 scale-100 opacity-100'}`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
          </Routes>
          <Footer />
        </main>

        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[-5%] left-[-10%] w-[80%] h-[40%] bg-blue-100/40 blur-[80px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-10%] w-[80%] h-[40%] bg-zinc-200/60 blur-[80px] rounded-full" />
        </div>
      </div>
    </Router>
  );
};

export default App;
