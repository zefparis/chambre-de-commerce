"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Landmark, ShieldCheck, BarChart3, Handshake, ArrowRight } from "lucide-react";

const featured = {
  name: "Ramazani Maftah Amisi",
  role: "Président d'Honneur",
  tagline: "Vision stratégique et garant institutionnel de chaque mission.",
  photo: "/images/team/president-honneur.jpg",
};

const members = [
  {
    name: "Bolema W'Olema Jose",
    role: "Président National de la CCNE-RDC",
    photo: "/images/team/directeur-general.jpg",
    badge: "Leadership",
    badgeColor: "bg-[#003DA5]/80 text-white",
  },
  {
    name: "Anthony Lacolombe Molongya",
    role: "Administrateur Directeur Général",
    photo: "/images/team/Administrateur%20directeur%20g%C3%A9n%C3%A9ral.jpeg",
    badge: "Administration",
    badgeColor: "bg-emerald-600/80 text-white",
  },
  {
    name: "Rex Daniel Kilauri",
    role: "Adjoint en charge des Projets et Investissements",
    photo: "/images/team/Adjoint%20en%20charge%20projets%20et%20Investissements.jpeg",
    badge: "Investissements",
    badgeColor: "bg-[#C5A55A]/90 text-white",
  },
  {
    name: "Kale Kapenga Kilolo",
    role: "Directeur chargé des Relations Publiques",
    photo: "/images/team/Directeur%20charg%C3%A9%20des%20relations%20publiques.jpeg",
    badge: "Relations Publiques",
    badgeColor: "bg-purple-600/80 text-white",
  },
  {
    name: "Papy Musuyi",
    role: "Représentant CCNE-RDC au Royaume-Uni",
    photo: "/images/team/Papy%20Musuyi%20repr%C3%A9sentant%20de%20la%20chambre%20du%20commerce%20nationale%20et%20de%20l%27%C3%A9conomie%20au%20royaume%20uni.jpeg",
    badge: "Réseau UK",
    badgeColor: "bg-[#8B1A1A]/80 text-white",
  },
];

const coverageItems = [
  { icon: Landmark, label: "Administratif & Juridique" },
  { icon: ShieldCheck, label: "Sécurité terrain" },
  { icon: BarChart3, label: "Faisabilité & Due Diligence" },
  { icon: Handshake, label: "Relations institutionnelles" },
];

export default function Team() {
  const t = useTranslations();

  return (
    <section id="team" className="relative py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full border border-[#C5A55A]/30 bg-[#C5A55A]/5 text-[#C5A55A] text-xs font-semibold tracking-widest uppercase">
              {t("nav.team")}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-4">
            {t("team.title")}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {t("team.subtitle")}
          </p>
        </div>

        {/* ── Coverage bar ── */}
        <div className="mb-12 rounded-2xl bg-[#0a1628] p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {coverageItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3 hover:bg-white/10 transition-colors duration-300"
              >
                <item.icon className="h-5 w-5 shrink-0 text-[#C5A55A]" />
                <span className="text-sm font-medium text-gray-200">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Featured card — Président d'Honneur ── */}
        <div className="mb-8">
          <div className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 max-w-2xl mx-auto">
            <div className="relative aspect-3/4 sm:aspect-video overflow-hidden bg-gray-100">
              <Image
                src={featured.photo}
                alt={featured.name}
                fill
                sizes="(max-width: 640px) 100vw, 672px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: "center 20%" }}
              />
              <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
                  {featured.name}
                </h3>
                <p className="text-[#C5A55A] font-semibold text-sm mt-2 uppercase tracking-widest">
                  {featured.role}
                </p>
                <p className="text-gray-300 text-sm mt-3 leading-relaxed max-w-md">
                  {featured.tagline}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Grid — Other members ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative aspect-4/5 overflow-hidden bg-gray-100">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Domain badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md ${member.badgeColor}`}>
                    {member.badge}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl font-bold text-white drop-shadow-md">
                    {member.name}
                  </h3>
                  <p className="text-[#C5A55A] font-semibold text-xs mt-1 uppercase tracking-widest">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Reassurance block ── */}
        <div className="mt-14 rounded-2xl bg-[#f0f4fa] border border-[#003DA5]/10 p-8 sm:p-10 text-center">
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-6">
            {t("team.reassurance")}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#003DA5] px-7 py-3 text-sm font-semibold text-white hover:bg-[#002d7a] transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            {t("team.cta")}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
