import React from 'react';
import { Home, ClipboardList, Search, User } from 'lucide-react';

export type SapawargaNavTab = 'beranda' | 'survei-desa' | 'cek-sasaran' | 'profil';

interface SapawargaBottomNavProps {
  activeTab: SapawargaNavTab;
  setActiveTab: (tab: SapawargaNavTab) => void;
}

export const SapawargaBottomNav: React.FC<SapawargaBottomNavProps> = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <nav 
      aria-label="Navigasi Utama Si-Graduasi"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200/90 pb-safe shadow-[0_-4px_16px_rgba(0,0,0,0.04)]"
    >
      <div className="max-w-md md:max-w-xl mx-auto grid grid-cols-4 items-center h-16 px-2">
        
        {/* Tab 1: Beranda */}
        <button
          onClick={() => setActiveTab('beranda')}
          className="flex flex-col items-center justify-center min-h-[44px] py-1 cursor-pointer transition-colors"
          aria-label="Menu Beranda Si-Graduasi"
        >
          <Home 
            className={`w-5 h-5 transition-transform ${
              activeTab === 'beranda'
                ? 'text-[#008444] fill-[#008444]'
                : 'text-slate-500 hover:text-slate-800'
            }`} 
          />
          <span className={`text-[11px] font-semibold mt-1 tracking-tight ${
            activeTab === 'beranda' ? 'text-[#008444]' : 'text-slate-600'
          }`}>
            Beranda
          </span>
        </button>

        {/* Tab 2: Survei Desa (Option 1) */}
        <button
          onClick={() => setActiveTab('survei-desa')}
          className="flex flex-col items-center justify-center min-h-[44px] py-1 cursor-pointer transition-colors"
          aria-label="Menu Survei Desa"
        >
          <ClipboardList 
            className={`w-5 h-5 transition-transform ${
              activeTab === 'survei-desa'
                ? 'text-[#008444]'
                : 'text-slate-500 hover:text-slate-800'
            }`} 
          />
          <span className={`text-[11px] font-semibold mt-1 tracking-tight ${
            activeTab === 'survei-desa' ? 'text-[#008444]' : 'text-slate-600'
          }`}>
            Survei Desa
          </span>
        </button>

        {/* Tab 3: Cek Sasaran (Option 1) */}
        <button
          onClick={() => setActiveTab('cek-sasaran')}
          className="flex flex-col items-center justify-center min-h-[44px] py-1 cursor-pointer transition-colors"
          aria-label="Menu Cek Sasaran"
        >
          <Search 
            className={`w-5 h-5 transition-transform ${
              activeTab === 'cek-sasaran'
                ? 'text-[#008444] stroke-[2.5]'
                : 'text-slate-500 hover:text-slate-800'
            }`} 
          />
          <span className={`text-[11px] font-semibold mt-1 tracking-tight ${
            activeTab === 'cek-sasaran' ? 'text-[#008444]' : 'text-slate-600'
          }`}>
            Cek Sasaran
          </span>
        </button>

        {/* Tab 4: Profil */}
        <button
          onClick={() => setActiveTab('profil')}
          className="flex flex-col items-center justify-center min-h-[44px] py-1 cursor-pointer transition-colors"
          aria-label="Menu Profil Petugas"
        >
          <User 
            className={`w-5 h-5 transition-transform ${
              activeTab === 'profil'
                ? 'text-[#008444]'
                : 'text-slate-500 hover:text-slate-800'
            }`} 
          />
          <span className={`text-[11px] font-semibold mt-1 tracking-tight ${
            activeTab === 'profil' ? 'text-[#008444]' : 'text-slate-600'
          }`}>
            Profil
          </span>
        </button>

      </div>
    </nav>
  );
};
