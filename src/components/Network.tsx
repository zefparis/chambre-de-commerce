"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { MapPin } from "lucide-react";
type Lang = "fr" | "en";

const countryFlags: Record<string, string> = {
  "Zambie": "🇿🇲", "Zambia": "🇿🇲",
  "Canada": "🇨🇦",
  "Mexique": "🇲🇽", "Mexico": "🇲🇽",
  "Royaume-Uni": "🇬🇧", "United Kingdom": "🇬🇧",
  "Maroc": "🇲🇦", "Morocco": "🇲🇦",
  "États-Unis": "🇺🇸", "United States": "🇺🇸",
  "Afrique du Sud": "🇿🇦", "South Africa": "🇿🇦",
  "Benelux": "🇪🇺",
  "Japon": "🇯🇵", "Japan": "🇯🇵",
  "Iran": "🇮🇷",
  "Côte d'Ivoire": "🇨🇮", "Ivory Coast": "🇨🇮",
  "Namibie": "🇳🇦", "Namibia": "🇳🇦",
  "France": "🇫🇷",
  "Belgique": "🇧🇪", "Belgium": "🇧🇪",
  "SADC": "🌍",
};

export default function Network() {
  const { t, lang } = useLanguage();

  return (
    <section id="network" className="relative py-24 bg-gradient-to-br from-[#001d4a] via-[#003DA5] to-[#001d4a] text-white">
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#C5A55A]" />
            <span className="text-[#C5A55A] text-sm font-semibold tracking-widest uppercase">
              {t.nav.network}
            </span>
            <div className="h-px w-8 bg-[#C5A55A]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            {t.network.title}
          </h2>
          <p className="mt-4 text-lg text-blue-200/80 max-w-2xl mx-auto">
            {t.network.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {t.network.countries.map((country) => (
            <div
              key={country}
              className="group flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-4 hover:bg-white/10 hover:border-[#C5A55A]/40 transition-all duration-300"
            >
              <span className="text-2xl" role="img" aria-label={country}>
                {countryFlags[country] || "🌐"}
              </span>
              <span className="text-sm font-medium text-white/90 group-hover:text-white">
                {country}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-[#C5A55A]">
            <MapPin className="h-5 w-5" />
            <span className="font-semibold">15</span>
            <span className="text-blue-200/60 text-sm">
              {lang === "fr" ? "pays de représentation" : "countries represented"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
