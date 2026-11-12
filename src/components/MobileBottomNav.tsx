import React from 'react';
import type { ActiveTab } from '../types';
import { 
  Home, 
  Layers, 
  GraduationCap, 
  ShieldAlert, 
  FileCheck2 
} from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onLogAction: (action: string, module: string, details: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  setActiveTab,
  onLogAction,
}) => {
  const tabs: { id: ActiveTab; label: string; icon: React.ReactNode }[] = [
    { id: 'beranda', label: 'Beranda', icon: <Home className="w-5 h-5" /> },
    { id: 'programs', label: '5 Program', icon: <Layers className="w-5 h-5" /> },
    { id: 'cek-graduasi', label: 'Graduasi', icon: <GraduationCap className="w-5 h-5" /> },
    { id: 'kawal-bansos', label: 'Kawal Bansos', icon: <ShieldAlert className="w-5 h-5" /> },
    { id: 'audit-diskominfo', label: 'Audit', icon: <FileCheck2 className="w-5 h-5" /> },
  ];

  return (
    <nav 
      aria-label="Navigasi Bawah Seluler"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 pb-safe transition-all shadow-lg"
    >
      <div className="grid grid-cols-5 items-center h-16 max-w-lg mx-auto px-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                onLogAction('MOBILE_NAV', tab.label, `Navigasi seluler ke tab: ${tab.label}`);
              }}
              className={`flex flex-col items-center justify-center min-h-[44px] min-w-[44px] py-1 px-1 rounded-xl transition-all ${
                isActive
                  ? 'text-emerald-400 font-semibold scale-105'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              aria-label={`Menu ${tab.label}`}
            >
              <div className="relative">
                {tab.icon}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full" />
                )}
              </div>
              <span className="text-[10px] mt-1 leading-none tracking-tight truncate max-w-[64px]">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
