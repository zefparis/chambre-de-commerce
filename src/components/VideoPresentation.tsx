"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export default function VideoPresentation() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      setShowOverlay(false);
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setShowOverlay(true);
  };

  return (
    <section className="relative py-16 md:py-20 bg-[#0a1628] overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#003DA5]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-[#C5A55A]/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="px-3 py-1 rounded-full border border-[#C5A55A]/30 bg-[#C5A55A]/10 text-[#C5A55A] text-xs font-semibold tracking-widest uppercase">
              Présentation
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
            Découvrez la CCNE-RDC
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            En quelques minutes, comprenez pourquoi la RDC est votre prochaine destination d&apos;investissement.
          </p>
        </div>

        {/* Video container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10 aspect-video bg-black group">
          <video
            ref={videoRef}
            src="/images/gallery/video/presentation.mp4"
            className="w-full h-full object-cover cursor-pointer"
            muted={isMuted}
            playsInline
            preload="metadata"
            onClick={handleVideoClick}
            onEnded={handleVideoEnd}
          />

          {/* Play overlay — shown initially and when paused */}
          {showOverlay && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer transition-opacity duration-300"
              onClick={togglePlay}
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white/90 backdrop-blur-md shadow-xl hover:scale-110 transition-transform duration-300">
                <Play className="h-8 w-8 text-[#003DA5] ml-1" />
              </div>
            </div>
          )}

          {/* Bottom controls — visible on hover when playing */}
          <div className={`absolute bottom-0 left-0 right-0 p-4 bg-linear-to-t from-black/80 to-transparent flex items-center justify-between transition-opacity duration-300 ${isPlaying && !showOverlay ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
            <button
              onClick={(e) => { e.stopPropagation(); togglePlay(); }}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); toggleMute(); }}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
