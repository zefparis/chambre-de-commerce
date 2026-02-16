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
    <section id="sectors" className="relative py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full border border-[#003DA5]/10 bg-[#003DA5]/5 text-[#003DA5] text-xs font-semibold tracking-widest uppercase">
              {t.nav.services}
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6">
            {t.sectors.title}
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto font-light leading-relaxed">
            {t.sectors.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectorKeys.map((key, index) => {
            const Icon = sectorIcons[index];
            return (
              <div
                key={key}
                className="group relative h-[400px] overflow-hidden rounded-3xl bg-gray-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${sectorImages[index]}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/30">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="h-px flex-1 bg-white/20" />
                    </div>
                    
                    <h3 className="font-display text-3xl font-bold text-white mb-2 tracking-tight">
                      {t.sectors[key]}
                    </h3>
                    
                    <p className="text-white/80 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0 delay-100">
                      Découvrir les opportunités <span className="ml-1">→</span>
                    </p>
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
