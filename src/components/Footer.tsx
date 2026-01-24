import React from 'react';
import { 
  Facebook, Twitter, Instagram, Linkedin, 
  Mail, Phone, ArrowUpRight, ShieldCheck 
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'TripuraFly', href: 'https://tripurago.vercel.app' },
      { label: 'E-commerce Solutions', href: '#services' },
      { label: 'Fitness Dashboards', href: 'https://adamandevefitnessstudio.com/' },
      { label: 'Custom Web Apps', href: '#contact' },
    ],
    company: [
      { label: 'Our Founder', href: '#' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact Us', href: '#contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cancellation Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-white text-slate-600 relative overflow-hidden pt-20 pb-10 border-t border-slate-100">
      {/* Background Subtle Grid - Works better on white */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Identity Section */}
          <div className="lg:col-span-5 space-y-8 text-center md:text-left">
            <div className="space-y-6 flex flex-col items-center md:items-start">
              {/* Logo Container */}
              <div className="h-10 sm:h-12">
                <img
                  src="/assets/SANDBYTE-LOGO.png"
                  alt="Sandbyte logo"
                  className="h-full w-auto object-contain"
                />
              </div>

              <p className="text-lg leading-relaxed max-w-sm font-medium text-slate-500">
                Architecting high-performance digital ecosystems for the next generation of Indian innovators.
              </p>
            </div>
            
            {/* Quick Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <a href="mailto:mail2bongguy@gmail.com" className="group p-5 bg-slate-50 border border-slate-100 rounded-3xl hover:border-purple-200 transition-all active:scale-95">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Inquiries</p>
                <div className="flex items-center gap-3 text-slate-900 font-bold group-hover:text-purple-600 transition-colors">
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600"><Mail size={18} /></div>
                  <span className="text-sm">Email Us</span>
                </div>
              </a>
              
              <a href="tel:+917031139797" className="group p-5 bg-slate-50 border border-slate-100 rounded-3xl hover:border-blue-200 transition-all active:scale-95">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Direct Line</p>
                <div className="flex items-center gap-3 text-slate-900 font-bold group-hover:text-blue-600 transition-colors">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Phone size={18} /></div>
                  <span className="text-sm">Call Center</span>
                </div>
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:col-span-6 gap-8">
            <div className="space-y-6">
              <h3 className="text-slate-900 text-[11px] font-black uppercase tracking-[0.3em]">Projects</h3>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-purple-600 transition-colors text-sm font-bold flex items-center gap-1.5 group">
                      {link.label}
                      <ArrowUpRight size={14} className="text-purple-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-slate-900 text-[11px] font-black uppercase tracking-[0.3em]">Company</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-purple-600 transition-colors text-sm font-bold">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 col-span-2 sm:col-span-1">
              <h3 className="text-slate-900 text-[11px] font-black uppercase tracking-[0.3em]">Legal</h3>
              <ul className="space-y-4 text-sm font-bold">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-purple-600 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-100 flex flex-col lg:flex-row justify-between items-center gap-10 text-center lg:text-left">
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              © {currentYear} Sandbyte Studio <span className="mx-2 text-slate-200">/</span> Kolkata, India
            </p>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-2xl">
              <ShieldCheck size={12} className="text-emerald-500" />
              <span className="text-[9px] font-black uppercase tracking-widest text-emerald-600">Encrypted Infrastructure</span>
            </div>
          </div>

          {/* Social Icons with white theme hover */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-500 group"
                  aria-label={social.label}
                >
                  <Icon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </div>

        </div>

        {/* Massive Watermark */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 select-none opacity-[0.03] whitespace-nowrap pointer-events-none">
           <span className="text-[20rem] font-[1000] tracking-tighter uppercase italic text-slate-900">SANDBYTE</span>
        </div>
      </div>
    </footer>
  );
}