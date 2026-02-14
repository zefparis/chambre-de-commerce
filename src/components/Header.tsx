"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { Menu, X, Globe } from "lucide-react";

const navItems = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "whyDRC", href: "#why-invest" },
  { key: "services", href: "#sectors" },
  { key: "team", href: "#team" },
  { key: "network", href: "#network" },
  { key: "partners", href: "#partners" },
  { key: "events", href: "#events" },
  { key: "contact", href: "#contact" },
] as const;

export default function Header() {
  const { t, lang, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 shrink-0">
            <img
              src="/images/logo-ccne.png"
              alt="CCNE-RDC"
              className="h-12 w-auto"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <span
              className={`font-display text-lg font-bold tracking-tight transition-colors ${
                scrolled ? "text-[#003DA5]" : "text-white"
              }`}
            >
              CCNE-RDC
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-white/10 ${
                  scrolled
                    ? "text-gray-700 hover:text-[#003DA5] hover:bg-blue-50"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {t.nav[item.key]}
              </button>
            ))}
          </nav>

          {/* Right side: Lang toggle + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                scrolled
                  ? "border-[#003DA5]/20 text-[#003DA5] hover:bg-[#003DA5] hover:text-white"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              {lang === "fr" ? "EN" : "FR"}
            </button>
            <button
              onClick={() => handleNavClick("#contact")}
              className="rounded-lg bg-[#C5A55A] px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#b89545] hover:shadow-xl"
            >
              {t.nav.cta}
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-1 px-2 py-1 rounded text-sm font-semibold ${
                scrolled ? "text-[#003DA5]" : "text-white"
              }`}
              aria-label="Toggle language"
            >
              <Globe className="h-4 w-4" />
              {lang === "fr" ? "EN" : "FR"}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-md ${
                scrolled ? "text-gray-700" : "text-white"
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
                {t.nav[item.key]}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-3 mx-4 rounded-lg bg-[#C5A55A] px-5 py-2.5 text-sm font-semibold text-white text-center"
            >
              {t.nav.cta}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
