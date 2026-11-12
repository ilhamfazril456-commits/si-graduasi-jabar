import React from 'react';
import type { ProgramItem } from '../types';
import { ThumbsUp, ChevronRight } from 'lucide-react';

interface SapawargaProgramsGridProps {
  programs: ProgramItem[];
  onSelectProgram: (program: ProgramItem) => void;
  onManagePrograms?: () => void;
}

export const SapawargaProgramsGrid: React.FC<SapawargaProgramsGridProps> = ({
  programs,
  onSelectProgram,
  onManagePrograms,
}) => {
  // Bespoke, modern vector logos matching Sapawarga circular icon style
  const renderCustomLogo = (id: string) => {
    switch (id) {
      case 'jalan-jalan-sosial':
        return (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Route Map Path */}
              <path d="M6 28C10 24 14 26 18 20C22 14 26 16 30 10" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="2 3" />
              {/* Map Pin Target */}
              <path d="M26 6C23.79 6 22 7.79 22 10C22 13.5 26 18 26 18C26 18 30 13.5 30 10C30 7.79 28.21 6 26 6Z" fill="#0284C7" />
              <circle cx="26" cy="10" r="1.5" fill="white" />
              {/* Walking Footprints */}
              <ellipse cx="12" cy="24" rx="2.5" ry="3.5" transform="rotate(-20 12 24)" fill="#0369A1" />
              <ellipse cx="17" cy="18" rx="2.5" ry="3.5" transform="rotate(20 17 18)" fill="#0284C7" />
            </svg>
          </div>
        );

      case 'teman-sosial':
        return (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FEF3C7] border border-[#FDE68A] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Companion Caring Hands & Heart */}
              <path d="M18 12C16 9 11 9 9 12C7 15 8 19 18 27C28 19 29 15 27 12C25 9 20 9 18 12Z" fill="#F59E0B" />
              {/* Mentorship Smiling Figures */}
              <circle cx="14" cy="15" r="2.5" fill="#B45309" />
              <circle cx="22" cy="15" r="2.5" fill="#B45309" />
              <path d="M12 22C14 24 22 24 24 22" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        );

      case 'modal-sosial':
        return (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Business Capital Wallet & Growing Sprout */}
              <rect x="6" y="14" width="24" height="15" rx="3" fill="#15803D" />
              <rect x="20" y="18" width="10" height="7" rx="1.5" fill="#166534" />
              <circle cx="23" cy="21.5" r="1.5" fill="#FDE047" />
              {/* Rising Sprout of Economic Independence */}
              <path d="M18 14V7M18 7C18 7 14 6 13 9C12 12 18 12 18 12M18 7C18 7 22 6 23 9C24 12 18 12 18 12" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        );

      case 'kampung-sosial':
        return (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#E0E7FF] border border-[#C7D2FE] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Community Village Houses */}
              <path d="M7 19L14 13L21 19V28H7V19Z" fill="#4F46E5" />
              <path d="M18 17L24 12L30 17V28H18V17Z" fill="#6366F1" opacity="0.85" />
              {/* Green Eco Leaf Community */}
              <path d="M14 28V22H18V28" fill="white" />
              <path d="M14 8C14 8 10 10 11 14C12 17 17 15 17 15C17 15 19 12 18 9C17 7 14 8 14 8Z" fill="#10B981" />
            </svg>
          </div>
        );

      case 'kawal-bansos':
        return (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#F3E8FF] border border-[#E9D5FF] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
            <svg width="30" height="30" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Official Transparency Shield */}
              <path d="M18 6L28 10.5V18C28 24.5 18 29.5 18 29.5C18 29.5 8 24.5 8 18V10.5L18 6Z" fill="#7E22CE" />
              {/* Validation Checkmark */}
              <path d="M13 18L17 22L24 14" stroke="#FDE047" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        );

      default:
        return (
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-slate-100 flex items-center justify-center">
            <span className="text-slate-600 font-bold">SG</span>
          </div>
        );
    }
  };

  const getCleanLabel = (name: string) => {
    switch (name) {
      case 'Jalan Jalan Sosial': return 'Jalan Jalan';
      case 'Teman Sosial': return 'Teman Sosial';
      case 'Modal Sosial': return 'Modal Sosial';
      case 'Kampung Sosial': return 'Kampung Sosial';
      case 'Kawal Bansos': return 'Kawal Bansos';
      default: return name;
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-10">
      
      {/* Section Header Matching Sapawarga 'Layanan Favorit' */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <ThumbsUp className="w-5 h-5 text-slate-800 fill-slate-800/10" />
          <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
            Program Si-Graduasi
          </h2>
        </div>

        <button 
          onClick={onManagePrograms}
          className="text-xs sm:text-sm font-semibold text-[#008444] hover:text-emerald-700 transition-colors"
        >
          Kelola Program
        </button>
      </div>

      {/* 5 Program Icons Grid (Full width on Laptop, fluid on mobile) */}
      <div className="grid grid-cols-5 gap-2 sm:gap-6 py-2">
        {programs.map((prog) => (
          <button
            key={prog.id}
            onClick={() => onSelectProgram(prog)}
            className="flex flex-col items-center text-center group focus:outline-none cursor-pointer"
            aria-label={`Buka program ${prog.name}`}
          >
            {/* Circular Custom Logo Container */}
            {renderCustomLogo(prog.id)}

            {/* Program Name Label (Responsive, No Truncation Failure) */}
            <span className="text-[10px] sm:text-xs font-semibold text-slate-800 mt-1.5 sm:mt-2.5 tracking-tight group-hover:text-[#008444] transition-colors leading-tight text-center max-w-[68px] sm:max-w-none">
              {getCleanLabel(prog.name)}
            </span>
          </button>
        ))}
      </div>

      {/* Sub-Notice Info Box */}
      <div className="mt-5 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-[11px] sm:text-xs text-slate-600 flex items-center justify-between">
        <span className="line-clamp-1">
          Kelima program di atas siap diintegrasikan penuh ke dalam modul mini-app Sapawarga.
        </span>
        <span className="font-semibold text-[#008444] shrink-0 ml-2 hidden sm:inline">
          Dinas Sosial Jabar
        </span>
      </div>

    </section>
  );
};
