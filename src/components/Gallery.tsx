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
    <section id="gallery" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#C5A55A]" />
            <span className="text-[#C5A55A] text-sm font-semibold tracking-widest uppercase">
              {t.nav.gallery}
            </span>
            <div className="h-px w-8 bg-[#C5A55A]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#003DA5] leading-tight">
            {t.gallery.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-[#003DA5]/10 to-[#4A90D9]/5 cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-[#003DA5]/0 group-hover:bg-[#003DA5]/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.alt}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2"
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={prev}
            className="absolute left-4 text-white/80 hover:text-white p-2"
            aria-label="Previous"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 text-white/80 hover:text-white p-2"
            aria-label="Next"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                const div = document.createElement("div");
                div.className = "text-white text-center p-8";
                div.textContent = galleryImages[lightbox!].alt;
                parent.appendChild(div);
              }
            }}
          />
        </div>
      )}
    </section>
  );
}
