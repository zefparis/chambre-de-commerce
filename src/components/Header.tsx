"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { navItems } from "@/data/navigation";
import { locales, localeNames, localeFlags, type Locale } from "@/i18n/routing";

export default function Header() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const mobileLangRef = useRef<HTMLDivElement>(null);

  const switchLocale = useCallback((newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setLangOpen(false);
    setMobileOpen(false);
  }, [router, pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      const insideDesktop = langRef.current?.contains(target);
      const insideMobile = mobileLangRef.current?.contains(target);
      if (!insideDesktop && !insideMobile) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setLangOpen(false);
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

          {/* Desktop: flag dropdown + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
                  scrolled
                    ? "hover:bg-black/5"
                    : "hover:bg-white/10"
                }`}
                aria-label="Change language"
              >
                <span className="text-xl leading-none">{localeFlags[locale]}</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  scrolled ? "text-gray-500" : "text-white/70"
                } ${langOpen ? "rotate-180" : ""}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-xl shadow-2xl border border-gray-100 py-1 z-50 max-h-96 overflow-y-auto">
                  {locales.map((l) => (
                    <button
                      key={l}
                      onClick={() => switchLocale(l)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                        l === locale
                          ? "bg-[#003DA5]/10 text-[#003DA5] font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                      dir={l === "ar" ? "rtl" : "ltr"}
                    >
                      <span className="text-lg leading-none">{localeFlags[l]}</span>
                      <span>{localeNames[l]}</span>
                    </button>
                  ))}
                </div>
              )}
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

          {/* Mobile: flag + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => { setLangOpen(!langOpen); setMobileOpen(false); }}
              className={`flex items-center gap-1 px-2 py-1.5 rounded-full transition-all active:scale-95 ${
                scrolled
                  ? "hover:bg-gray-100 active:bg-gray-200"
                  : "hover:bg-white/10 active:bg-white/20"
              }`}
              aria-label="Change language"
            >
              <span className="text-xl leading-none">{localeFlags[locale]}</span>
              <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${
                scrolled ? "text-gray-500" : "text-white/70"
              } ${langOpen ? "rotate-180" : ""}`} />
            </button>
            <button
              onClick={() => { setMobileOpen(!mobileOpen); setLangOpen(false); }}
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

      {/* Language dropdown (mobile) — opens below header */}
      {langOpen && (
        <div ref={mobileLangRef} className="lg:hidden bg-white shadow-xl border-t border-gray-100 z-40">
          <div className="grid grid-cols-2 gap-1 p-3 max-w-md mx-auto">
            {locales.map((l) => (
              <button
                key={l}
                onClick={() => switchLocale(l)}
                className={`flex items-center gap-2.5 px-3 py-3 rounded-xl text-sm font-medium transition-all active:scale-95 ${
                  l === locale
                    ? "bg-[#003DA5] text-white shadow-md"
                    : "text-gray-700 bg-gray-50 active:bg-gray-200"
                }`}
                dir={l === "ar" ? "rtl" : "ltr"}
              >
                <span className="text-lg leading-none">{localeFlags[l]}</span>
                <span className="truncate">{localeNames[l]}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile navigation menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[calc(var(--header-h,56px))] bg-white z-40 overflow-y-auto"
          style={{ "--header-h": scrolled ? "56px" : "64px" } as React.CSSProperties}
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
