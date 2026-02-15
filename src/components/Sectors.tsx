"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { Wheat, Mountain, Zap, Building2, Palmtree, Cpu } from "lucide-react";

const sectorIcons = [Wheat, Mountain, Zap, Building2, Palmtree, Cpu];
const sectorKeys = ["agriculture", "mining", "energy", "infrastructure", "tourism", "tech"] as const;
const sectorImages = [
  "/cards domaines/Agriculture.jpg",
  "/cards domaines/Mining.jpg", 
  "/cards domaines/Energy.jpg",
  "/cards domaines/Infrastructure.jpg",
  "/cards domaines/Tourism.jpg",
  "/cards domaines/Tech.jpg"
];

export default function Sectors() {
  const { t } = useLanguage();

  return (
    <section id="sectors" className="relative py-24 bg-[#f0ebe5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#C5A55A]" />
            <span className="text-[#C5A55A] text-sm font-semibold tracking-widest uppercase">
              {t.nav.services}
            </span>
            <div className="h-px w-8 bg-[#C5A55A]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#003DA5] leading-tight">
            {t.sectors.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t.sectors.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectorKeys.map((key, index) => {
            const Icon = sectorIcons[index];
            return (
              <div
                key={key}
                className="group relative overflow-hidden rounded-2xl border-[3px] border-gray-300/90 text-center hover:border-[#003DA5]/60 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                style={{
                  backgroundImage: `url('${sectorImages[index]}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
                
                <div className="relative p-8">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 rounded-2xl bg-white/90 group-hover:bg-white transition-colors duration-300 shadow-lg">
                    <Icon className="h-8 w-8 text-[#003DA5] group-hover:text-[#003DA5] transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {t.sectors[key]}
                  </h3>
                  <div className="mt-4 h-0.5 w-12 mx-auto bg-[#C5A55A] group-hover:w-20 transition-all duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
