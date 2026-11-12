import React from 'react';
import { Bell, User } from 'lucide-react';

export const DesktopHeader: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-slate-200 px-6 py-3.5 flex items-center justify-between shrink-0 shadow-2xs">
      
      {/* Left: Brand & Tagline */}
      <div className="flex items-center gap-3.5">
        <div className="w-10 h-10 flex items-center justify-center shrink-0">
          <img 
            src="/assets/logos/si-graduasi-logo.png" 
            alt="Logo Resmi Si-Graduasi Jawa Barat" 
            className="w-full h-full object-contain [image-rendering:-webkit-optimize-contrast]"
          />
        </div>
        <div>
          <h1 className="text-xl font-extrabold tracking-tight text-slate-900 leading-tight">
            SI GRADUASI JABAR
          </h1>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            Sistem Informasi Integrasi Intervensi Sosial & Graduasi Keluarga Jawa Barat
          </p>
        </div>
      </div>

      {/* Right: SADAJABAR Badge, User Profile, Notification */}
      <div className="flex items-center gap-4">
        
        {/* SADAJABAR Sync Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
          <span className="w-2 h-2 rounded-full bg-[#008444] animate-pulse" />
          <span>Sinkronisasi SADAJABAR: <strong className="text-[#008444]">Aktif</strong></span>
        </div>

        <div className="h-6 w-px bg-slate-200" />

        {/* User Profile */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center font-bold text-xs shrink-0">
            <User className="w-4 h-4 text-slate-600" />
          </div>
          <div className="text-left text-xs leading-tight">
            <span className="font-bold text-slate-800 block">Admin Jabar</span>
            <span className="text-[10px] text-slate-400 block">Dinsos Provinsi Jabar</span>
          </div>
        </div>

        {/* Bell Icon */}
        <button 
          className="relative p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Notifikasi"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500" />
        </button>

      </div>

    </header>
  );
};
