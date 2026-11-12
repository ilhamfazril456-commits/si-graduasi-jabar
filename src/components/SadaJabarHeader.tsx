import React from 'react';
import { Database, ShieldCheck } from 'lucide-react';

interface SadaJabarHeaderProps {
  onGoHome?: () => void;
}

export const SadaJabarHeader: React.FC<SadaJabarHeaderProps> = ({ onGoHome }) => {
  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-30 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        
        {/* Brand & Institution Info - Clean GovTech Identity */}
        <div 
          onClick={onGoHome}
          className="flex items-center gap-3 cursor-pointer group select-none"
          role="button"
          tabIndex={0}
          aria-label="Kembali ke Dashboard Utama Si-Graduasi"
        >
          {/* Official Emblem of Jawa Barat */}
          <div className="w-9 h-9 rounded-lg bg-[#008444] flex items-center justify-center text-white shrink-0 shadow-2xs">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 5V11C4 16.5 12 21 12 21C12 21 20 16.5 20 11V5L12 2Z" fill="#008444" stroke="#ffffff" strokeWidth="1.6" />
              <polygon points="12,6 18,9 12,12 6,9" fill="#FBBF24" />
              <path d="M9 11V14C9 15 15 15 15 14V11" stroke="#FBBF24" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>

          <div>
            <div className="flex items-baseline">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 group-hover:text-slate-800 transition-colors">
                SI GRADUASI
              </span>
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#008444] ml-1.5">
                Jabar
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden sm:block leading-none mt-0.5">
              Integrasi Intervensi Sosial & Graduasi Keluarga · SADAJABAR
            </p>
          </div>
        </div>

        {/* Right Info: SADAJABAR Data Hub & Dinsos Authority - Clean Unboxed Text (No Capsules) */}
        <div className="flex items-center gap-4 text-right">
          <div className="hidden md:flex flex-col text-xs text-slate-500">
            <span className="font-semibold text-slate-800 flex items-center justify-end gap-1">
              <Database className="w-3.5 h-3.5 text-[#008444]" />
              Terhubung SADAJABAR
            </span>
            <span className="text-[11px] text-slate-400">
              Dinas Sosial Provinsi Jawa Barat
            </span>
          </div>

          <div className="h-7 w-px bg-slate-200 hidden md:block" />

          {/* User Role Indicator - Clean & Functional */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#008444] font-bold text-xs">
              DS
            </div>
            <div className="text-left hidden lg:block">
              <p className="text-xs font-bold text-slate-800 leading-tight">
                Admin Dinsos Jabar
              </p>
              <p className="text-[10px] text-slate-400 leading-tight">
                Hak Akses: Pengelola Sistem
              </p>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
};
