import React from 'react';

const Navbar: React.FC = () => {
  return (
    // 'w-full' and 'bg-white' without 'top-2' creates a solid barrier at the very top
    <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto h-[72px] px-6 md:px-12">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="/assets/SANDBYTE-LOGO.png"
            alt="Sandbyte logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>

        {/* Navigation Links - Centered Pill (Desktop Only) */}
        <div className="hidden md:flex items-center bg-gray-50 rounded-full p-1 border border-gray-100">
          <a href="#benefits" className="px-5 py-2 text-sm font-bold text-slate-900 bg-white rounded-full shadow-sm">
            Benefits
          </a>
          <a href="#pricing" className="px-5 py-2 text-sm font-bold text-slate-500 hover:text-purple-600 transition-colors">
            Pricing
          </a>
          <a href="#testimonials" className="px-5 py-2 text-sm font-bold text-slate-500 hover:text-purple-600 transition-colors">
            Testimonials
          </a>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Mobile Phone Icon (Matches your screenshot) */}
          <div className="p-2.5 border border-gray-200 rounded-full md:hidden hover:bg-gray-50 cursor-pointer">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </div>
          
          <button className="bg-[#9333ea] hover:bg-[#7e22ce] text-white px-5 md:px-8 py-2.5 rounded-full text-sm font-bold transition-all shadow-md active:scale-95">
            Get Template
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
