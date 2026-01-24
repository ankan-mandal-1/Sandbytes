import React from 'react';
import { Star, Quote, UserCircle2, Building2, Globe, Heart } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Vivek Das',
      role: 'Founder, TripuraFly',
      website: 'tripurago.vercel.app',
      content: 'Sandbyte built our travel portal from scratch. The seamless WhatsApp booking flow has significantly improved our conversion rate.',
      rating: 5,
      icon: <Globe className="text-purple-600" size={20} />,
    },
    {
      name: 'Ankan Mondal',
      role: 'Founder, Fleket',
      website: 'Fleket.com',
      content: 'The team at Sandbyte understands modern business scalability. They delivered a high-performance platform that is technically robust.',
      rating: 5,
      icon: <Building2 className="text-purple-600" size={20} />,
    },
    {
      name: 'Alex Rivera',
      role: 'Founder, Adam & Eve Fitness',
      website: 'adamandevefitnessstudio.com',
      content: 'Sandbyte provided a website that perfectly captures our brand energy and makes it easy for members to view schedules.',
      rating: 5,
      icon: <UserCircle2 className="text-purple-600" size={20} />,
    },
    {
      name: 'Sarah Chen',
      role: 'CEO, Nexus Lab',
      website: 'nexuslab.io',
      content: 'The attention to detail in UI/UX is unparalleled. Our engagement jumped 40% after redesigning and migrating to Next.js.',
      rating: 5,
      icon: <Globe className="text-purple-600" size={20} />,
    },
  ];

  const firstRow = [...testimonials, ...testimonials];
  const secondRow = [...testimonials, ...testimonials].reverse();

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#FDFCFM] overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-100/30 blur-[80px] md:blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-white border border-slate-200 shadow-sm px-4 py-1.5 rounded-full mb-6 animate-fade-in">
          <Heart size={12} className="text-purple-500 fill-purple-500" />
          <span className="text-[9px] md:text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Client Success</span>
        </div>
        
        <h2 className="text-4xl md:text-7xl font-[1000] text-slate-900 tracking-tighter mb-4 md:mb-6 leading-[1.1] md:leading-[0.9]">
          Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-500 italic">visionaries.</span>
        </h2>
        
        <p className="text-slate-500 text-sm md:text-lg font-medium max-w-2xl mx-auto leading-relaxed px-4">
          Hear from the founders who scaled their digital infrastructure with our engineering lab.
        </p>
      </div>

      <div className="relative flex flex-col gap-6 md:gap-10">
        {/* Responsive Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-[#FDFCFM] via-[#FDFCFM]/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-[#FDFCFM] via-[#FDFCFM]/80 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] py-2">
          {firstRow.map((t, i) => (
            <TestimonialCard key={`row1-${i}`} data={t} />
          ))}
        </div>

        <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused] py-2">
          {secondRow.map((t, i) => (
            <TestimonialCard key={`row2-${i}`} data={t} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        /* Faster on desktop, slower on mobile for readability */
        .animate-marquee-left { animation: marquee-left 30s linear infinite; }
        .animate-marquee-right { animation: marquee-right 30s linear infinite; }
        
        @media (max-width: 768px) {
          .animate-marquee-left, .animate-marquee-right { animation-duration: 25s; }
        }

        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

const TestimonialCard = ({ data }) => (
  <div className="w-[300px] md:w-[450px] mx-3 md:mx-5 bg-white border border-slate-100 rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 shadow-sm hover:border-purple-200 transition-all duration-700 group relative">
    <div className="absolute top-6 right-6 md:top-8 md:right-10 text-slate-50 group-hover:text-purple-50 transition-all duration-700">
      <Quote size={40} md:size={64} fill="currentColor" stroke="none" className="w-10 h-10 md:w-16 md:h-16" />
    </div>
    
    <div className="relative z-10">
      <div className="flex items-center gap-3 md:gap-5 mb-6 md:mb-8">
        <div className="w-10 h-10 md:w-14 md:h-14 bg-slate-50 rounded-xl md:rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 shadow-inner">
          {React.cloneElement(data.icon, { size: 18, className: "group-hover:text-white transition-colors" })}
        </div>
        <div>
          <h4 className="font-black text-slate-900 text-xs md:text-base uppercase tracking-tight">{data.name}</h4>
          <div className="flex items-center gap-0.5 md:gap-1 mt-0.5">
            {[...Array(data.rating)].map((_, i) => (
              <Star key={i} size={10} className="text-amber-400 fill-current" />
            ))}
          </div>
        </div>
      </div>

      <p className="text-slate-500 leading-[1.6] md:leading-[1.8] font-medium mb-6 md:mb-10 text-xs md:text-[15px] italic">
        "{data.content}"
      </p>

      <div className="pt-6 md:pt-8 border-t border-slate-50 flex items-center justify-between">
        <div>
          <div className="text-[9px] md:text-[11px] font-black text-purple-600 uppercase tracking-[0.1em] md:tracking-[0.2em]">{data.role}</div>
          <div className="text-[8px] md:text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-widest">{data.website}</div>
        </div>
      </div>
    </div>
  </div>
);