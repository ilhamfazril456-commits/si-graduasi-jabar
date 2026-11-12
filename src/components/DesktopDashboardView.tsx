import React, { useState } from 'react';
import { MetricCardsRow } from './MetricCardsRow';
import { Calendar, ChevronRight, ArrowLeft } from 'lucide-react';
import { PROGRAMS_DATA } from '../data/programsData';

interface DesktopDashboardViewProps {
  onSelectProgramDetail?: (programId: string) => void;
  onBack?: () => void;
}

export const DesktopDashboardView: React.FC<DesktopDashboardViewProps> = ({
  onSelectProgramDetail,
  onBack,
}) => {
  const [selectedKab, setSelectedKab] = useState('Semua');
  const [selectedKec, setSelectedKec] = useState('Semua');
  const [selectedPeriod, setSelectedPeriod] = useState('Tahun 2026');
  const [selectedPola, setSelectedPola] = useState('Semua Pola');
  const [selectedStatusGraduasi, setSelectedStatusGraduasi] = useState('Semua Status');

  // Chart data matching the screenshot 1794458053516_762ad2f2.jpg
  const chartPrograms = [
    {
      id: 'kampung-sosial',
      name: 'Kampung Sosial',
      logoUrl: '/assets/logos/kampung-sosial.jpg',
      outputVal: 340,
      outputLabel: '142',
      outcomeVal: 280,
      outcomeLabel: '1.692',
    },
    {
      id: 'teman-sosial',
      name: 'Teman Sosial',
      logoUrl: '/assets/logos/teman-sosial.jpg',
      outputVal: 310,
      outputLabel: '18.450',
      outcomeVal: 220,
      outcomeLabel: '2.427',
    },
    {
      id: 'kawal-bansos',
      name: 'Kawal Bansos',
      logoUrl: '/assets/logos/kawal-bansos.jpg',
      outputVal: 330,
      outputLabel: '32.890',
      outcomeVal: 270,
      outcomeLabel: '1.639',
    },
    {
      id: 'jalan-jalan-sosial',
      name: 'Jalan-Jalan Sosial',
      logoUrl: '/assets/logos/jalan-jalan-sosial.jpg',
      outputVal: 320,
      outputLabel: '11.240',
      outcomeVal: 260,
      outcomeLabel: '1.285',
    },
    {
      id: 'modal-sosial',
      name: 'Modal Sosial',
      logoUrl: '/assets/logos/modal-sosial.jpg',
      outputVal: 345,
      outputLabel: '2.150',
      outcomeVal: 200,
      outcomeLabel: '706',
    },
  ];

  // Top graduation regions matching screenshot
  const topRegions = [
    { name: 'Kab. Bandung Barat', achieved: 215, target: 500 },
    { name: 'Kab. Garut', achieved: 195, target: 500 },
    { name: 'Kab. Sukabumi', achieved: 198, target: 500 },
    { name: 'Kota Tasikmalaya', achieved: 215, target: 500 },
    { name: 'Kab. Cianjur', achieved: 195, target: 500 },
  ];

  return (
    <div className="w-full p-4 sm:p-6 pb-28 sm:pb-12 space-y-5 sm:space-y-6">
      
      {/* Optional Top Back Bar for Mobile / Fullscreen */}
      {onBack && (
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-slate-900">Dashboard Eksekutif</span>
            <span className="text-[10px] font-semibold text-[#008444] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
              SADAJABAR Terpadu
            </span>
          </div>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Beranda</span>
          </button>
        </div>
      )}

      {/* 1. Filter Bar Row */}
      <div className="flex items-center gap-4 text-xs font-semibold flex-wrap">
        
        {/* Kabupaten/Kota */}
        <div className="flex items-center gap-2">
          <span className="text-slate-700">Kabupaten/Kota:</span>
          <select
            value={selectedKab}
            onChange={(e) => setSelectedKab(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-2xs focus:outline-none focus:border-[#008444] cursor-pointer min-w-[140px]"
          >
            <option value="Semua">Semua</option>
            <option value="Kab. Bandung Barat">Kab. Bandung Barat</option>
            <option value="Kab. Bandung">Kab. Bandung</option>
            <option value="Kab. Garut">Kab. Garut</option>
            <option value="Kab. Sukabumi">Kab. Sukabumi</option>
            <option value="Kab. Cianjur">Kab. Cianjur</option>
            <option value="Kota Tasikmalaya">Kota Tasikmalaya</option>
          </select>
        </div>

        {/* Kecamatan */}
        <div className="flex items-center gap-2">
          <span className="text-slate-700">Kecamatan:</span>
          <select
            value={selectedKec}
            onChange={(e) => setSelectedKec(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-2xs focus:outline-none focus:border-[#008444] cursor-pointer min-w-[140px]"
          >
            <option value="Semua">Semua</option>
            <option value="Cililin">Cililin</option>
            <option value="Ciparay">Ciparay</option>
            <option value="Kadungora">Kadungora</option>
            <option value="Baleendah">Baleendah</option>
          </select>
        </div>

        {/* Periode */}
        <div className="flex items-center gap-2">
          <span className="text-slate-700">Periode:</span>
          <div className="relative">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="pl-8 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-2xs focus:outline-none focus:border-[#008444] cursor-pointer min-w-[150px]"
            >
              <option value="Tahun 2026">Tahun 2026</option>
              <option value="Semester 1 - 2026">Semester 1 - 2026</option>
              <option value="Semester 2 - 2026">Semester 2 - 2026</option>
            </select>
            <Calendar className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Pola Pelaksanaan (Bab VIII Dokumen Resmi) */}
        <div className="flex items-center gap-2">
          <span className="text-slate-700">Pola:</span>
          <select
            value={selectedPola}
            onChange={(e) => setSelectedPola(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-2xs focus:outline-none focus:border-[#008444] cursor-pointer min-w-[140px]"
          >
            <option value="Semua Pola">Semua Pola</option>
            <option value="Terpadu">Pola Terpadu</option>
            <option value="Mandiri">Pola Mandiri</option>
            <option value="Berkelanjutan">Pola Berkelanjutan</option>
          </select>
        </div>

        {/* Status Graduasi (Bab VII Dokumen Resmi) */}
        <div className="flex items-center gap-2">
          <span className="text-slate-700">Status:</span>
          <select
            value={selectedStatusGraduasi}
            onChange={(e) => setSelectedStatusGraduasi(e.target.value)}
            className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-2xs focus:outline-none focus:border-[#008444] cursor-pointer min-w-[150px]"
          >
            <option value="Semua Status">Semua Status</option>
            <option value="Pra-Sejahtera">Pra-Sejahtera</option>
            <option value="Berkembang">Berkembang</option>
            <option value="Kandidat Graduasi">Kandidat Graduasi</option>
            <option value="Terverifikasi Graduasi">Terverifikasi Graduasi</option>
          </select>
        </div>

      </div>

      {/* 2. Six Metric Cards Row (Row of 6) */}
      <MetricCardsRow isMobile={false} />

      {/* 3. Bottom Panels: Realisasi & Dampak (Left) and Status Graduasi (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Column (Full on mobile, 8 cols on desktop): Realisasi & Dampak Program Strategis */}
        <div className="w-full lg:col-span-8 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-slate-900 tracking-tight">
                Realisasi & Dampak Program Strategis
              </h2>

              {/* Chart Legend */}
              <div className="flex items-center gap-4 text-xs font-medium text-slate-600">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-[#008444]" />
                  <span>Output ( Target )</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-xs bg-[#0D6EFD]" />
                  <span>Outcome / Perubahan Kondisi</span>
                </div>
              </div>
            </div>

            {/* Custom Dual Bar Chart */}
            <div className="relative h-64 pt-6 pb-2 flex items-end justify-between px-4 border-b border-l border-slate-200">
              
              {/* Y Axis Guide Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[10px] text-slate-400 font-mono">
                <div className="border-b border-slate-100 flex items-center justify-between pr-2">
                  <span>400</span>
                </div>
                <div className="border-b border-slate-100 flex items-center justify-between pr-2">
                  <span>300</span>
                </div>
                <div className="border-b border-slate-100 flex items-center justify-between pr-2">
                  <span>200</span>
                </div>
                <div className="border-b border-slate-100 flex items-center justify-between pr-2">
                  <span>100</span>
                </div>
                <div className="flex items-center justify-between pr-2">
                  <span>0</span>
                </div>
              </div>

              {/* Program Bars */}
              {chartPrograms.map((prog) => (
                <div 
                  key={prog.id}
                  onClick={() => onSelectProgramDetail && onSelectProgramDetail(prog.id)}
                  className="relative z-10 flex flex-col items-center gap-1.5 h-full justify-end cursor-pointer group"
                  title={`Klik untuk melihat detail ${prog.name}`}
                >
                  <div className="flex items-end gap-1.5 h-full pb-1">
                    
                    {/* Green Bar (Output) */}
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] font-bold text-slate-700 font-mono mb-1 group-hover:text-[#008444]">
                        {prog.outputLabel}
                      </span>
                      <div 
                        className="w-8 sm:w-10 rounded-t-sm bg-[#008444] group-hover:brightness-110 transition-all shadow-xs"
                        style={{ height: `${(prog.outputVal / 400) * 190}px` }}
                      />
                    </div>

                    {/* Blue Bar (Outcome) */}
                    <div className="flex flex-col items-center">
                      <span className="text-[10px] font-bold text-slate-700 font-mono mb-1 group-hover:text-[#0D6EFD]">
                        {prog.outcomeLabel}
                      </span>
                      <div 
                        className="w-8 sm:w-10 rounded-t-sm bg-[#0D6EFD] group-hover:brightness-110 transition-all shadow-xs"
                        style={{ height: `${(prog.outcomeVal / 400) * 190}px` }}
                      />
                    </div>

                  </div>

                  {/* Program Logo & Label on X Axis */}
                  <div className="flex flex-col items-center gap-1 mt-2">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/90 p-0.5 flex items-center justify-center shrink-0 shadow-2xs group-hover:border-[#008444]">
                      <img src={prog.logoUrl} alt={prog.name} className="max-h-full max-w-full object-contain [image-rendering:-webkit-optimize-contrast]" />
                    </div>
                    <span className="text-xs font-bold text-slate-700 group-hover:text-[#008444] transition-colors text-center max-w-[95px] leading-tight">
                      {prog.name}
                    </span>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Sub legend footer */}
          <div className="flex items-center justify-center gap-6 pt-4 text-xs font-semibold text-slate-600">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#008444]" />
              Output / Kegiatan
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0D6EFD]" />
              Outcome / Perubahan Kondisi
            </span>
          </div>

        </div>

        {/* Right Column (Full on mobile, 4 cols on desktop): Status Graduasi Wilayah Terbanyak */}
        <div className="w-full lg:col-span-4 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
          
          <div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight mb-5">
              Status Graduasi Wilayah Terbanyak
            </h2>

            <div className="space-y-4">
              {topRegions.map((reg, idx) => {
                const pct = Math.round((reg.achieved / reg.target) * 100);
                return (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-800">
                      <span>{reg.name}</span>
                      <span className="font-mono text-slate-900">
                        {reg.achieved} / {reg.target} KK
                      </span>
                    </div>

                    {/* Progress Bar with Green Fill matching screenshot */}
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                      <div 
                        className="h-full bg-[#008444] rounded-full transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 text-right">
            <span className="text-[11px] text-slate-400 font-medium">
              Data Terintegrasi SADAJABAR · Real-time
            </span>
          </div>

        </div>

      </div>

      {/* 4. Showcase 5 Program Si-Graduasi (Grid 5 Kolom Seimbang dengan Logo Resmi) */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight">
              Program Si-Graduasi Jawa Barat
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Pilar operasional terintegrasi lintas bidang Dinas Sosial Provinsi Jawa Barat
            </p>
          </div>
          <span className="text-xs font-semibold text-[#008444] bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200">
            Dinas Sosial Provinsi Jawa Barat
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {PROGRAMS_DATA.map((prog) => (
            <div
              key={prog.id}
              onClick={() => onSelectProgramDetail && onSelectProgramDetail(prog.id)}
              className="p-4 rounded-xl bg-slate-50/60 hover:bg-white border border-slate-200 hover:border-[#008444] shadow-2xs hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between group"
              role="button"
              tabIndex={0}
              aria-label={`Buka detail ${prog.name}`}
            >
              <div>
                {/* Official Logo Container */}
                <div className="w-full h-24 rounded-lg bg-white border border-slate-200/80 p-2 flex items-center justify-center mb-3 shadow-2xs group-hover:border-[#008444]/40 transition-colors">
                  <img
                    src={prog.logoUrl}
                    alt={prog.name}
                    className="max-h-full max-w-full object-contain [image-rendering:-webkit-optimize-contrast]"
                    loading="lazy"
                  />
                </div>

                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#008444] transition-colors leading-snug">
                  {prog.name}
                </h3>
                
                <p className="text-[11px] font-semibold text-slate-600 mt-0.5 line-clamp-1">
                  {prog.subtitle}
                </p>

                <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                  {prog.bidang}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-[#008444]">
                <span>Buka Detail</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
