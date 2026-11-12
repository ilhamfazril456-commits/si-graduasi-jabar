import React from 'react';
import { ChevronRight, ShieldCheck, User } from 'lucide-react';

interface SapawargaHeaderProps {
  onAccountClick?: () => void;
}

export const SapawargaHeader: React.FC<SapawargaHeaderProps> = ({ onAccountClick }) => {
  return (
    <header className="w-full bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        
        {/* Top Provincial Brand Row */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100/80">
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Provincial & Sapawarga Ribbon Logo Mark */}
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-[#008444] via-[#0068D9] to-[#FFB703] p-0.5 flex items-center justify-center shadow-xs">
              <div className="w-full h-full bg-white rounded-[7px] flex items-center justify-center">
                <span className="font-extrabold text-[#0068D9] text-xs tracking-tighter">SW</span>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-extrabold text-slate-900 tracking-tight">
                  Sapawarga
                </span>
                <span className="text-[10px] font-bold text-white bg-[#008444] px-1.5 py-0.2 rounded">
                  Jabar
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium">
                Dinas Sosial Provinsi Jawa Barat · Si-Graduasi
              </span>
            </div>
          </div>

          {/* Provincial Status Badges */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-[#008444] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
              <ShieldCheck className="w-3.5 h-3.5" />
              Layanan Resmi Jabar
            </span>
          </div>
        </div>

        {/* Belum Masuk Akun Card (Matches Sapawarga Screenshot Exactly) */}
        <div 
          onClick={onAccountClick}
          className="w-full p-3 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all flex items-center justify-between cursor-pointer group"
          role="button"
          tabIndex={0}
          aria-label="Masuk ke Akun Sapawarga"
        >
          <div className="flex items-center gap-3">
            {/* Official Sapawarga Stylized Ribbon Diamond Icon */}
            <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
              <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4L34 18L26 26L20 20L14 26L6 18L20 4Z" fill="#0068D9" />
                <path d="M20 36L6 22L14 14L20 20L26 14L34 22L20 36Z" fill="#008444" />
                <path d="M20 12L28 20L20 28L12 20L20 12Z" fill="#FFB703" />
              </svg>
            </div>

            <div>
              <h2 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#008444] transition-colors">
                Belum masuk akun?
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-tight">
                Nikmati semua layanan Sapawarga dengan masuk ke akun Anda!
              </p>
            </div>
          </div>

          <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-emerald-50 flex items-center justify-center text-slate-400 group-hover:text-[#008444] transition-all">
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>

      </div>
    </header>
  );
};
