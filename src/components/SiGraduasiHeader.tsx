import React from 'react';

export const SiGraduasiHeader: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-30 shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
        
        {/* Brand: Clean Logo + Si-Graduasi Jabar (Jabar in green, no capsules) */}
        <div className="flex items-center gap-2.5">
          {/* Official Emblem */}
          <div className="w-8 h-8 rounded-lg bg-[#008444] flex items-center justify-center text-white shrink-0 shadow-xs">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 5V11C4 16.5 12 21 12 21C12 21 20 16.5 20 11V5L12 2Z" fill="#008444" stroke="#ffffff" strokeWidth="1.6" />
              <polygon points="12,6 18,9 12,12 6,9" fill="#FBBF24" />
              <path d="M9 11V14C9 15 15 15 15 14V11" stroke="#FBBF24" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
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
