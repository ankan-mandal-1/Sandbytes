import React, { useState } from 'react';
import { ChevronRight, X, PhoneCall, Calendar, ArrowUp, MessageSquare, Send } from 'lucide-react';

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', details: '' });

  const phoneNumber = "917031139797"; // Format: CountryCode + Number (no +)

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Redirect to WhatsApp with Form Data
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = `*New Meeting Request*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Project:* ${formData.details}`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handlePricingClick = () => {
    const pricingSection = document.getElementById('pricing-section');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="py-12 md:py-32 bg-slate-900 text-white mx-3 md:mx-10 mb-8 rounded-[2.5rem] md:rounded-[5rem] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-5 text-center relative z-10">
          <h2 className="text-5xl md:text-[10rem] font-[1000] mb-8 md:mb-16 tracking-tighter leading-none">
            Ready to <span className="text-purple-500 italic">start?</span>
          </h2>

          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mb-16 md:mb-28">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group bg-purple-600 text-white px-8 py-5 md:px-14 md:py-8 rounded-[1.5rem] md:rounded-[2.5rem] text-lg md:text-2xl font-black hover:bg-purple-500 transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-95"
            >
              Book a Strategy Call 
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={handlePricingClick}
              className="bg-slate-800 text-white px-8 py-5 md:px-14 md:py-8 rounded-[1.5rem] md:rounded-[2.5rem] text-lg md:text-2xl font-black border border-slate-700 hover:bg-slate-700 transition-all active:scale-95"
            >
              See Pricing
            </button>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center font-black text-xl">S</div>
              <div className="text-left">
                <span className="block text-white font-black tracking-widest text-[10px] uppercase">Sandbyte Lab</span>
                <span className="text-slate-500 font-bold text-[9px] uppercase tracking-tighter">© 2026 Engineering the future</span>
              </div>
            </div>

            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">
              Back to Top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </footer>

      {/* STRATEGY CALL MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center px-0 md:px-6">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md animate-fade-in" onClick={() => setIsModalOpen(false)} />
          
          <div className="bg-white w-full max-w-xl rounded-t-[2.5rem] md:rounded-[3rem] overflow-hidden relative z-[110] shadow-2xl animate-modal-up max-h-[95vh] flex flex-col">
            
            {/* Mobile Drag Indicator */}
            <div className="md:hidden flex justify-center py-4 border-b border-slate-50">
                <div className="w-12 h-1.5 bg-slate-200 rounded-full" onClick={() => setIsModalOpen(false)} />
            </div>

            <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 p-2 bg-slate-100 rounded-full hidden md:block hover:bg-slate-200 transition-colors">
              <X size={20} className="text-slate-600" />
            </button>

            <div className="p-8 md:p-14 overflow-y-auto">
              <div className="mb-10 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-full mb-4">
                    <span className="w-2 h-2 rounded-full bg-purple-600 animate-ping" />
                    <span className="text-[10px] font-black text-purple-600 uppercase tracking-widest">Direct Channel</span>
                </div>
                <h3 className="text-4xl font-[1000] tracking-tighter leading-none mb-4">Let's talk <span className="text-purple-600 italic">business.</span></h3>
                <p className="text-slate-500 font-medium text-lg leading-snug">Choose a method below to secure your spot.</p>
              </div>

              {/* QUICK CONNECT GRID */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                <a href={`tel:+${phoneNumber}`} className="flex flex-col items-center justify-center p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:border-purple-200 hover:bg-purple-50 transition-all group active:scale-95">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all">
                        <PhoneCall size={22} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-purple-600">Direct Call</span>
                </a>
                <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center p-6 bg-emerald-50 rounded-[2rem] border border-emerald-100 hover:border-emerald-200 transition-all group active:scale-95">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                        <MessageSquare size={22} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-emerald-600">Quick Chat</span>
                </a>
              </div>

              <div className="relative mb-10">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100" /></div>
                <div className="relative flex justify-center text-[9px] font-black uppercase tracking-[0.4em]"><span className="bg-white px-6 text-slate-300">Or Send Details</span></div>
              </div>

              {/* FORM WITH WHATSAPP REDIRECT */}
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div className="space-y-4">
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="Your Full Name" 
                      onChange={handleChange}
                      className="w-full px-7 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:bg-white transition-all font-medium" 
                    />
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="work@email.com" 
                      onChange={handleChange}
                      className="w-full px-7 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:bg-white transition-all font-medium" 
                    />
                    <textarea 
                      required
                      name="details"
                      rows="3" 
                      placeholder="What are we building?" 
                      onChange={handleChange}
                      className="w-full px-7 py-5 bg-slate-50 border border-slate-100 rounded-[1.5rem] focus:outline-none focus:ring-4 focus:ring-purple-500/10 focus:bg-white transition-all font-medium resize-none" 
                    />
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-6 bg-slate-900 text-white rounded-[1.5rem] font-black text-lg hover:bg-purple-600 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 active:scale-[0.98]"
                >
                  <Send size={20} className="text-purple-400" /> Request Meeting
                </button>
                <p className="text-center text-slate-400 text-[9px] font-black uppercase tracking-[0.2em] mt-6">
                    Response time: &lt; 2 Hours
                </p>
              </form>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modal-up {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (min-width: 768px) {
          @keyframes modal-up {
            from { opacity: 0; transform: translateY(50px) scale(0.9); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
        }
        .animate-modal-up { animation: modal-up 0.6s cubic-bezier(0.2, 1, 0.2, 1) forwards; }
        .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
      `}</style>
    </>
  );
};

export default Footer;