import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AgencyPage from './components/AgencyPage';
import { X, Send, CheckCircle2, Globe, Smartphone, Megaphone, Layers } from 'lucide-react';

// --- 1. PREMIUM LARGE LOADER (Centered Fixed) ---
const PremiumLoader = () => (
  <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white">
    <div className="relative flex items-center justify-center">
      {/* Massive Outer Orbit */}
      <div className="w-44 h-44 md:w-64 md:h-64 border-[3px] border-slate-100 border-t-purple-600 border-r-indigo-500 rounded-full animate-spin" />
      
      {/* Middle Pulsing Ring */}
      <div className="absolute w-36 h-36 md:w-52 md:h-52 border border-purple-100 rounded-full animate-ping opacity-30" />

      {/* Center Logo */}
      <div className="absolute flex items-center justify-center">
        <img 
          src="/assets/SANDBYTE-LOGO.png" 
          alt="Loading..." 
          className="w-20 h-20 md:w-32 md:h-32 object-contain animate-pulse-slow"
        />
      </div>
    </div>

    {/* Loading Text & Progress Bar beneath the circle */}
    <div className="mt-12 flex flex-col items-center gap-4">
      <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.5em] text-slate-900 animate-pulse">
        Sandbyte Intelligence
      </span>
      <div className="w-32 md:w-48 h-1 bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full bg-purple-600 animate-progress-load" />
      </div>
    </div>
  </div>
);

// --- 2. POST-LOAD WELCOME FORM ---
interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '' });
  const phoneNumber = "917031139797";

  if (!isOpen) return null;

  const services = [
    { id: 'web', label: 'Web Development', icon: <Globe size={16} /> },
    { id: 'app', label: 'App Development', icon: <Smartphone size={16} /> },
    { id: 'mkt', label: 'Digital Marketing', icon: <Megaphone size={16} /> },
    { id: 'oth', label: 'Other Solutions', icon: <Layers size={16} /> },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Inquiry from Welcome Gate*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}`;
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-xl animate-fade-in" onClick={onClose} />
      
      {/* Modal Container */}
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] md:rounded-[3rem] overflow-hidden relative z-[1100] shadow-2xl animate-modal-pop border border-white/20 max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors z-20">
          <X size={18} className="text-slate-600" />
        </button>

        <div className="p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-[1000] tracking-tighter text-slate-900 leading-none mb-3">
                Let's build <span className="text-purple-600 italic">together.</span>
            </h3>
            <p className="text-slate-500 font-medium text-sm">Briefly tell us what you're looking for.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Service Selection Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {services.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setFormData({...formData, service: s.label})}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl border transition-all gap-2 ${
                    formData.service === s.label 
                    ? 'border-purple-600 bg-purple-50 text-purple-600 shadow-sm' 
                    : 'border-slate-100 bg-slate-50 text-slate-500 hover:border-slate-200'
                  }`}
                >
                  {s.icon}
                  <span className="text-[10px] font-black uppercase tracking-tight">{s.label}</span>
                </button>
              ))}
            </div>

            <div className="space-y-3">
              <input 
                required 
                type="text" 
                placeholder="Full Name" 
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-purple-500 outline-none transition-all" 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input 
                  required 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                  onChange={(e) => setFormData({...formData, email: e.target.value})} 
                />
                <input 
                  required 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})} 
                />
              </div>
            </div>

            <button type="submit" className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-lg hover:bg-purple-600 transition-all shadow-xl flex items-center justify-center gap-3 mt-4 active:scale-95">
              <Send size={18} /> Request Strategy
            </button>
            <p className="text-center text-[9px] font-black text-slate-300 uppercase tracking-widest mt-4 flex items-center justify-center gap-2">
              <CheckCircle2 size={12} className="text-emerald-500" /> Direct Engineer Access
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- 3. MAIN APP ---
export default function App() {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Handling the initial load
    const timer = setTimeout(() => {
      setLoading(false);
      // Open form 1.5 seconds after site loads for better UX
      const modalTimer = setTimeout(() => setShowModal(true), 1500);
      return () => clearTimeout(modalTimer);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-purple-100">
      {/* Full Screen Loader */}
      {loading && <PremiumLoader />}
      
      {/* Welcome Lead Form */}
      <WelcomeModal isOpen={showModal} onClose={() => setShowModal(false)} />
      
      {/* Main Content */}
      <div className={`transition-all duration-1000 ${loading ? 'opacity-0 blur-xl scale-95' : 'opacity-100 blur-0 scale-100'}`}>
        <Navbar />
        <AgencyPage />
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes progress-load {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes modal-pop {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-progress-load { animation: progress-load 3s ease-in-out forwards; }
        .animate-modal-pop { animation: modal-pop 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
}