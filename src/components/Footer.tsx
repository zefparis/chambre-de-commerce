"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { Phone, Mail, MapPin } from "lucide-react";

const navItems = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "whyDRC", href: "#why-invest" },
  { key: "services", href: "#sectors" },
  { key: "team", href: "#team" },
  { key: "network", href: "#network" },
  { key: "contact", href: "#contact" },
] as const;

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#001d4a] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/images/logos/LOGO-CCNE.jpg"
                alt="CCNE-RDC — Chambre de Commerce Nationale et de l'Économie"
                className="h-16 w-auto rounded bg-white/90 p-1.5"
              />
            </div>
            <p className="text-blue-200/60 text-sm leading-relaxed">
              Chambre de Commerce Nationale et de l&apos;Économie de la République Démocratique du Congo
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm font-semibold text-[#C5A55A] uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="text-blue-200/60 hover:text-white text-sm transition-colors"
                  >
                    {t.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-[#C5A55A] uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-[#C5A55A] mt-0.5 shrink-0" />
                <span className="text-blue-200/60 text-sm">+243 846 870 811</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-[#C5A55A] mt-0.5 shrink-0" />
                <a href="mailto:ccne-rdc23@gmail.com" className="text-blue-200/60 hover:text-white text-sm transition-colors">
                  ccne-rdc23@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#C5A55A] mt-0.5 shrink-0" />
                <span className="text-blue-200/60 text-sm">16 Ave Londola, Lingwala, Kinshasa, RDC</span>
              </li>
            </ul>
          </div>

          {/* Ministry logos */}
          <div>
            <h4 className="font-display text-sm font-semibold text-[#C5A55A] uppercase tracking-wider mb-4">
              Tutelle
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { src: "/images/logos/ministere-affaires-etrangeres.png", alt: "MAE" },
                { src: "/images/logos/ministere-commerce-exterieur.png", alt: "MCE" },
                { src: "/images/logos/ministere-entrepreneuriat-pme.jpg", alt: "MPME" },
                { src: "/images/logos/ministere-plan.png", alt: "MPlan" },
              ].map((logo) => (
                <div key={logo.alt} className="h-10 flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity">
                  <img src={logo.src} alt={logo.alt} className="max-h-full max-w-full object-contain" onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    t.style.display = "none";
                    const p = t.parentElement;
                    if (p && !p.querySelector("span")) {
                      const s = document.createElement("span");
                      s.className = "text-xs text-blue-200/40";
                      s.textContent = logo.alt;
                      p.appendChild(s);
                    }
                  }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-blue-200/40 text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
