"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
          style={{
            backgroundImage: `url('/images/hero-bg.jpg')`,
          }}
        />
        {/* Premium gradient overlay - Cleaner and more cinematic */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full pt-20">
        
        {/* Badge - Apple style pill */}
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
            <span className="w-2 h-2 rounded-full bg-[#C5A55A] animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wide uppercase">
              Chambre de Commerce Nationale
            </span>
          </div>
        </div>

        {/* Main Title - Impactful & Clean */}
        <h1 
          className="opacity-0 animate-fade-in-up font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-8 max-w-5xl mx-auto drop-shadow-lg"
          style={{ animationDelay: "0.3s" }}
        >
          {t.hero.title}
        </h1>

        {/* Subtitle - Readable & Elegant */}
        <p 
          className="opacity-0 animate-fade-in-up text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12 font-light tracking-wide"
          style={{ animationDelay: "0.5s" }}
        >
          {t.hero.subtitle}
        </p>

        {/* CTA Buttons - Apple style */}
        <div 
          className="opacity-0 animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-6"
          style={{ animationDelay: "0.7s" }}
        >
          <a
            href="#why-invest"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-[#C5A55A] rounded-full hover:bg-[#d4b365] hover:scale-105 hover:shadow-[0_0_20px_rgba(197,165,90,0.3)] min-w-[200px]"
          >
            <span>{t.hero.cta1}</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          
          <a
            href="#contact"
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 hover:scale-105 min-w-[200px]"
          >
            {t.hero.cta2}
          </a>
        </div>
      </div>

      {/* Scroll indicator - Minimalist */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up"
        style={{ animationDelay: "1.2s" }}
      >
        <a 
          href="#about" 
          aria-label="Scroll down"
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors duration-300"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Découvrir</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
