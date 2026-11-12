import React from 'react';

export const SiGraduasiHeader: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-30 shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
        
        {/* Brand: Official Logo + Si-Graduasi Jabar */}
        <div className="flex items-center gap-2.5">
          {/* Official Emblem (Foto 1) */}
          <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shrink-0">
            <img 
              src="/assets/logos/si-graduasi-logo.png" 
              alt="Logo Resmi Si-Graduasi Jawa Barat" 
              className="w-full h-full object-contain [image-rendering:-webkit-optimize-contrast]"
            />
          </div>

          <div className="flex items-baseline">
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900">
              Si-Graduasi
            </span>
            <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#008444] ml-1.5">
              Jabar
            </span>
          </div>
        </div>

        {/* Clean Subtext without capsules */}
        <div className="text-xs font-medium text-slate-500 hidden sm:block">
          Dinas Sosial Provinsi Jawa Barat
        </div>

      </div>
    </header>
  );
};
