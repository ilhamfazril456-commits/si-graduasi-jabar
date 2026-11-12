import React, { useState } from 'react';
import { PROGRAMS_DATA } from '../data/programsData';
import type { ProgramItem } from '../types';
import { 
  Layers, 
  ArrowRight, 
  Footprints, 
  Users, 
  Briefcase, 
  Home, 
  ShieldCheck, 
  Info,
  Clock
} from 'lucide-react';
import { ProgramDetailModal } from './ProgramDetailModal';

interface ProgramsSectionProps {
  onLogAction: (action: string, module: string, details: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onLogAction }) => {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<'all' | 'field' | 'economy' | 'oversight'>('all');

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'Footprints': return <Footprints className="w-5 h-5 text-emerald-400" />;
      case 'Users': return <Users className="w-5 h-5 text-teal-400" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-amber-400" />;
      case 'Home': return <Home className="w-5 h-5 text-sky-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
      default: return <Layers className="w-5 h-5 text-emerald-400" />;
    }
  };

  const filteredPrograms = PROGRAMS_DATA.filter((prog) => {
    if (filterCategory === 'field') return prog.id === 'jalan-jalan-sosial' || prog.id === 'teman-sosial';
    if (filterCategory === 'economy') return prog.id === 'modal-sosial' || prog.id === 'kampung-sosial';
    if (filterCategory === 'oversight') return prog.id === 'kawal-bansos';
    return true;
  });

  const handleOpenDetail = (program: ProgramItem) => {
    setSelectedProgram(program);
    onLogAction(
      'VIEW_PROGRAM_SPEC',
      program.name,
      `Membuka cangkang spesifikasi teknis untuk: ${program.name}`
    );
  };

  return (
    <section className="py-12 sm:py-16 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2 uppercase tracking-wider">
              <span>Arsitektur Modul</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>5 Program Kunci</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Cangkang 5 Program Unggulan Si-Graduasi
            </h2>
            <p className="mt-2 text-sm text-slate-300 max-w-2xl leading-relaxed">
              Struktur antarmuka dan ruang lingkup komprehensif yang siap diintegrasikan. Konten teknis dikosongkan sementara sebagai cangkang siap isi sesuai arahan pembimbing PKL.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div className="flex items-center gap-1 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                filterCategory === 'all'
                  ? 'bg-emerald-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Semua Program (5)
            </button>
            <button
              onClick={() => setFilterCategory('field')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                filterCategory === 'field'
                  ? 'bg-emerald-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Pendampingan
            </button>
            <button
              onClick={() => setFilterCategory('economy')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                filterCategory === 'economy'
                  ? 'bg-emerald-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Ekonomi
            </button>
            <button
              onClick={() => setFilterCategory('oversight')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                filterCategory === 'oversight'
                  ? 'bg-emerald-600 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Pengawasan
            </button>
          </div>
        </div>

        {/* 5 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="group relative rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700/90 p-6 flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-emerald-950/20"
            >
              <div className="space-y-4">
                
                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center">
                    {getProgramIcon(program.iconName)}
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-400">
                    {program.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {program.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {program.subtitle}
                  </p>
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {program.summary}
                </p>

                {/* 4 Pillars Preview */}
                <div className="pt-2 border-t border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-400 mb-2">
                    4 Pilar Utama:
                  </div>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {program.pillars.slice(0, 3).map((pillar, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="truncate">{pillar.title}</span>
                      </li>
                    ))}
                    {program.pillars.length > 3 && (
                      <li className="text-[11px] text-slate-500 pl-3">
                        + {program.pillars.length - 3} pilar lainnya
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Action & Notice */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[10px] text-amber-300/90 font-medium">
                  <Clock className="w-3 h-3 text-amber-400 shrink-0" />
                  <span className="truncate max-w-[130px]">Fase Rancang Bangun</span>
                </div>

                <button
                  onClick={() => handleOpenDetail(program)}
                  aria-label={`Buka Ruang Lingkup ${program.name}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Buka Ruang Lingkup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global PKL Notice Box */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
          <Info className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white block font-semibold mb-0.5">
              Pemberitahuan Tim PKL:
            </strong>
            Kelima program di atas telah disediakan arsitektur data, komponen visual, dan formulir catatan diskusinya. Sesuai instruksi Anda, isi modul sengaja dibiarkan berstatus cangkang siap tempel agar Anda dapat mendiskusikannya terlebih dahulu bersama pembimbing di Dinas Sosial.
          </div>
        </div>

      </div>

      {/* Detail Modal */}
      <ProgramDetailModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onLogAction={onLogAction}
      />
    </section>
  );
};
