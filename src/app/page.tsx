"use client";

import { LanguageProvider } from "@/hooks/useLanguage";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyInvest from "@/components/WhyInvest";
import Sectors from "@/components/Sectors";
import Team from "@/components/Team";
import Network from "@/components/Network";
import Partners from "@/components/Partners";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <WhyInvest />
        <Sectors />
        <Team />
        <Network />
        <Partners />
        <Events />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
