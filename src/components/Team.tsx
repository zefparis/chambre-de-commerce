"use client";

import { useLanguage } from "@/hooks/useLanguage";

export default function Team() {
  const { t } = useLanguage();

  return (
    <section id="team" className="relative py-24 bg-[#F8F9FA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#C5A55A]" />
            <span className="text-[#C5A55A] text-sm font-semibold tracking-widest uppercase">
              {t.nav.team}
            </span>
            <div className="h-px w-8 bg-[#C5A55A]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#003DA5] leading-tight">
            {t.team.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.team.members.map((member, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 ${
                index >= 3 ? "lg:col-span-1 sm:col-span-1" : ""
              }`}
            >
              {/* Photo */}
              <div className="relative h-64 bg-gradient-to-br from-[#003DA5]/10 to-[#4A90D9]/10 overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#003DA5]/10 flex items-center justify-center">
                    <span className="text-[#003DA5] text-3xl font-display font-bold">
                      {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C5A55A] via-[#003DA5] to-[#C5A55A]" />
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-[#C5A55A] font-semibold text-sm mt-1">
                  {member.role}
                </p>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
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
