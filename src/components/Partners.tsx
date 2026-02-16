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
    <section id="partners" className="relative py-32 bg-[#f5f5f7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full border border-[#C5A55A]/30 bg-[#C5A55A]/5 text-[#C5A55A] text-xs font-semibold tracking-widest uppercase">
              {t.nav.partners}
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6">
            {t.partners.title}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-gray-200">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center p-8 bg-white hover:bg-gray-50 transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-20 w-full flex items-center justify-center mb-6">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>
              
              <p className="text-xs text-center text-gray-400 group-hover:text-[#003DA5] font-medium transition-colors duration-300">
                {partner.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
