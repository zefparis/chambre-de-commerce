"use client";

import { useLanguage } from "@/hooks/useLanguage";

const partners = [
  { name: "Ministère des Affaires Étrangères", logo: "/images/partners/mae.png", url: "https://diplomatie.gouv.cd/" },
  { name: "Ministère du Commerce Extérieur", logo: "/images/partners/mce.png", url: "https://commerce.gouv.cd/" },
  { name: "Ministère de l'Entrepreneuriat et PME", logo: "/images/partners/mpme.png", url: "https://pme.gouv.cd/" },
  { name: "Ministère du Plan", logo: "/images/partners/mplan.png", url: "https://plan.gouv.cd/" },
  { name: "CSCEC", logo: "/images/partners/cscec.png", url: "https://www.cscec.com/" },
  { name: "Maroc Export", logo: "/images/partners/maroc-export.png", url: "https://asmex.org/" },
  { name: "Banque Mondiale / World Bank", logo: "/images/partners/banque-mondiale.png", url: "https://www.worldbank.org/" },
  { name: "Min. Coopération Internationale", logo: "/images/partners/mciirf.png", url: "https://diplomatie.gouv.cd/" },
  { name: "Initiative Center", logo: "/images/partners/initiative-center.png", url: "https://easterncongo.org/" },
  { name: "ANAPI", logo: "/images/partners/anapi.png", url: "https://anapi.cd/" },
];

export default function Partners() {
  const { t } = useLanguage();

  return (
    <section id="partners" className="relative py-24 bg-[#f0ebe5]">
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
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center p-8 rounded-2xl border-[3px] border-gray-300/90 bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50/30 hover:shadow-2xl hover:border-[#003DA5]/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#C5A55A]/10 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative h-24 w-full flex items-center justify-center mb-5">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain filter grayscale-[30%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>
              
              <p className="text-sm text-center text-gray-700 group-hover:text-[#003DA5] font-semibold transition-colors leading-snug">
                {partner.name}
              </p>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 bg-gradient-to-r from-[#003DA5] via-[#C5A55A] to-[#003DA5] group-hover:w-3/4 transition-all duration-500 rounded-t-full" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
