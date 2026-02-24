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
    <section id="why-invest" className="relative py-16 md:py-20 bg-[#f5f5f7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full border border-[#C5A55A]/30 bg-[#C5A55A]/5 text-[#C5A55A] text-xs font-semibold tracking-widest uppercase">
              {t.nav.whyDRC}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-4">
            {t.whyInvest.title}
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {cards.map((card, index) => {
            const Icon = icons[index];
            // Bento layout logic: First and last cards span 2 columns
            const isWide = index === 0 || index === 3;
            
            return (
              <div
                key={index}
                className={`group relative overflow-hidden bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${
                  isWide ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                <div className="flex flex-col gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#003DA5]/5 text-[#003DA5] group-hover:scale-110 transition-transform duration-500">
                    <Icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-[#003DA5] transition-colors">
                    {card.title}
                  </h3>
                  
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
