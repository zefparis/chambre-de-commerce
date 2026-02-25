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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.team.members.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
            >
              {/* Photo — natural aspect ratio, no crop */}
              <div className="relative aspect-4/5 overflow-hidden bg-gray-100">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                
                {/* Bottom gradient for text readability */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Name + role overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl font-bold text-white drop-shadow-md">
                    {member.name}
                  </h3>
                  <p className="text-[#C5A55A] font-semibold text-xs mt-1 uppercase tracking-widest">
                    {member.role}
                  </p>
                </div>

                {/* Fallback initials if no image */}
                <div className="absolute inset-0 flex items-center justify-center -z-10">
                  <span className="text-gray-300 text-5xl font-display font-bold">
                    {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed">
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
