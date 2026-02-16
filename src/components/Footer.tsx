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
    <footer className="bg-foreground text-white pt-24 pb-12 overflow-hidden relative">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -top-[200px] -left-[200px] w-[500px] h-[500px] bg-[#003DA5]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-[200px] -right-[200px] w-[500px] h-[500px] bg-[#C5A55A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <a href="#home" className="inline-block">
              <img
                src="/images/logos/LOGO-CCNE.jpg"
                alt="CCNE-RDC"
                className="h-14 w-auto rounded-lg bg-white p-1"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              La Chambre de Commerce Nationale et de l'Économie de la République Démocratique du Congo.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders could go here */}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[#C5A55A] text-sm transition-colors duration-300"
                  >
                    {t.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-6">
              Contact
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3 group">
                <Phone className="h-5 w-5 text-[#C5A55A] mt-0.5 shrink-0 group-hover:text-white transition-colors" />
                <span className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  +243 846 870 811
                </span>
              </li>
              <li className="flex items-start gap-3 group">
                <Mail className="h-5 w-5 text-[#C5A55A] mt-0.5 shrink-0 group-hover:text-white transition-colors" />
                <a href="mailto:ccne-rdc23@gmail.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                  ccne-rdc23@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="h-5 w-5 text-[#C5A55A] mt-0.5 shrink-0 group-hover:text-white transition-colors" />
                <span className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  16 Ave Londola, Lingwala,<br />Kinshasa, RDC
                </span>
              </li>
            </ul>
          </div>

          {/* Tutelle */}
          <div>
            <h4 className="text-sm font-semibold text-white tracking-widest uppercase mb-6">
              Sous la tutelle de
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { src: "/images/logos/ministere-affaires-etrangeres.png", alt: "MAE" },
                { src: "/images/logos/ministere-commerce-exterieur.png", alt: "MCE" },
                { src: "/images/logos/ministere-entrepreneuriat-pme.jpg", alt: "MPME" },
                { src: "/images/logos/ministere-plan.png", alt: "MPlan" },
              ].map((logo) => (
                <div 
                  key={logo.alt} 
                  className="h-12 bg-white/5 rounded-lg flex items-center justify-center p-2 hover:bg-white/10 transition-colors duration-300 group"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="max-h-full max-w-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                    onError={(e) => {
                      const t = e.target as HTMLImageElement;
                      t.style.display = "none";
                    }} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            {t.footer.copyright}
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
