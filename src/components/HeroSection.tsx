import React from 'react';
import type { ActiveTab, UserRole } from '../types';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Lock, 
  Sparkles,
  TrendingUp,
  Award,
  Users2
} from 'lucide-react';

interface HeroSectionProps {
  userRole: UserRole;
  setActiveTab: (tab: ActiveTab) => void;
  onLogAction: (action: string, module: string, details: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  userRole,
  setActiveTab,
  onLogAction,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-8 pb-16 lg:pt-14 lg:pb-20 border-b border-slate-800">
      
      {/* Subtle GovTech atmospheric background lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unboxed Metadata & Category Header */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400 mb-4">
          <span className="text-emerald-400 font-semibold tracking-wide">PEMERINTAH DAERAH</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>DINAS SOSIAL</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>SISTEM INFORMASI GRADUASI TERPADU</span>
        </div>

        {/* Hero Title & Description Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
              Akselerasi Kemandirian KPM Melalui <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">Si-Graduasi</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Platform keterpaduan 5 program graduasi kesejahteraan sosial untuk mendampingi keluarga pra-sejahtera bertransformasi menjadi mandiri, berdaya, dan terlindungi dengan standar keamanan SPBE & audit Diskominfo.
            </p>

            {/* Role Badge Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300">
              <span className="text-slate-400">Mode Akses Saat Ini:</span>
              <strong className="text-emerald-400 font-semibold">
                {userRole === 'petugas' ? 'Petugas Dinas Sosial (Otoritas Penuh)' : 'Masyarakat Umum (Transparansi Publik)'}
              </strong>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  setActiveTab('programs');
                  onLogAction('HERO_CTA', '5 Program', 'Menjelajahi cangkang 5 program sosial');
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-semibold text-sm text-white shadow-lg shadow-emerald-950/50 transition-all active:scale-95"
              >
                <Layers className="w-4 h-4" />
                <span>Jelajahi 5 Program Sosial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setActiveTab('cek-graduasi');
                  onLogAction('HERO_CTA', 'Cek Graduasi', 'Membuka kalkulator & simulasi cek graduasi');
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 font-semibold text-sm text-slate-200 border border-slate-700 transition-all active:scale-95"
              >
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Simulasi Cek Graduasi</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('audit-diskominfo');
                  onLogAction('HERO_CTA', 'Audit Diskominfo', 'Melihat panel kepatuhan keamanan Diskominfo');
                }}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors"
              >
                <Lock className="w-4 h-4 text-amber-400" />
                <span>Panel Kesiapan Diskominfo</span>
              </button>
            </div>
          </div>

          {/* Right Column: GovTech Credential & Security Card */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 border border-slate-700/80 p-5 sm:p-6 shadow-xl backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700/60">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-900/60 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                    Kepatuhan SPBE
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400">100% READY</span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span>Enkripsi Lalu Lintas</span>
                  <span className="font-mono text-emerald-400 font-medium">TLS 1.3 / HTTPS</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Masking NIK & KK</span>
                  <span className="font-mono text-emerald-400 font-medium">UU PDP No. 27/2022</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Audit Trail Digital</span>
                  <span className="font-mono text-emerald-400 font-medium">Active Logger</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Format Antarmuka</span>
                  <span className="font-mono text-emerald-400 font-medium">Responsive + PWA</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700/60 text-[11px] text-slate-400 leading-normal">
                Sistem dirancang siap uji penetrasi Diskominfo serta mendukung penginstalan langsung di smartphone Android, iOS, maupun laptop penguji.
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI Summary Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-10 pt-8 border-t border-slate-800/80">
          
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Program Terpadu</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              5
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Cangkang siap isi modul</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
              <Users2 className="w-4 h-4 text-teal-400" />
              <span>Target Graduasi</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              1.250+
            </div>
            <p className="text-[11px] text-slate-400 mt-1">KPM Mandiri / Tahun</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Audit Kesiapan</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
              8 / 8
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Indikator Diskominfo Lulus</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Dukungan Perangkat</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
              100%
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Smartphone & Laptop (PWA)</p>
          </div>

        </div>

      </div>
    </section>
  );
};
