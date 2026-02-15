"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { Target, Handshake } from "lucide-react";

const ministerLogos = [
  { src: "/images/logos/ministere-affaires-etrangeres.png", alt: "Ministère des Affaires Étrangères" },
  { src: "/images/logos/ministere-commerce-exterieur.png", alt: "Ministère du Commerce Extérieur" },
  { src: "/images/logos/ministere-entrepreneuriat-pme.png", alt: "Ministère de l'Entrepreneuriat et PME" },
  { src: "/images/logos/ministere-plan.png", alt: "Ministère du Plan" },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 bg-[#faf8f5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#C5A55A]" />
            <span className="text-[#C5A55A] text-sm font-semibold tracking-widest uppercase">
              {t.nav.about}
            </span>
            <div className="h-px w-8 bg-[#C5A55A]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#003DA5] leading-tight">
            {t.about.title}
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Main text */}
          <div className="space-y-8">
            <div className="relative pl-6 border-l-4 border-[#C5A55A]">
              <p className="text-gray-600 text-lg leading-relaxed">
                {t.about.text}
              </p>
            </div>
          </div>

          {/* Role card */}
          <div className="bg-gradient-to-br from-[#F8F9FA] to-white rounded-2xl p-8 border-2 border-gray-200/80 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#003DA5]/10">
                <Target className="h-6 w-6 text-[#003DA5]" />
              </div>
              <h3 className="font-display text-2xl font-bold text-[#003DA5]">
                {t.about.roleTitle}
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {t.about.roleText}
            </p>
            <div className="mt-6 flex items-center gap-2 text-[#C5A55A]">
              <Handshake className="h-5 w-5" />
              <span className="text-sm font-semibold">CCNE-RDC</span>
            </div>
          </div>
        </div>

        {/* Ministry logos */}
        <div className="mt-20 pt-12 border-t border-gray-100">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {ministerLogos.map((logo) => (
              <div
                key={logo.alt}
                className="group relative h-16 w-32 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector("span")) {
                      const span = document.createElement("span");
                      span.className = "text-xs text-gray-400 text-center leading-tight";
                      span.textContent = logo.alt;
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
