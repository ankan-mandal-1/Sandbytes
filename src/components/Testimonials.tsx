import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    brand: "OSTIUM",
    text: "Working with Ankan and the Sandbyte team has been a game-changer. They are ultra-responsive and understood our vision for the Indian market perfectly.",
    author: "Arjun Mehta",
    // Using high-quality diverse SVG avatars from DiceBear
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun&backgroundColor=b6e3f4"
  },
  {
    brand: "listkit",
    text: "The redesign was insanely fast and clean. It’s rare to find a team in India that delivers this level of world-class UI/UX. Highly recommended for founders!",
    author: "Priya Sharma",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya&backgroundColor=ffdfbf"
  },
  {
    brand: "SideShift",
    text: "We shipped two web apps and a website in record time. The design quality is just insane. They don't just build; they obsess over every pixel.",
    author: "Vikram Malhotra",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram&backgroundColor=c0aede"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Subtle Heading style matching Screenshot 2 */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900">
            Trusted by founders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((rev, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-black/5 shadow-sm flex flex-col justify-between h-full"
            >
              <div>
                {/* Brand name style matching your screenshots */}
                <div className="flex items-center gap-2 font-black text-xl mb-6 tracking-tighter text-zinc-900">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" /> {/* Small accent dot */}
                  {rev.brand}
                </div>
                <p className="text-zinc-600 leading-relaxed text-base md:text-lg italic">
                  "{rev.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 mt-10 pt-6 border-t border-zinc-50">
                <div className="w-12 h-12 rounded-2xl overflow-hidden bg-zinc-100 border border-black/5 shadow-inner">
                  <img 
                    src={rev.avatar} 
                    alt={rev.author} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-zinc-900 text-sm md:text-base">
                    {rev.author}
                  </span>
                  <span className="text-zinc-400 text-xs font-medium uppercase tracking-widest">
                    Verified Founder
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};