"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { navItems } from "@/data/navigation";
import { locales, localeNames, type Locale } from "@/i18n/routing";

export default function Header() {
  const t = useTranslations();
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const switchLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setLangOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-sm border-b border-white/20 saturate-150 supports-backdrop-filter:bg-white/60"
          : "bg-transparent pt-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-16" : "h-24"}`}>
          {/* Logo */}
          <a href="#home" className="flex items-center shrink-0 group">
            <Image
              src="/images/logos/LOGO-CCNE.jpg"
              alt="CCNE-RDC"
              width={120}
              height={64}
              className={`w-auto transition-all duration-500 ${
                scrolled 
                  ? "h-10 rounded shadow-sm" 
                  : "h-16 rounded bg-white/95 p-1.5 shadow-lg group-hover:scale-105"
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

          {/* Right side: Lang dropdown + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                  scrolled
                    ? "text-gray-600 hover:text-black hover:bg-black/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                aria-label="Change language"
              >
                <Globe className="h-3.5 w-3.5" />
                {locale.toUpperCase()}
                <ChevronDown className={`h-3 w-3 transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 max-h-80 overflow-y-auto">
                  {locales.map((l) => (
                    <button
                      key={l}
                      onClick={() => switchLocale(l)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                        l === locale
                          ? "bg-[#003DA5]/10 text-[#003DA5] font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                      } ${l === "ar" ? "text-right" : ""}`}
                      dir={l === "ar" ? "rtl" : "ltr"}
                    >
                      {localeNames[l]}
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

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${
                scrolled ? "text-gray-800 bg-black/5" : "text-white bg-white/10 backdrop-blur-md"
              }`}
            >
              <Globe className="h-3.5 w-3.5" />
              {locale.toUpperCase()}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-full transition-colors ${
                scrolled ? "text-gray-800 hover:bg-black/5" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-xl border-t animate-in slide-in-from-top">
          <nav className="flex flex-col py-4 px-4">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left px-4 py-3 text-gray-700 hover:text-[#003DA5] hover:bg-blue-50 rounded-md text-sm font-medium transition-colors"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
            <div className="px-4 py-2 grid grid-cols-3 gap-1">
              {locales.map((l) => (
                <button
                  key={l}
                  onClick={() => switchLocale(l)}
                  className={`px-2 py-1.5 text-xs rounded-md transition-colors font-medium ${
                    l === locale
                      ? "bg-[#003DA5] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  dir={l === "ar" ? "rtl" : "ltr"}
                >
                  {localeNames[l]}
                </button>
              ))}
            </div>
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-3 mx-4 rounded-lg bg-[#C5A55A] px-5 py-2.5 text-sm font-semibold text-white text-center"
            >
              {t("nav.cta")}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
