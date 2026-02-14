"use client";

import { useLanguage } from "@/hooks/useLanguage";

const partners = [
  { name: "Ministère des Affaires Étrangères", logo: "/images/partners/mae.png" },
  { name: "Ministère du Commerce Extérieur", logo: "/images/partners/mce.png" },
  { name: "Ministère de l'Entrepreneuriat et PME", logo: "/images/partners/mpme.png" },
  { name: "Ministère du Plan", logo: "/images/partners/mplan.png" },
  { name: "CSCEC", logo: "/images/partners/cscec.png" },
  { name: "Maroc Export", logo: "/images/partners/maroc-export.png" },
  { name: "Banque Mondiale / World Bank", logo: "/images/partners/banque-mondiale.png" },
  { name: "Min. Coopération Internationale", logo: "/images/partners/mciirf.png" },
  { name: "Initiative Center", logo: "/images/partners/initiative-center.png" },
  { name: "ANAPI", logo: "/images/partners/anapi.png" },
];

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section id="partners" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#C5A55A]" />
            <span className="text-[#C5A55A] text-sm font-semibold tracking-widest uppercase">
              {t.nav.partners}
            </span>
            <div className="h-px w-8 bg-[#C5A55A]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#003DA5] leading-tight">
            {t.partners.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-100 bg-[#F8F9FA] hover:bg-white hover:shadow-lg hover:border-[#003DA5]/10 transition-all duration-300"
            >
              <div className="h-16 w-full flex items-center justify-center grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>
              <p className="mt-3 text-xs text-center text-gray-500 group-hover:text-[#003DA5] font-medium transition-colors leading-tight">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
