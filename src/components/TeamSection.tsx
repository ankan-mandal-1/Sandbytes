import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: "Ankan", role: "Founder & Designer", img: "/assets/team/ankan.png" },
  { name: "Vivek", role: "Project Manager", img: "/assets/team/vivek.png" },
  { name: "Arjun", role: "Frontend Developer", img: "/assets/team/arjun.png" },
  { name: "Ishaan", role: "Frontend Developer", img: "/assets/team/ishaan.png" },
  { name: "Rohan", role: "Head of Sales", img: "/assets/team/rohan.png" },
  { name: "Aditya", role: "Motion Designer", img: "/assets/team/aditya.png" },
  { name: "Siddharth", role: "Frontend Developer", img: "/assets/team/siddharth.png" },
  { name: "Kabir", role: "Brand Designer", img: "/assets/team/kabir.png" },
  { name: "Aarav", role: "Illustration Designer", img: "/assets/team/aarav.png" },
  { name: "Vihaan", role: "Illustration Designer", img: "/assets/team/vihaan.png" },
  { name: "Dev", role: "Brand Designer", img: "/assets/team/dev.png" },
  { name: "Aryan", role: "Product Designer", img: "/assets/team/aryan.png" },
];

const tools = ["Figma", "Framer", "Next.js", "Webflow", "Rive", "Illustrator", "React", "Tailwind"];

export const TeamSection: React.FC = () => {
  // Logic for seamless infinite loop
  const duplicatedTools = [...tools, ...tools, ...tools];

  return (
    <section className="py-16 md:py-24 bg-[#F4F4F4] px-4 md:px-6 relative overflow-hidden">
      
      {/* 1. Tools Mastered Marquee Section */}
      <div className="max-w-4xl mx-auto mb-24 md:mb-40 text-center">
        <h2 className="text-lg md:text-xl font-bold mb-6 md:mb-10 tracking-tight text-zinc-900 uppercase md:normal-case">
          Tools we've mastered
        </h2>
        
        <div className="relative bg-white/90 backdrop-blur-xl border border-black/5 rounded-[24px] md:rounded-[32px] py-6 md:py-10 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-white/90 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-white/90 to-transparent z-10" />

          <motion.div 
            className="flex whitespace-nowrap items-center"
            animate={{ x: ["0%", "-33.33%"] }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {duplicatedTools.map((tool, idx) => (
              <span 
                key={idx} 
                className="inline-block px-8 md:px-12 text-xl md:text-2xl font-bold text-zinc-900 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
              >
                {tool}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 2. Team Grid Section */}
      <div className="max-w-6xl mx-auto text-center relative">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-20 tracking-tight text-zinc-900">
          Meet the team
        </h2>
        
        {/* Grid Config: 
            2 columns on mobile, 4 on desktop. 
            The 'gap' is tighter on mobile for better fit.
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-y-20 gap-x-4 md:gap-x-12 relative">
          
          {/* Central 'K' Logo - Hidden on mobile to avoid layout clutter, shown on Desktop */}
          <div className="hidden md:flex flex-col items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="w-24 h-24 bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center justify-center border border-black/5"
            >
              <span className="font-black text-3xl italic">K</span>
            </motion.div>
            <div className="mt-5 bg-white px-5 py-1.5 rounded-full text-[13px] font-bold border border-black/5 shadow-sm text-zinc-800">
              5+ More
            </div>
          </div>

          {team.map((member, i) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1, duration: 0.5 }}
              className="flex flex-col items-center group"
            >
              {/* Responsive Avatar Container */}
              <div className="w-full aspect-square max-w-[140px] md:max-w-[180px] bg-white rounded-[35px] md:rounded-[45px] mb-4 md:mb-6 overflow-hidden border border-black/5 shadow-sm group-hover:shadow-xl transition-all duration-500 group-hover:-translate-y-2">
                <img 
                  src={member.img} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${member.name}&background=f4f4f5&color=a1a1aa&size=128`;
                  }}
                />
              </div>
              <h3 className="font-bold text-lg md:text-xl text-zinc-900">{member.name}</h3>
              <p className="text-zinc-500 text-xs md:text-sm font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile-only "5+ More" badge to replace the central logo desktop version */}
        <div className="flex md:hidden justify-center mt-12">
            <div className="bg-white px-6 py-2 rounded-full text-sm font-bold border border-black/5 shadow-sm">
                +5 More Members
            </div>
        </div>
      </div>
    </section>
  );
};