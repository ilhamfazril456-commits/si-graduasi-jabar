import React from 'react';
import type { ProgramItem } from '../types';
import { 
  ChevronRight, 
  Layers, 
  Compass, 
  HeartHandshake, 
  TrendingUp, 
  Building2, 
  ShieldCheck 
} from 'lucide-react';

interface ProgramsListProps {
  programs: ProgramItem[];
  onSelectProgram: (program: ProgramItem) => void;
}

export const ProgramsList: React.FC<ProgramsListProps> = ({
  programs,
  onSelectProgram,
}) => {
  const getProgramIcon = (id: string) => {
    switch (id) {
      case 'jalan-jalan-sosial':
        return (
          <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 text-[#008444] shadow-2xs group-hover:bg-[#008444] group-hover:text-white transition-colors">
            <Compass className="w-6 h-6 stroke-[1.8]" />
          </div>
        );
      case 'teman-sosial':
        return (
          <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0 text-teal-700 shadow-2xs group-hover:bg-teal-700 group-hover:text-white transition-colors">
            <HeartHandshake className="w-6 h-6 stroke-[1.8]" />
          </div>
        );
      case 'modal-sosial':
        return (
          <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center shrink-0 text-amber-700 shadow-2xs group-hover:bg-amber-600 group-hover:text-white transition-colors">
            <TrendingUp className="w-6 h-6 stroke-[1.8]" />
          </div>
        );
      case 'kampung-sosial':
        return (
          <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center shrink-0 text-sky-700 shadow-2xs group-hover:bg-sky-600 group-hover:text-white transition-colors">
            <Building2 className="w-6 h-6 stroke-[1.8]" />
          </div>
        );
      case 'kawal-bansos':
        return (
          <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 text-indigo-700 shadow-2xs group-hover:bg-indigo-600 group-hover:text-white transition-colors">
            <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
          </div>
        );
      default:
        return (
          <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 text-slate-700 shadow-2xs">
            <Layers className="w-6 h-6 stroke-[1.8]" />
          </div>
        );
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-5">
      
      {/* Section Header: Clean 'Program Si-Graduasi' and 'Pilih Program Untuk Melihat', no capsules */}
      <div className="mb-3 pb-2 border-b border-slate-200">
        <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
          <Layers className="w-5 h-5 text-[#008444]" />
          Program Si-Graduasi
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          Pilih Program Untuk Melihat
        </p>
      </div>

      {/* Program List */}
      <div className="space-y-2.5">
        {programs.map((program) => (
          <div
            key={program.id}
            onClick={() => onSelectProgram(program)}
            className="w-full p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-[#008444] hover:shadow-xs transition-all cursor-pointer flex items-center justify-between gap-3 group"
            role="button"
            tabIndex={0}
            aria-label={`Buka program ${program.name}`}
          >
            <div className="flex items-center gap-3.5 min-w-0">
              
              {/* Official Program Logo Thumbnail (Rectangular, Ultra-Sharp & Clear) */}
              <div className={`w-16 h-13 sm:w-20 sm:h-14 rounded-xl bg-white border border-slate-200/90 flex items-center justify-center shrink-0 shadow-2xs group-hover:border-[#008444] transition-all overflow-hidden ${
                program.id === 'kawal-bansos' ? 'p-1.5' : 'p-1'
              }`}>
                {program.logoUrl ? (
                  <img
                    src={program.logoUrl}
                    alt={program.name}
                    className={`max-h-full max-w-full object-contain [image-rendering:-webkit-optimize-contrast] ${
                      program.id === 'kawal-bansos' ? 'scale-90' : ''
                    }`}
                    loading="lazy"
                  />
                ) : (
                  getProgramIcon(program.id)
                )}
              </div>

              {/* Title & Short Non-Truncating Subtitle */}
              <div className="min-w-0">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#008444] transition-colors leading-snug">
                  {program.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-tight">
                  {program.subtitle}
                </p>
              </div>

            </div>

            {/* Clean Chevron Indicator */}
            <div className="w-7 h-7 rounded-full text-slate-400 group-hover:text-[#008444] flex items-center justify-center shrink-0 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};
