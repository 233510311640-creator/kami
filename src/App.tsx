/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll } from "motion/react";
import { 
  Camera, 
  Video, 
  Palette, 
  Gamepad2, 
  Github, 
  Twitter, 
  Instagram, 
  Mail, 
  ArrowUpRight,
  Menu,
  X
} from "lucide-react";
import { useState, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "Identity", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 lg:left-20 w-full lg:w-[calc(100%-80px)] z-50 h-[70px] lg:h-[100px] border-b border-brand-line flex items-center justify-between px-6 lg:px-10 bg-brand-black/90 backdrop-blur-md">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl lg:text-2xl font-sans font-black tracking-tight"
      >
        HANZO<span className="opacity-10 text-[0.8em]">.</span>
      </motion.div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-[12px] uppercase tracking-widest font-medium text-white/60 hover:text-white transition-opacity"
          >
            {link.name}
          </a>
        ))}
        <button
          className="ml-4 px-6 py-2 border border-brand-line text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all cursor-pointer"
        >
          Connect
        </button>
      </nav>

      {/* Mobile Toggle */}
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-brand-black border-b border-brand-line p-10 flex flex-col gap-8"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-sans font-bold uppercase tracking-tighter"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
};

const Rail = () => (
  <div className="hidden lg:flex fixed top-0 left-0 w-20 h-screen border-r border-brand-line bg-[#0a0a0a] z-50 flex-col justify-between items-center py-10 overflow-hidden">
    <div className="absolute inset-0 opacity-20 hover:opacity-40 transition-opacity">
      <img src="/input_file_2.png" className="w-full h-full object-cover grayscale" alt="" referrerPolicy="no-referrer" />
    </div>
    <div className="relative z-10 rail-text vertical-rl rotate-180 text-[10px] tracking-[0.4em] uppercase text-white/40">
      Portfolio 2026
    </div>
    <div className="relative z-10 rail-text vertical-rl rotate-180 text-[10px] tracking-[0.4em] uppercase text-white/40">
      Designer & Photographer
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-70px)] lg:min-h-screen flex items-end pt-[80px] lg:pt-0 pb-12 lg:pb-20 px-6 lg:px-10 border-b lg:border-b-0 lg:border-r border-brand-line bg-gradient-to-tr from-brand-black via-brand-black to-[#111]">
      {/* Halftone / Manga Panel Visual */}
      <div className="absolute top-0 right-0 w-full lg:w-[40%] h-[40%] lg:h-full bg-[#111] z-0 overflow-hidden" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%)" }}>
        <div className="halftone" />
        <div className="absolute bottom-10 lg:bottom-20 right-6 lg:right-10 text-[12vw] font-black opacity-[0.03] rotate-[-90deg]">SHARP</div>
        
        {/* Hero image integrated in panel */}
        <motion.img 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          src="/input_file_0.png" 
          alt="Hanzo Hero" 
          className="absolute -bottom-10 -right-20 w-[140%] lg:w-[120%] h-auto grayscale object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 w-full lg:w-[60%]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[9px] lg:text-[10px] uppercase tracking-[0.4em] text-white/30 mb-4 lg:mb-6 font-bold">01 / Introduction</div>
          <h1 className="text-[clamp(2.5rem,10vw,10rem)] leading-[0.85] mb-6 lg:mb-10 tracking-[-0.05em] uppercase">
            Identity
          </h1>
          <p className="text-lg lg:text-2xl text-white/70 max-w-md font-serif italic leading-relaxed">
            Focused on high-contrast visual storytelling, cinematic motion, and precision graphic systems.
          </p>

          <div className="mt-10 lg:mt-16 flex items-center gap-6 lg:gap-10">
            <button className="px-8 lg:px-12 py-4 lg:py-5 bg-white text-black font-bold uppercase tracking-[0.2em] text-[10px] lg:text-[12px] hover:scale-105 transition-transform active:scale-95">
              View Work
            </button>
            <div className="hidden sm:flex flex-col gap-1">
              <span className="text-[9px] uppercase tracking-widest text-white/20">Status</span>
              <span className="text-xs font-bold uppercase tracking-widest">Active System</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Topographic Lines Background for Hero */}
      <div className="absolute inset-0 opacity-10 z-[-1] overflow-hidden pointer-events-none">
        <img src="/input_file_1.png" className="w-full h-full object-cover scale-150" alt="" referrerPolicy="no-referrer" />
      </div>
    </section>
  );
};

