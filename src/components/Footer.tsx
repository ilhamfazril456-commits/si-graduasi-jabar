import React from 'react';
import type { ActiveTab } from '../types';
import { ShieldCheck, Lock, Award, Heart } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 pb-20 lg:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand & Identity */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2 text-white font-bold text-base">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>Si-Graduasi</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Sistem Informasi Keterpaduan Graduasi Kesejahteraan Sosial. Dikembangkan sebagai proyek inovasi Praktik Kerja Lapangan (PKL) terintegrasi dengan 5 pilar program sosial, berkinerja tinggi, dan lulus standar audit Diskominfo.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-medium">
              <Lock className="w-3.5 h-3.5" />
              <span>Kepatuhan UU Perlindungan Data Pribadi (UU PDP No. 27/2022)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              5 Program Sosial
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <button onClick={() => setActiveTab('programs')} className="hover:text-emerald-400 transition-colors">
                  1. Jalan Jalan Sosial
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('programs')} className="hover:text-emerald-400 transition-colors">
                  2. Teman Sosial
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('programs')} className="hover:text-emerald-400 transition-colors">
                  3. Modal Sosial
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('programs')} className="hover:text-emerald-400 transition-colors">
                  4. Kampung Sosial
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('kawal-bansos')} className="hover:text-emerald-400 transition-colors">
                  5. Kawal Bansos
                </button>
              </li>
            </ul>
          </div>

          {/* Verification & Compliance */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Pusat Verifikasi
            </h4>
            <ul className="space-y-1.5 text-slate-400">
              <li>
                <button onClick={() => setActiveTab('cek-graduasi')} className="hover:text-emerald-400 transition-colors">
                  Simulasi Cek Graduasi KPM
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('audit-diskominfo')} className="hover:text-emerald-400 transition-colors">
                  Matriks 8 Kepatuhan Diskominfo
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('audit-diskominfo')} className="hover:text-emerald-400 transition-colors">
                  Log Audit Digital Forensik
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('kawal-bansos')} className="hover:text-emerald-400 transition-colors">
                  Saluran Pengaduan Whistleblower
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright & Academic Statement */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © 2026 Si-Graduasi · Proyek Inovasi PKL Dinas Sosial & Diskominfo.
          </div>
          <div className="flex items-center gap-1">
            <span>Dukungan Multi-Perangkat: Responsive Web & PWA</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
