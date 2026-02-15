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
    <section id="why-invest" className="relative py-24 bg-[#f5f3f0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#C5A55A]" />
            <span className="text-[#C5A55A] text-sm font-semibold tracking-widest uppercase">
              {t.nav.whyDRC}
            </span>
            <div className="h-px w-8 bg-[#C5A55A]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#003DA5] leading-tight">
            {t.whyInvest.title}
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card, index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 border-2 border-gray-200/80 shadow-md hover:shadow-2xl hover:border-[#003DA5]/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#003DA5] to-[#4A90D9] text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </div>
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-[#C5A55A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
