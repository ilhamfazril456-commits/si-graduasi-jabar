import React from 'react';
import type { OfficialModuleId } from '../types';
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
  FileText,
  ChevronRight,
  Layers
} from 'lucide-react';

interface MobileModulesSectionProps {
  onSelectModule: (moduleId: OfficialModuleId) => void;
}

export const MobileModulesSection: React.FC<MobileModulesSectionProps> = ({
  onSelectModule,
}) => {
  const modulesList: Array<{
    id: OfficialModuleId;
    num: string;
    title: string;
    desc: string;
    icon: React.ReactNode;
    color: string;
  }> = [
    {
      id: 'dashboard',
      num: '01',
      title: 'Dashboard Eksekutif',
      desc: 'Ringkasan KPI & Wilayah',
      icon: <LayoutDashboard className="w-4 h-4 text-emerald-600" />,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    },
    {
      id: 'pemetaan-survei',
      num: '02',
      title: 'Pemetaan & Survei',
      desc: 'Desa Prioritas & Potensi',
      icon: <MapPin className="w-4 h-4 text-emerald-600" />,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    },
    {
      id: 'data-sasaran',
      num: '03',
      title: 'Data Sasaran & PPKS',
      desc: 'Basis Data NIK & KK',
      icon: <Users className="w-4 h-4 text-blue-600" />,
      color: 'bg-blue-50 text-blue-700 border-blue-100',
    },
    {
      id: 'perencanaan',
      num: '04',
      title: 'Perencanaan',
      desc: 'Rencana 5 Program',
      icon: <CalendarCheck className="w-4 h-4 text-indigo-600" />,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    },
    {
      id: 'realisasi',
      num: '05',
      title: 'Pelaksanaan & Realisasi',
      desc: 'Penyaluran di Lapangan',
      icon: <CheckCircle className="w-4 h-4 text-teal-600" />,
      color: 'bg-teal-50 text-teal-700 border-teal-100',
    },
    {
      id: 'kasus-rujukan',
      num: '06',
      title: 'Manajemen Kasus',
      desc: 'Teman Sosial & Rujukan',
      icon: <Briefcase className="w-4 h-4 text-amber-600" />,
      color: 'bg-amber-50 text-amber-700 border-amber-100',
    },
    {
      id: 'riwayat',
      num: '07',
      title: 'Riwayat Intervensi',
      desc: 'Rekam Jejak per KK',
      icon: <History className="w-4 h-4 text-cyan-600" />,
      color: 'bg-cyan-50 text-cyan-700 border-cyan-100',
    },
    {
      id: 'monev',
      num: '08',
      title: 'Monitoring & Evaluasi',
      desc: 'Pemantauan Outcome',
      icon: <Activity className="w-4 h-4 text-purple-600" />,
      color: 'bg-purple-50 text-purple-700 border-purple-100',
    },
    {
      id: 'evaluasi-graduasi',
      num: '09',
      title: 'Evaluasi & Graduasi',
      desc: 'Verifikasi Mandiri',
      icon: <GraduationCap className="w-4 h-4 text-emerald-600" />,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    },
    {
      id: 'laporan',
      num: '10',
      title: 'Laporan Eksekutif',
      desc: 'Rekapitulasi Otomatis',
      icon: <FileText className="w-4 h-4 text-slate-700" />,
      color: 'bg-slate-100 text-slate-700 border-slate-200',
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 my-5">
      {/* Section Header */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center justify-center text-[#008444]">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900 tracking-tight">
              10 Modul Operasional Si-Graduasi
            </h2>
            <p className="text-[11px] text-slate-500">
              Sesuai Bab IV Rancangan Resmi Dinsos Jabar
            </p>
          </div>
        </div>
        <span className="text-[10px] font-bold text-[#008444] bg-emerald-50/80 px-2 py-0.5 rounded-md border border-emerald-100">
          10 Modul
        </span>
      </div>

      {/* Grid of 10 Modules (2 columns on mobile, 5 on tablet) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
        {modulesList.map((m) => (
          <button
            key={m.id}
            onClick={() => onSelectModule(m.id)}
            className="group relative p-3 rounded-xl bg-white border border-slate-200/90 hover:border-[#008444] shadow-2xs hover:shadow-xs transition-all text-left flex flex-col justify-between active:scale-[0.98] cursor-pointer"
          >
            <div>
              {/* Top Row: Number Badge and Icon */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#008444] transition-colors">
                  {m.num}
                </span>
                <div className={`w-7 h-7 rounded-lg border flex items-center justify-center transition-colors ${m.color}`}>
                  {m.icon}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xs font-bold text-slate-800 group-hover:text-[#008444] transition-colors line-clamp-2 min-h-[30px] leading-tight">
                {m.title}
              </h3>
              <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                {m.desc}
              </p>
            </div>

            {/* Bottom Action Link */}
            <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-semibold text-slate-500 group-hover:text-[#008444] transition-colors">
              <span>Buka</span>
              <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};
