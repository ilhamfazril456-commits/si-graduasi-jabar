import React from 'react';
import type { OfficialModuleId } from '../types';
import { OFFICIAL_MODULES_LIST } from '../data/officialData';
import { 
  LayoutDashboard, 
  MapPin, 
  Users, 
  CalendarCheck, 
  Activity, 
  HeartHandshake, 
  History, 
  BarChart3, 
  Award, 
  FileText 
} from 'lucide-react';

interface OfficialModuleNavigationProps {
  activeModule: OfficialModuleId;
  onSelectModule: (module: OfficialModuleId) => void;
}

export const OfficialModuleNavigation: React.FC<OfficialModuleNavigationProps> = ({
  activeModule,
  onSelectModule,
}) => {
  const getModuleIcon = (id: OfficialModuleId) => {
    switch (id) {
      case 'dashboard':
        return <LayoutDashboard className="w-4 h-4 shrink-0" />;
      case 'pemetaan-survei':
        return <MapPin className="w-4 h-4 shrink-0" />;
      case 'data-sasaran':
        return <Users className="w-4 h-4 shrink-0" />;
      case 'perencanaan':
        return <CalendarCheck className="w-4 h-4 shrink-0" />;
      case 'realisasi':
        return <Activity className="w-4 h-4 shrink-0" />;
      case 'kasus-rujukan':
        return <HeartHandshake className="w-4 h-4 shrink-0" />;
      case 'riwayat':
        return <History className="w-4 h-4 shrink-0" />;
      case 'monev':
        return <BarChart3 className="w-4 h-4 shrink-0" />;
      case 'evaluasi-graduasi':
        return <Award className="w-4 h-4 shrink-0" />;
      case 'laporan':
        return <FileText className="w-4 h-4 shrink-0" />;
      default:
        return <LayoutDashboard className="w-4 h-4 shrink-0" />;
    }
  };

  return (
    <nav className="w-full bg-white border-b border-slate-200 select-none overflow-x-auto no-scrollbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1 sm:gap-2">
        {OFFICIAL_MODULES_LIST.map((mod) => {
          const isActive = activeModule === mod.id;
          return (
            <button
              key={mod.id}
              onClick={() => onSelectModule(mod.id as OfficialModuleId)}
              className={`flex items-center gap-2 py-3 px-3 text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors border-b-2 cursor-pointer ${
                isActive
                  ? 'border-[#008444] text-[#008444] font-bold'
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
              aria-current={isActive ? 'page' : undefined}
            >
              {getModuleIcon(mod.id as OfficialModuleId)}
              <span>{mod.shortName}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