const Sidebar = () => {
  const skills = [
    "Photography", "Video Editing", "Graphic Design", "Game Design", "Creative Direction", "UI/UX"
  ];

  return (
    <aside className="lg:w-[340px] border-t lg:border-t-0 lg:border-l border-brand-line lg:min-h-screen bg-[#080808] p-0 flex flex-col">
      {/* Featured visual for Sidebar: input_file_4.png */}
      <div className="w-full aspect-video lg:aspect-[3/4] overflow-hidden border-b border-brand-line group">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.6 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          src="/input_file_4.png" 
          alt="Katana Detail" 
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="p-8 lg:p-12">
        <div className="mb-12 lg:mb-20">
          <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-[#666] mb-4 lg:mb-6 block font-bold">02 / Biography</span>
          <p className="text-[13px] lg:text-[14px] leading-[1.7] text-white/60 font-serif italic">
            Hanzo is a multidisciplinary creative focusing on the intersection of dark aesthetics and modern utility. Based in Tokyo, crafting experiences through lenses, keyframes, and vectors.
          </p>
        </div>

        <div className="mb-12 lg:mb-20">
          <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-[#666] mb-4 lg:mb-6 block font-bold">03 / Expertise</span>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <div key={skill} className="px-2 py-1.5 lg:px-3 lg:py-2 border border-brand-line text-[8px] lg:text-[9px] uppercase tracking-widest font-medium text-white/50">
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <span className="text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-[#666] mb-4 lg:mb-6 block font-bold">04 / Network</span>
          <div className="flex gap-6 text-[10px] lg:text-[11px] font-bold tracking-widest text-white/80 transition-colors uppercase">
            <a href="#" className="hover:text-white transition-opacity">TW.</a>
            <a href="#" className="hover:text-white transition-opacity">IG.</a>
            <a href="#" className="hover:text-white transition-opacity">BE.</a>
          </div>
        </div>
      </div>
    </aside>
  );
};

const BottomBar = () => {
  return (
    <div className="w-full h-auto lg:h-[200px] border-t border-brand-line flex flex-col lg:flex-row items-center gap-10 lg:gap-20 px-6 lg:px-10 py-10 lg:py-0">
      <div className="flex flex-col gap-10 lg:flex-row items-center w-full">
        <a href="#work" className="w-full lg:w-auto px-8 lg:px-10 py-4 lg:py-5 bg-white text-black text-center text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-white/90">
          View All Work
        </a>

        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-16">
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-[8px] lg:text-[9px] uppercase text-[#555] mb-2 tracking-widest font-bold">Location</span>
            <span className="text-[12px] lg:text-[13px] font-medium tracking-wide">Tokyo, JPN</span>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-[8px] lg:text-[9px] uppercase text-[#555] mb-2 tracking-widest font-bold">Availability</span>
            <span className="text-[12px] lg:text-[13px] font-medium tracking-wide text-center lg:text-left">Open for projects</span>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-[8px] lg:text-[9px] uppercase text-[#555] mb-2 tracking-widest font-bold">Email</span>
            <a href="mailto:hello@hanzo.sys" className="text-[12px] lg:text-[13px] font-medium tracking-wide border-b border-brand-line pb-1 hover:border-white transition-colors">hello@hanzo.sys</a>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillsGrid = () => {
  const categories = [
    { icon: <Camera size={20} />, name: "Photography", desc: "Capturing stolen moments in high contrast." },
    { icon: <Video size={20} />, name: "Video Editing", desc: "Cinematic narratives with rhythm." },
    { icon: <Palette size={20} />, name: "Graphic design", desc: "Visual identities from the void." },
    { icon: <Gamepad2 size={20} />, name: "Gaming strategy", desc: "Analyzing mechanics and flow." },
  ];

  return (
    <section id="skills" className="py-12 lg:py-20 px-6 lg:px-10 border-b lg:border-b-0 lg:border-r border-brand-line">
      <div className="grid sm:grid-cols-2 gap-6 lg:gap-10">
        {categories.map((cat, i) => (
          <motion.div 
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-6 lg:p-8 border border-brand-line flex flex-col gap-4 lg:gap-6 group hover:bg-[#111] transition-colors"
          >
            <div className="text-white/40 group-hover:text-white transition-colors">{cat.icon}</div>
            <h3 className="text-xl lg:text-2xl font-black uppercase italic">{cat.name}</h3>
            <p className="text-white/40 text-[13px] lg:text-[14px] leading-relaxed font-serif italic">{cat.desc}</p>
          </motion.div>
        ))}
      </div>
      
      {/* Img input_file_3.png integration (Vision/Stars) */}
      <div className="mt-12 lg:mt-20 relative h-[300px] lg:h-[400px] overflow-hidden grayscale contrast-125 group border border-brand-line">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.5 }}
          src="/input_file_3.png" 
          className="w-full h-full object-cover" 
          alt="Vision" 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute inset-0 bg-brand-black/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 flex items-center justify-center text-center p-10">
          <p className="text-3xl lg:text-5xl font-black uppercase italic tracking-tighter mix-blend-difference">Precision. Focus. Narrative.</p>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative min-h-screen bg-brand-black flex flex-col lg:flex-row overflow-x-hidden">
      <Rail />
      
      {/* Geometric Layout Wrapper */}
      <div className="flex-1 lg:ml-20 flex flex-col lg:flex-row">
        
        {/* Central Content Area */}
        <div className="flex-1 flex flex-col min-w-0">
          <Navbar />
          
          <main className="flex-1">
            <Hero />
            <SkillsGrid />
            <BottomBar />
          </main>
        </div>

        {/* Sidebar */}
        <Sidebar />
      </div>

      {/* Global Decorative Scanline */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
        <div className="w-full h-[2px] bg-white animate-scanline" />
      </div>

      {/* Progress Scroll Bar */}
      <motion.div 
        className="fixed top-0 left-0 lg:left-20 right-0 h-[2px] bg-white z-[60] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
