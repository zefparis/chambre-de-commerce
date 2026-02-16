"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { TrendingUp, Globe, Users, Shield } from "lucide-react";

const icons = [TrendingUp, Globe, Users, Shield];

export default function WhyInvest() {
  const { t } = useLanguage();

  const cards = [
    { title: t.whyInvest.card1Title, text: t.whyInvest.card1Text },
    { title: t.whyInvest.card2Title, text: t.whyInvest.card2Text },
    { title: t.whyInvest.card3Title, text: t.whyInvest.card3Text },
    { title: t.whyInvest.card4Title, text: t.whyInvest.card4Text },
  ];

  return (
    <section id="why-invest" className="relative py-32 bg-[#f5f5f7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full border border-[#C5A55A]/30 bg-[#C5A55A]/5 text-[#C5A55A] text-xs font-semibold tracking-widest uppercase">
              {t.nav.whyDRC}
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6">
            {t.whyInvest.title}
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-[minmax(300px,auto)]">
          {cards.map((card, index) => {
            const Icon = icons[index];
            // Bento layout logic: First and last cards span 2 columns
            const isWide = index === 0 || index === 3;
            
            return (
              <div
                key={index}
                className={`group relative overflow-hidden bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                  isWide ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <Icon className="w-32 h-32 -mr-8 -mt-8 rotate-12" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#003DA5]/5 text-[#003DA5] mb-6 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="h-7 w-7" />
                    </div>
                    
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-[#003DA5] transition-colors">
                      {card.title}
                    </h3>
                    
                    <p className="text-gray-500 text-lg leading-relaxed font-light">
                      {card.text}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center text-[#C5A55A] font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-sm uppercase tracking-wide">En savoir plus</span>
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
