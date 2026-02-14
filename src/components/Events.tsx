"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { Calendar, MapPin } from "lucide-react";

export default function Events() {
  const { t } = useLanguage();

  return (
    <section id="events" className="relative py-24 bg-[#F8F9FA]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#C5A55A]" />
            <span className="text-[#C5A55A] text-sm font-semibold tracking-widest uppercase">
              {t.nav.events}
            </span>
            <div className="h-px w-8 bg-[#C5A55A]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#003DA5] leading-tight">
            {t.events.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.events.items.map((event, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Event image */}
              <div className="relative h-56 bg-gradient-to-br from-[#003DA5]/20 to-[#4A90D9]/10 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute top-4 left-4 bg-[#003DA5] text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-semibold">{event.date}</span>
                  </div>
                </div>
              </div>

              {/* Event content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900 mb-3">
                  {event.name}
                </h3>
                <div className="flex items-center gap-2 text-[#C5A55A] mb-4">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm font-medium">{event.location}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C5A55A] via-[#003DA5] to-[#C5A55A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
