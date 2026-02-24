"use client";

import { useLanguage } from "@/hooks/useLanguage";

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.team.members.map((member, index) => (
            <div
              key={index}
              className={`group relative bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
                index >= 3 ? "lg:col-span-1 sm:col-span-1" : ""
              }`}
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Initial/Fallback if no image */}
                <div className="absolute inset-0 flex items-center justify-center -z-10">
                  <span className="text-gray-300 text-4xl font-display font-bold">
                    {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-gray-900 group-hover:text-[#003DA5] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#C5A55A] font-medium text-sm mt-2 uppercase tracking-wide">
                  {member.role}
                </p>
                <p className="mt-3 text-gray-700 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
