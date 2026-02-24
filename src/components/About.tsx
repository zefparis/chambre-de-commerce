"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { Target, Handshake } from "lucide-react";

const ministerLogos = [
  { src: "/images/logos/ministere-affaires-etrangeres.png", alt: "Ministère des Affaires Étrangères" },
  { src: "/images/logos/ministere-commerce-exterieur.png", alt: "Ministère du Commerce Extérieur" },
  { src: "/images/logos/ministere-entrepreneuriat-pme.jpg", alt: "Ministère de l'Entrepreneuriat et PME" },
  { src: "/images/logos/ministere-plan.png", alt: "Ministère du Plan" },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-16 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full border border-[#C5A55A]/30 bg-[#C5A55A]/5 text-[#C5A55A] text-xs font-semibold tracking-widest uppercase">
              {t.nav.about}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-4">
            {t.about.title}
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Main text */}
          <div className="space-y-8">
            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.text}
              </p>
            </div>
            
            <div className="pt-6 border-t border-gray-200">
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                Sous la tutelle de
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {ministerLogos.map((logo) => (
                  <div
                    key={logo.alt}
                    className="group flex flex-col items-center gap-2 p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="h-10 flex items-center justify-center">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="max-h-full w-auto object-contain group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    </div>
                    <p className="text-[10px] text-center text-gray-600 font-medium leading-tight">
                      {logo.alt}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Role card - Apple-style feature card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-[#003DA5] to-[#C5A55A] rounded-4xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <div className="relative bg-white rounded-4xl p-8 sm:p-12 shadow-2xl border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#003DA5] text-white shadow-lg shadow-blue-900/20">
                  <Target className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-gray-900">
                    {t.about.roleTitle}
                  </h3>
                  <div className="h-1 w-12 bg-[#C5A55A] mt-2 rounded-full" />
                </div>
              </div>
              
              <p className="text-gray-700 text-base leading-relaxed mb-8">
                {t.about.roleText}
              </p>
              
              <div className="flex items-center justify-between pt-8 border-t border-gray-100">
                <div className="flex items-center gap-2 text-[#003DA5] font-semibold">
                  <Handshake className="h-5 w-5" />
                  <span>Partenaire de confiance</span>
                </div>
                <img 
                  src="/images/logos/LOGO-CCNE.jpg" 
                  alt="CCNE Logo" 
                  className="h-8 w-auto opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
