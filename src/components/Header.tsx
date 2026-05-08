"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { locales, localeNames, localeFlags, type Locale } from "@/i18n/routing";

export default function Header() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const switchLocale = useCallback((newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setMobileOpen(false);
  }, [router, pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-sm border-b border-white/20 saturate-150"
          : "bg-transparent pt-2 sm:pt-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-14 sm:h-16" : "h-16 sm:h-24"}`}>
          {/* Logo */}
          <a href="#home" className="flex items-center shrink-0 group">
            <Image
              src="/images/logos/LOGO-CCNE.jpg"
              alt="CCNE-RDC"
              width={120}
              height={64}
              className={`w-auto transition-all duration-500 ${
                scrolled 
                  ? "h-9 sm:h-10 rounded shadow-sm" 
                  : "h-12 sm:h-16 rounded bg-white/95 p-1 sm:p-1.5 shadow-lg group-hover:scale-105"
              }`}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/5 backdrop-blur-lg rounded-full px-2 py-1.5 border border-white/10">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  scrolled
                    ? "text-gray-800 hover:text-black hover:bg-white/50"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </nav>

          {/* Desktop: inline flags + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1 rounded-full bg-black/5 backdrop-blur-lg px-2 py-1 border border-white/10">
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => switchLocale(l)}
                  title={localeNames[l]}
                  className={`relative text-lg leading-none rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 ${
                    l === locale
                      ? "bg-white/90 shadow-sm scale-110 ring-2 ring-[#C5A55A]/50"
                      : "hover:bg-white/20 hover:scale-105 opacity-70 hover:opacity-100"
                  }`}
                >
                  {localeFlags[l]}
                </button>
              ))}
            </div>
            <button
              onClick={() => handleNavClick("#contact")}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                scrolled
                  ? "bg-[#003DA5] hover:bg-[#002d7a]"
                  : "bg-[#C5A55A] hover:bg-[#b89545]"
              }`}
            >
              {t("nav.cta")}
            </button>
          </div>

          {/* Mobile: hamburger only */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2.5 rounded-full transition-colors ${
                scrolled
                  ? "text-gray-800 hover:bg-gray-100 active:bg-gray-200"
                  : "text-white hover:bg-white/10 active:bg-white/20"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Language flag strip — always visible below header */}
      <div className={`transition-all duration-300 ${
        scrolled 
          ? "bg-white/60 backdrop-blur-md border-t border-gray-100/50" 
          : "bg-black/10 backdrop-blur-md"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-1 py-1.5 overflow-x-auto scrollbar-hide">
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                title={localeNames[l]}
                className={`shrink-0 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium transition-all duration-200 active:scale-95 ${
                  l === locale
                    ? scrolled
                      ? "bg-[#003DA5] text-white shadow-md"
                      : "bg-white text-gray-900 shadow-md"
                    : scrolled
                      ? "text-gray-600 hover:bg-gray-100 active:bg-gray-200"
                      : "text-white/80 hover:bg-white/15 active:bg-white/25"
                }`}
              >
                <span className="text-base leading-none">{localeFlags[l]}</span>
                <span className="hidden sm:inline">{l.toUpperCase()}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile navigation menu — full screen overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[calc(var(--header-h,80px))] bg-white z-40 overflow-y-auto"
          style={{ "--header-h": scrolled ? "82px" : "96px" } as React.CSSProperties}
        >
          <nav className="flex flex-col py-3 px-4 min-h-full">
            <div className="flex-1 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full flex items-center px-4 py-4 text-gray-700 hover:text-[#003DA5] active:bg-blue-50 rounded-xl text-base font-medium transition-colors border-b border-gray-50 last:border-0"
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-6 mb-4 mx-2 rounded-xl bg-[#C5A55A] hover:bg-[#b89545] active:bg-[#a88540] px-6 py-4 text-base font-semibold text-white text-center transition-colors shadow-lg"
            >
              {t("nav.cta")}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
