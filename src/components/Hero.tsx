"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/images/hero-bg.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#001d4a]/85 via-[#003DA5]/75 to-[#001d4a]/90" />
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A55A] to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#C5A55A]/40 bg-[#C5A55A]/10">
          <span className="text-[#C5A55A] text-sm font-medium tracking-wide">
            CCNE-RDC
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
          {t.hero.title}
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#why-invest"
            className="group inline-flex items-center gap-2 rounded-lg bg-[#C5A55A] px-8 py-4 text-base font-semibold text-white shadow-xl transition-all hover:bg-[#b89545] hover:shadow-2xl hover:scale-[1.02]"
          >
            {t.hero.cta1}
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/50"
          >
            {t.hero.cta2}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="h-8 w-8 text-white/50" />
        </a>
      </div>
    </section>
  );
}
