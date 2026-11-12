import React, { useState, useEffect } from 'react';
import type { SlideNewsItem } from '../types';
import { ChevronLeft, ChevronRight, PlusCircle } from 'lucide-react';
import { EditSlideModal } from './EditSlideModal';

interface PhotoSlideBannerProps {
  slides: SlideNewsItem[];
  onOpenArticle: (article: SlideNewsItem) => void;
  onAddSlide: (slide: SlideNewsItem) => void;
}

export const PhotoSlideBanner: React.FC<PhotoSlideBannerProps> = ({
  slides,
  onOpenArticle,
  onAddSlide,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showEditModal, setShowEditModal] = useState(false);

  const total = slides.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  // Auto-play timer (6 seconds)
  useEffect(() => {
    if (total <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [total]);

  const currentSlide = slides[currentIndex] || slides[0];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-3.5">
      
      {/* Top Banner Toolbar: Clean Title & Demo Upload Button */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
          <span className="w-2 h-2 rounded-full bg-[#008444]" />
          <span>Informasi & Berita</span>
        </div>

        <button
          onClick={() => setShowEditModal(true)}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-[#008444] text-[11px] font-semibold border border-emerald-200 transition-colors cursor-pointer"
          title="Fitur Demo: Unggah foto dan ubah teks berita slide"
        >
          <PlusCircle className="w-3.5 h-3.5" />
          <span>Tambah / Ubah Foto</span>
        </button>
      </div>

      {/* STRICTLY CONSISTENT FULL-PHOTO BANNER CONTAINER (NO TEXT OVERLAY, PURE CLEAN PHOTO) */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9] rounded-2xl overflow-hidden bg-slate-100 shadow-xs border border-slate-200 group select-none">
        
        {/* Full Image Presentation - Clean, No Text Overlays */}
        <div 
          onClick={() => onOpenArticle(currentSlide)}
          className="w-full h-full cursor-pointer relative"
          role="button"
          tabIndex={0}
          aria-label={`Buka berita: ${currentSlide.title}`}
        >
          <img
            src={currentSlide.imageUrl}
            alt={currentSlide.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
          />

          {/* Slide Indicator Counter: "1/X" or "1 dari X" (Retained in Top-Right) */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white tracking-wider font-mono">
            {currentIndex + 1} / {total}
          </div>
        </div>

        {/* Left Arrow Nav Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-70 group-hover:opacity-100 transition-all cursor-pointer z-20"
          aria-label="Slide Foto Sebelumnya"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow Nav Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-70 group-hover:opacity-100 transition-all cursor-pointer z-20"
          aria-label="Slide Foto Selanjutnya"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Indicator Dots at Bottom */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 pointer-events-none">
          {slides.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all ${
                currentIndex === idx ? 'w-5 bg-[#008444]' : 'w-1.5 bg-white/70'
              }`}
            />
          ))}
        </div>

      </div>

      {/* Upload & Edit Slide Modal */}
      {showEditModal && (
        <EditSlideModal
          onSaveSlide={(newSlide) => {
            onAddSlide(newSlide);
            setCurrentIndex(0);
          }}
          onClose={() => setShowEditModal(false)}
        />
      )}

    </section>
  );
};
