"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { Calendar, MapPin, Play } from "lucide-react";

export default function Events() {
  const { t } = useLanguage();

  return (
    <section id="events" className="relative py-16 md:py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full border border-[#C5A55A]/30 bg-[#C5A55A]/5 text-[#C5A55A] text-xs font-semibold tracking-widest uppercase">
              {t.nav.events}
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-4">
            {t.events.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {t.events.items.map((event, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100"
            >
              {/* Event image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />

                {/* Date Badge */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-foreground px-4 py-2 rounded-xl shadow-lg border border-white/50">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-[#003DA5]" />
                    <span className="text-sm font-bold tracking-wide">{event.date}</span>
                  </div>
                </div>
              </div>

              {/* Event content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-2 text-[#C5A55A] bg-[#C5A55A]/5 px-3 py-1 rounded-full">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="text-xs font-semibold uppercase tracking-wide">{event.location}</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-[#003DA5] transition-colors">
                  {event.name}
                </h3>
                
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {event.description}
                </p>

                <a
                  href={event.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#003DA5] font-semibold text-sm hover:underline decoration-2 underline-offset-4 transition-all"
                >
                  <Play className="h-4 w-4" />
                  <span>Voir la vidéo</span>
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
