"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { MapPin } from "lucide-react";
type Lang = "fr" | "en";

const countryFlags: Record<string, string> = {
  "Zambie": "/images/flags/zambia.svg", "Zambia": "/images/flags/zambia.svg",
  "Canada": "/images/flags/canada.svg",
  "Mexique": "/images/flags/mexico.svg", "Mexico": "/images/flags/mexico.svg",
  "Royaume-Uni": "/images/flags/united-kingdom.svg", "United Kingdom": "/images/flags/united-kingdom.svg",
  "Maroc": "/images/flags/morocco.svg", "Morocco": "/images/flags/morocco.svg",
  "États-Unis": "/images/flags/united-states.svg", "United States": "/images/flags/united-states.svg",
  "Afrique du Sud": "/images/flags/south-africa.svg", "South Africa": "/images/flags/south-africa.svg",
  "Benelux": "🇪🇺",
  "Japon": "/images/flags/japan.svg", "Japan": "/images/flags/japan.svg",
  "Iran": "/images/flags/iran.svg",
  "Côte d'Ivoire": "/images/flags/ivory-coast.svg", "Ivory Coast": "/images/flags/ivory-coast.svg",
  "Namibie": "/images/flags/namibia.svg", "Namibia": "/images/flags/namibia.svg",
  "France": "/images/flags/france.svg",
  "Belgique": "/images/flags/belgium.svg", "Belgium": "/images/flags/belgium.svg",
  "SADC": "🌍",
};

export default function Network() {
  const { t, lang } = useLanguage();

  return (
    <section id="network" className="relative py-16 md:py-20 bg-foreground overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#003DA5]/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#C5A55A]/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 text-white/80 text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
              {t.nav.network}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
            {t.network.title}
          </h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            {t.network.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {t.network.countries.map((country) => (
            <div
              key={country}
              className="group flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4 hover:bg-white/10 hover:border-[#C5A55A]/50 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                {countryFlags[country].startsWith('/') ? (
                  <img 
                    src={countryFlags[country]} 
                    alt={country}
                    className="w-8 h-auto rounded shadow-sm"
                  />
                ) : (
                  <span className="text-2xl" role="img" aria-label={country}>
                    {countryFlags[country] || "🌐"}
                  </span>
                )}
              </div>
              <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                {country}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <MapPin className="h-5 w-5 text-[#C5A55A]" />
            <span className="text-2xl font-bold text-white">15</span>
            <span className="text-gray-400 text-sm font-medium uppercase tracking-wide">
              {lang === "fr" ? "pays de représentation" : "countries represented"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
