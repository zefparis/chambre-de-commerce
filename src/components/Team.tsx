"use client";

import Image from "next/image";
import { useLanguage } from "@/hooks/useLanguage";

const featured = {
  name: "Ramazani Maftah Amisi",
  role: "Président d'Honneur",
  photo: "/images/team/president-honneur.jpg",
};

const members = [
  {
    name: "Bolema W'Olema Jose",
    role: "Président National de la CCNE-RDC",
    photo: "/images/team/directeur-general.jpg",
  },
  {
    name: "Anthony Lacolombe Molongya",
    role: "Administrateur Directeur Général",
    photo: "/images/team/Administrateur%20directeur%20g%C3%A9n%C3%A9ral.jpeg",
  },
  {
    name: "Rex Daniel Kilauri",
    role: "Adjoint en charge des Projets et Investissements",
    photo: "/images/team/Adjoint%20en%20charge%20projets%20et%20Investissements.jpeg",
  },
  {
    name: "Kale Kapenga Kilolo",
    role: "Directeur chargé des Relations Publiques",
    photo: "/images/team/Directeur%20charg%C3%A9%20des%20relations%20publiques.jpeg",
  },
  {
    name: "Papy Musuyi",
    role: "Représentant CCNE-RDC au Royaume-Uni",
    photo: "/images/team/Papy%20Musuyi%20repr%C3%A9sentant%20de%20la%20chambre%20du%20commerce%20nationale%20et%20de%20l%27%C3%A9conomie%20au%20royaume%20uni.jpeg",
  },
];

export default function Team() {
  const { t } = useLanguage();

  return (
    <section id="team" className="relative py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full border border-[#C5A55A]/30 bg-[#C5A55A]/5 text-[#C5A55A] text-xs font-semibold tracking-widest uppercase">
              {t.nav.team}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-4">
            {t.team.title}
          </h2>
        </div>

        {/* Featured card — Président d'Honneur */}
        <div className="mb-8">
          <div className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:col-span-2 max-w-2xl mx-auto">
            <div className="relative aspect-3/4 sm:aspect-video overflow-hidden bg-gray-100">
              <Image
                src={featured.photo}
                alt={featured.name}
                fill
                sizes="(max-width: 640px) 100vw, 672px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: "center 20%" }}
              />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
                  {featured.name}
                </h3>
                <p className="text-[#C5A55A] font-semibold text-sm mt-2 uppercase tracking-widest">
                  {featured.role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Grid — Other members */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => {
            const isPlaceholder = member.name === "À compléter";
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-4/5 overflow-hidden bg-gray-100">
                  <Image
                    src={member.photo}
                    alt={isPlaceholder ? member.role : member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className={`font-display text-xl font-bold drop-shadow-md ${isPlaceholder ? "text-gray-300 italic" : "text-white"}`}>
                      {member.name}
                    </h3>
                    <p className="text-[#C5A55A] font-semibold text-xs mt-1 uppercase tracking-widest">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
