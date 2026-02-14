"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { Wheat, Mountain, Zap, Building2, Palmtree, Cpu } from "lucide-react";

const sectorIcons = [Wheat, Mountain, Zap, Building2, Palmtree, Cpu];
const sectorKeys = ["agriculture", "mining", "energy", "infrastructure", "tourism", "tech"] as const;

export default function Sectors() {
  const { t } = useLanguage();

  return (
    <section id="sectors" className="relative py-24 bg-white">
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
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F8F9FA] to-white border border-gray-100 p-8 text-center hover:border-[#003DA5]/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 rounded-2xl bg-[#003DA5]/5 group-hover:bg-[#003DA5] transition-colors duration-300">
                  <Icon className="h-8 w-8 text-[#003DA5] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900">
                  {t.sectors[key]}
                </h3>
                <div className="mt-4 h-0.5 w-12 mx-auto bg-[#C5A55A]/40 group-hover:w-20 transition-all duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
