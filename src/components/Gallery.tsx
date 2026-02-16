"use client";

import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  { src: "/images/gallery/photo-1.jpg", alt: "CCNE-RDC Event 1" },
  { src: "/images/gallery/photo-2.jpg", alt: "CCNE-RDC Event 2" },
  { src: "/images/gallery/photo-3.jpg", alt: "CCNE-RDC Event 3" },
  { src: "/images/gallery/photo-4.jpg", alt: "CCNE-RDC Event 4" },
  { src: "/images/gallery/photo-5.jpg", alt: "CCNE-RDC Event 5" },
  { src: "/images/gallery/photo-6.jpg", alt: "CCNE-RDC Event 6" },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = () =>
    setLightbox((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null));
  const next = () =>
    setLightbox((i) => (i !== null ? (i + 1) % galleryImages.length : null));

  return (
    <section id="gallery" className="relative py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full border border-[#C5A55A]/30 bg-[#C5A55A]/5 text-[#C5A55A] text-xs font-semibold tracking-widest uppercase">
              {t.nav.gallery}
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6">
            {t.gallery.title}
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((img, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-4/3 rounded-3xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-end p-8">
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <span className="text-white font-medium text-lg tracking-wide drop-shadow-md">
                    {img.alt}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-100 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={prev}
            className="absolute left-6 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-all hidden md:block"
            aria-label="Previous"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            onClick={next}
            className="absolute right-6 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-all hidden md:block"
            aria-label="Next"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          
          <div className="relative max-w-7xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            <p className="mt-6 text-white/90 text-lg font-medium tracking-wide">
              {galleryImages[lightbox].alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
