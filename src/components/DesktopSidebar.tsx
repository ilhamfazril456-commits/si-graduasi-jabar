import React from 'react';
import { 
  LayoutDashboard, 
  MapPin, 
  Users, 
  CalendarCheck, 
  CheckCircle, 
  Briefcase, 
  History, 
  Activity, 
  GraduationCap, 
  FileText 
} from 'lucide-react';

import type { OfficialModuleId } from '../types';

export type DesktopNavId = OfficialModuleId;

interface DesktopSidebarProps {
  activeNav: DesktopNavId;
  onSelectNav: (nav: DesktopNavId) => void;
}

export const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
  activeNav,
  onSelectNav,
}) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard Eksekutif', icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: 'pemetaan-survei', label: 'Pemetaan & Survei Desa', icon: <MapPin className="w-4 h-4" /> },
    { id: 'data-sasaran', label: 'Data Sasaran & PPKS', icon: <Users className="w-4 h-4" /> },
    { id: 'perencanaan', label: 'Perencanaan Intervensi', icon: <CalendarCheck className="w-4 h-4" /> },
    { id: 'realisasi', label: 'Pelaksanaan & Realisasi', icon: <CheckCircle className="w-4 h-4" /> },
    { id: 'kasus-rujukan', label: 'Manajemen Kasus', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'riwayat', label: 'Riwayat Intervensi', icon: <History className="w-4 h-4" /> },
    { id: 'monev', label: 'Monitoring & Evaluasi', icon: <Activity className="w-4 h-4" /> },
    { id: 'evaluasi-graduasi', label: 'Evaluasi & Graduasi', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'laporan', label: 'Laporan', icon: <FileText className="w-4 h-4" /> },
  ];

  return (
    <aside className="w-64 bg-[#111C2D] text-slate-300 flex flex-col shrink-0 min-h-screen select-none">
      
      {/* Brand Header */}
      <div className="p-5 border-b border-slate-800/80 flex items-center gap-3">
        {/* West Java Emblem */}
        <div className="w-10 h-10 rounded-lg bg-[#008444] flex items-center justify-center text-white shrink-0 shadow-xs">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L4 5V11C4 16.5 12 21 12 21C12 21 20 16.5 20 11V5L12 2Z" fill="#008444" stroke="#ffffff" strokeWidth="1.6" />
            <polygon points="12,6 18,9 12,12 6,9" fill="#FBBF24" />
            <path d="M9 11V14C9 15 15 15 15 14V11" stroke="#FBBF24" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>

        <div>
          <span className="text-[10px] font-semibold text-slate-400 block tracking-wider uppercase">
            Pemerintah Provinsi Jawa Barat
          </span>
          <span className="text-sm font-extrabold text-white tracking-wide block">
            DINAS SOSIAL
          </span>
        </div>
      </div>

      {/* Nav Menu Items */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectNav(item.id as DesktopNavId)}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer text-left ${
                isActive
                  ? 'bg-[#008444] text-white shadow-xs'
                  : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              <span className={`shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`}>
                {item.icon}
              </span>
              <span className="truncate">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer Info */}
      <div className="p-4 border-t border-slate-800/80 text-[11px] text-slate-500">
        <span className="block font-semibold text-slate-400">SI-GRADUASI v2.6</span>
        <span className="block text-[10px]">Terintegrasi SADAJABAR</span>
      </div>

    </aside>
  );
};
