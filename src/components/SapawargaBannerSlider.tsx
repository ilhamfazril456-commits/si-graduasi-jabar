import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Shield, ArrowRight } from 'lucide-react';

interface BannerSlide {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  ctaText: string;
  gradient: string;
  pattern: string;
  deptBadges: string[];
}

export const SapawargaBannerSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: BannerSlide[] = [
    {
      id: 1,
      tag: 'Si-Graduasi 2026',
      title: 'Akselerasi Kemandirian KPM Jawa Barat',
      subtitle: 'Keterpaduan 5 program graduasi kesejahteraan sosial menuju kemandirian ekonomi berkelanjutan bagi seluruh warga Jawa Barat.',
      ctaText: 'Pelajari Program',
      gradient: 'from-[#0068D9] via-[#0051B3] to-[#00387A]',
      pattern: 'radial-gradient(#ffffff15 1px, transparent 1px)',
      deptBadges: ['Dinsos Jabar', 'Diskominfo Jabar', 'Sapawarga']
    },
    {
      id: 2,
      tag: 'Kawal Bansos',
      title: 'Transparansi Penyaluran Bansos Tepat Sasaran',
      subtitle: 'Pantau data penerima manfaat dan laporkan dugaan salah sasaran atau pemotongan bansos secara aman dan terenkripsi.',
      ctaText: 'Kawal Bansos',
      gradient: 'from-[#008444] via-[#006B37] to-[#004D27]',
      pattern: 'radial-gradient(#ffffff15 1px, transparent 1px)',
      deptBadges: ['Saber Pungli Jabar', 'Dinsos Jabar', 'Kawal Bansos']
    },
    {
      id: 3,
      tag: 'Modal Sosial',
      title: 'Fasilitasi Wirausaha & Akses Permodalan Mikro',
      subtitle: 'Pemberdayaan KPM mandiri melalui pendampingan usaha, bantuan alat kerja, dan fasilitasi KUR perbankan mitra pemerintah.',
      ctaText: 'Cek Bantuan Modal',
      gradient: 'from-[#D97706] via-[#B45309] to-[#78350F]',
      pattern: 'radial-gradient(#ffffff15 1px, transparent 1px)',
      deptBadges: ['Kuk Jabar', 'Dinsos Jabar', 'Modal Mandiri']
    },
    {
      id: 4,
      tag: 'Jalan Jalan Sosial',
      title: 'Survei Faktual Lapangan di 27 Kab/Kota',
      subtitle: 'Pendataan terpadu dan verifikasi geospasial kondisi tempat tinggal KPM langsung ke tingkat rukun tetangga.',
      ctaText: 'Lihat Cakupan',
      gradient: 'from-[#0D9488] via-[#0F766E] to-[#115E59]',
      pattern: 'radial-gradient(#ffffff15 1px, transparent 1px)',
      deptBadges: ['DTKS Jabar', 'TKSK & PKH', 'Sapawarga']
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto advance banner every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const active = slides[currentSlide];

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
      <div className={`relative w-full rounded-2xl bg-gradient-to-r ${active.gradient} text-white p-5 sm:p-7 shadow-sm overflow-hidden transition-all duration-500 min-h-[170px] sm:min-h-[190px] flex flex-col justify-between`}>
        
        {/* Subtle geometric dot pattern */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none [background-size:16px_16px]"
          style={{ backgroundImage: active.pattern }}
        />

        {/* Top Slide Meta Row */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-1.5 flex-wrap">
            {active.deptBadges.map((badge, idx) => (
              <span 
                key={idx}
                className="text-[10px] font-bold bg-white/15 text-white/90 px-2 py-0.5 rounded-md backdrop-blur-xs"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Indicator Counter ("1 dari 4") Matching Sapawarga Screenshot */}
          <div className="bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-semibold text-white/90 tracking-wide font-mono shrink-0">
            {currentSlide + 1} dari {slides.length}
          </div>
        </div>

        {/* Content Body */}
        <div className="relative z-10 my-3 max-w-2xl">
          <div className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-emerald-200 mb-1">
            {active.tag}
          </div>
          <h3 className="text-base sm:text-xl font-extrabold tracking-tight text-white leading-snug">
            {active.title}
          </h3>
          <p className="text-xs sm:text-sm text-white/80 mt-1 line-clamp-2 leading-relaxed">
            {active.subtitle}
          </p>
        </div>

        {/* Bottom Slide Action & Dots */}
        <div className="relative z-10 flex items-center justify-between pt-1">
          <button 
            onClick={nextSlide}
            className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-emerald-200 transition-colors"
          >
            <span>{active.ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Slide dots and nav arrows */}
          <div className="flex items-center gap-2">
            <button 
              onClick={prevSlide}
              aria-label="Slide Sebelumnya"
              className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-1">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`Pilih slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    currentSlide === i ? 'w-5 bg-white' : 'w-1.5 bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextSlide}
              aria-label="Slide Selanjutnya"
              className="w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
