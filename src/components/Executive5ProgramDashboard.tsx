import React, { useState, useMemo } from 'react';
import type { ProgramId, ProgramItem } from '../types';
import { 
  OFFICIAL_DASHBOARD_KPIS, 
  OFFICIAL_5_PROGRAMS_SUMMARY, 
  OFFICIAL_REGIONAL_SUMMARIES 
} from '../data/officialData';
import { 
  Building, 
  Users, 
  Layers, 
  TrendingUp, 
  HeartHandshake, 
  Award, 
  ChevronRight, 
  Search, 
  CheckCircle2, 
  ArrowUpRight,
  Compass,
  Building2,
  ShieldCheck,
  Briefcase
} from 'lucide-react';

interface Executive5ProgramDashboardProps {
  onSelectProgram: (programId: ProgramId) => void;
  onNavigateModule: (moduleId: string) => void;
}

export const Executive5ProgramDashboard: React.FC<Executive5ProgramDashboardProps> = ({
  onSelectProgram,
  onNavigateModule,
}) => {
  const [selectedProgramFilter, setSelectedProgramFilter] = useState<string>('all');
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<string>('all');
  const [selectedPeriodFilter, setSelectedPeriodFilter] = useState<string>('2026-Q1');
  const [searchRegionQuery, setSearchRegionQuery] = useState<string>('');

  // 5 Program Icon Helper
  const getProgramIcon = (id: ProgramId) => {
    switch (id) {
      case 'kampung-sosial':
        return <Building2 className="w-5 h-5 text-[#008444]" />;
      case 'teman-sosial':
        return <HeartHandshake className="w-5 h-5 text-teal-700" />;
      case 'kawal-bansos':
        return <ShieldCheck className="w-5 h-5 text-indigo-700" />;
      case 'jalan-jalan-sosial':
        return <Compass className="w-5 h-5 text-sky-700" />;
      case 'modal-sosial':
        return <Briefcase className="w-5 h-5 text-amber-700" />;
      default:
        return <Layers className="w-5 h-5 text-[#008444]" />;
    }
  };

  // Filter regional summaries
  const filteredRegions = useMemo(() => {
    return OFFICIAL_REGIONAL_SUMMARIES.filter((reg) => {
      const matchSearch = reg.kabupatenKota.toLowerCase().includes(searchRegionQuery.toLowerCase());
      const matchRegion = selectedRegionFilter === 'all' || reg.kabupatenKota === selectedRegionFilter;
      return matchSearch && matchRegion;
    });
  }, [searchRegionQuery, selectedRegionFilter]);

  // Filter 5 programs list
  const filteredPrograms = useMemo(() => {
    if (selectedProgramFilter === 'all') {
      return OFFICIAL_5_PROGRAMS_SUMMARY;
    }
    return OFFICIAL_5_PROGRAMS_SUMMARY.filter((p) => p.id === selectedProgramFilter);
  }, [selectedProgramFilter]);

  // Compute dynamic KPI stats based on region filter
  const dynamicKPIs = useMemo(() => {
    if (selectedRegionFilter === 'all') {
      return OFFICIAL_DASHBOARD_KPIS;
    }
    const region = OFFICIAL_REGIONAL_SUMMARIES.find(r => r.kabupatenKota === selectedRegionFilter);
    if (!region) return OFFICIAL_DASHBOARD_KPIS;

    return {
      desaTerpetakan: region.desaTerpetakan,
      desaTotalTarget: 30,
      penerimaManfaatUnik: region.penerimaManfaat,
      totalIntervensi: region.intervensiBerjalan,
      pmBerkembangPositif: Math.round(region.penerimaManfaat * 0.65),
      pmBerkembangPersen: 65.0,
      kasusTertangani: region.kasusSelesai,
      kasusTotal: region.kasusSelesai + 4,
      keluargaGraduasi: region.keluargaGraduasi,
      keluargaGraduasiTarget: 100
    };
  }, [selectedRegionFilter]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* 1. Dashboard Header & Context Intro */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <div className="flex flex-wrap items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 font-medium">
            <span>SADAJABAR Portal</span>
            <span aria-hidden="true">·</span>
            <span>Dinas Sosial Jawa Barat</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#008444] font-semibold">TA 2026</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
            Dashboard Eksekutif SI-GRADUASI
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5 max-w-3xl leading-relaxed">
            Pemantauan integrasi intervensi 5 program strategis, pencatatan satu data kependudukan, serta evaluasi kemandirian keluarga Jawa Barat.
          </p>
        </div>

        {/* SADAJABAR Single Data Notice - Clean Typography (No Pills) */}
        <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-500 shrink-0">
          <span className="inline-block w-2 h-2 rounded-full bg-[#008444]" />
          <span>Satu Data Terpadu</span>
          <span aria-hidden="true">·</span>
          <span>UU PDP No. 27/2022</span>
        </div>
      </div>

      {/* 2. Filter Bar Berfungsi (Program, Wilayah, Periode) */}
      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          
          {/* Filter Program */}
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-slate-700">Program:</span>
            <select
              value={selectedProgramFilter}
              onChange={(e) => setSelectedProgramFilter(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 font-medium focus:outline-none focus:border-[#008444]"
            >
              <option value="all">Semua 5 Program</option>
              <option value="kampung-sosial">Kampung Sosial (Rehsos)</option>
              <option value="teman-sosial">Teman Sosial (Rehsos)</option>
              <option value="kawal-bansos">Kawal Bansos (PFM)</option>
              <option value="jalan-jalan-sosial">Jalan-Jalan Sosial (Linjamsos)</option>
              <option value="modal-sosial">Modal Sosial (Dayasos)</option>
            </select>
          </div>

          <div className="h-4 w-px bg-slate-200 hidden sm:block" />

          {/* Filter Wilayah Kabupaten/Kota */}
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-slate-700">Wilayah:</span>
            <select
              value={selectedRegionFilter}
              onChange={(e) => setSelectedRegionFilter(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 font-medium focus:outline-none focus:border-[#008444]"
            >
              <option value="all">Seluruh 27 Kab / Kota Jabar</option>
              {OFFICIAL_REGIONAL_SUMMARIES.map((r) => (
                <option key={r.kabupatenKota} value={r.kabupatenKota}>
                  {r.kabupatenKota}
                </option>
              ))}
            </select>
          </div>

          <div className="h-4 w-px bg-slate-200 hidden sm:block" />

          {/* Filter Periode */}
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-slate-700">Periode:</span>
            <select
              value={selectedPeriodFilter}
              onChange={(e) => setSelectedPeriodFilter(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 font-medium focus:outline-none focus:border-[#008444]"
            >
              <option value="2026-Q1">Triwulan I (Jan - Mar 2026)</option>
              <option value="2026-Q2">Triwulan II (Apr - Jun 2026)</option>
              <option value="2026-ALL">Tahun Penuh 2026</option>
            </select>
          </div>

        </div>

        {/* Reset Filter Button if active */}
        {(selectedProgramFilter !== 'all' || selectedRegionFilter !== 'all') && (
          <button
            onClick={() => {
              setSelectedProgramFilter('all');
              setSelectedRegionFilter('all');
            }}
            className="text-xs text-[#008444] hover:text-emerald-800 font-semibold cursor-pointer"
          >
            Reset Filter
          </button>
        )}
      </div>

      {/* 3. 6 Indikator Utama Dashboard (Bab VII.A Dokumen Resmi) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
        
        {/* KPI 1: Desa Terpetakan */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Desa Terpetakan
            </span>
            <Building className="w-4 h-4 text-[#008444]" />
          </div>
          <div className="text-2xl font-black text-slate-900 font-mono tabular-nums">
            {dynamicKPIs.desaTerpetakan.toLocaleString('id-ID')}
          </div>
          <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
            <span>Target: {dynamicKPIs.desaTotalTarget} Desa</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#008444] font-semibold">
              {Math.round((dynamicKPIs.desaTerpetakan / dynamicKPIs.desaTotalTarget) * 100)}%
            </span>
          </div>
        </div>

        {/* KPI 2: Penerima Manfaat Unik */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Penerima Manfaat
            </span>
            <Users className="w-4 h-4 text-[#008444]" />
          </div>
          <div className="text-2xl font-black text-slate-900 font-mono tabular-nums">
            {dynamicKPIs.penerimaManfaatUnik.toLocaleString('id-ID')}
          </div>
          <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
            <span>Individu & KK Unik</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-700 font-medium">Bebas Duplikasi</span>
          </div>
        </div>

        {/* KPI 3: Total Intervensi */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Total Intervensi
            </span>
            <Layers className="w-4 h-4 text-[#008444]" />
          </div>
          <div className="text-2xl font-black text-slate-900 font-mono tabular-nums">
            {dynamicKPIs.totalIntervensi.toLocaleString('id-ID')}
          </div>
          <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
            <span>5 Program Berjalan</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-700 font-medium">Terpadu / Mandiri</span>
          </div>
        </div>

        {/* KPI 4: Penerima Manfaat Berkembang */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              PM Berkembang
            </span>
            <TrendingUp className="w-4 h-4 text-[#008444]" />
          </div>
          <div className="text-2xl font-black text-slate-900 font-mono tabular-nums">
            {dynamicKPIs.pmBerkembangPositif.toLocaleString('id-ID')}
          </div>
          <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
            <span>Perubahan Positif</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#008444] font-semibold">{dynamicKPIs.pmBerkembangPersen}%</span>
          </div>
        </div>

        {/* KPI 5: Kasus Tertangani */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Kasus Tertangani
            </span>
            <HeartHandshake className="w-4 h-4 text-[#008444]" />
          </div>
          <div className="text-2xl font-black text-slate-900 font-mono tabular-nums">
            {dynamicKPIs.kasusTertangani.toLocaleString('id-ID')}
          </div>
          <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
            <span>Dari {dynamicKPIs.kasusTotal} Kasus</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#008444] font-semibold">
              {Math.round((dynamicKPIs.kasusTertangani / dynamicKPIs.kasusTotal) * 100)}%
            </span>
          </div>
        </div>

        {/* KPI 6: Keluarga Graduasi Terverifikasi */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
              Keluarga Graduasi
            </span>
            <Award className="w-4 h-4 text-[#008444]" />
          </div>
          <div className="text-2xl font-black text-[#008444] font-mono tabular-nums">
            {dynamicKPIs.keluargaGraduasi.toLocaleString('id-ID')}
          </div>
          <div className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
            <span>Target: {dynamicKPIs.keluargaGraduasiTarget} KPM</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-700 font-medium">Mandiri</span>
          </div>
        </div>

      </div>

      {/* 4. Ringkasan Kinerja 5 Program Strategis (Bab VII.B & Bab VIII) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
              Kinerja Lima Program Strategis Dinas Sosial
            </h2>
            <p className="text-xs text-slate-500">
              Pencatatan indikator output dan outcome berdasarkan bidang pengampu resmi.
            </p>
          </div>
          
          <button
            onClick={() => onNavigateModule('realisasi')}
            className="text-xs font-semibold text-[#008444] hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
          >
            <span>Buka Modul Realisasi</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 5 Program Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPrograms.map((prog) => {
            const pct = Math.min(100, Math.round((prog.outputRealisasi / prog.outputTarget) * 100));
            return (
              <div
                key={prog.id}
                onClick={() => onSelectProgram(prog.id)}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs hover:border-[#008444] hover:shadow-xs transition-all flex flex-col justify-between cursor-pointer group"
                role="button"
                tabIndex={0}
                aria-label={`Lihat rincian program ${prog.name}`}
              >
                <div>
                  {/* Card Header: Program Name & Bidang Pengampu (No Pills) */}
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-emerald-300 transition-colors">
                        {getProgramIcon(prog.id)}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#008444] transition-colors leading-tight">
                          {prog.name}
                        </h3>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                          {prog.bidangPengampu}
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] text-slate-400 font-medium">
                      Pola {prog.polaPelaksanaan}
                    </span>
                  </div>

                  {/* Program Description */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {prog.fokusKegiatan}
                  </p>

                  {/* Output Indicator */}
                  <div className="space-y-1.5 pb-3 border-b border-slate-100">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium truncate max-w-[200px]">
                        {prog.outputLabel}
                      </span>
                      <span className="font-mono font-bold text-slate-900 tabular-nums">
                        {prog.outputRealisasi.toLocaleString('id-ID')} / {prog.outputTarget.toLocaleString('id-ID')} {prog.outputSatuan}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                      <div 
                        className="h-full bg-[#008444] rounded-full transition-all"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>

                  {/* Outcome Indicator */}
                  <div className="pt-3 space-y-1">
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      Capaian Outcome Sosial:
                    </div>
                    <p className="text-xs text-slate-700 leading-snug">
                      {prog.outcomeStatus}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium group-hover:text-slate-600">
                    Rincian Ruang Lingkup
                  </span>
                  <span className="text-[#008444] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Buka Program
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Tabel Rekapitulasi Wilayah Kabupaten / Kota Jawa Barat */}
      <div className="rounded-xl bg-white border border-slate-200 shadow-2xs overflow-hidden">
        
        {/* Table Header & Search */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              Rekapitulasi Wilayah Kabupaten / Kota
            </h3>
            <p className="text-xs text-slate-500">
              Sebaran pemetaan desa prioritas, penerima manfaat, dan capaian graduasi keluarga.
            </p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchRegionQuery}
              onChange={(e) => setSearchRegionQuery(e.target.value)}
              placeholder="Cari Kabupaten / Kota..."
              className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#008444]"
            />
          </div>
        </div>

        {/* Responsive High-Density Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
              <tr>
                <th className="py-2.5 px-4">Wilayah Kabupaten / Kota</th>
                <th className="py-2.5 px-4 text-right">Desa Terpetakan</th>
                <th className="py-2.5 px-4 text-right">Penerima Manfaat Unik</th>
                <th className="py-2.5 px-4 text-right">Intervensi Berjalan</th>
                <th className="py-2.5 px-4 text-right">Kasus Ditangani</th>
                <th className="py-2.5 px-4 text-right">Kandidat Graduasi</th>
                <th className="py-2.5 px-4 text-right">Tergraduasi Mandiri</th>
                <th className="py-2.5 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredRegions.map((reg) => (
                <tr 
                  key={reg.kabupatenKota}
                  className="hover:bg-slate-50/80 transition-colors"
                >
                  <td className="py-2.5 px-4 font-semibold text-slate-900">
                    {reg.kabupatenKota}
                  </td>
                  <td className="py-2.5 px-4 text-right font-mono tabular-nums text-slate-700">
                    {reg.desaTerpetakan} Desa
                  </td>
                  <td className="py-2.5 px-4 text-right font-mono tabular-nums text-slate-700">
                    {reg.penerimaManfaat.toLocaleString('id-ID')} KK
                  </td>
                  <td className="py-2.5 px-4 text-right font-mono tabular-nums text-slate-700">
                    {reg.intervensiBerjalan.toLocaleString('id-ID')}
                  </td>
                  <td className="py-2.5 px-4 text-right font-mono tabular-nums text-slate-700">
                    {reg.kasusSelesai} Kasus
                  </td>
                  <td className="py-2.5 px-4 text-right font-mono tabular-nums text-amber-700 font-medium">
                    {reg.kandidatGraduasi} KPM
                  </td>
                  <td className="py-2.5 px-4 text-right font-mono tabular-nums text-[#008444] font-bold">
                    {reg.keluargaGraduasi} KPM
                  </td>
                  <td className="py-2.5 px-4 text-center text-slate-500">
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#008444] font-semibold">
                      <CheckCircle2 className="w-3 h-3" />
                      Terintegrasi
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 flex flex-wrap items-center justify-between gap-2">
          <span>
            Menampilkan {filteredRegions.length} wilayah operasional Dinas Sosial Provinsi Jawa Barat
          </span>
          <span className="font-mono">
            Sumber Data: SADAJABAR Terpadu & DTKS Dinsos Jabar
          </span>
        </div>

      </div>

      {/* 6. Catatan Keterpaduan SADAJABAR & Diskominfo (Clean Footer Note) */}
      <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-0.5">
          <p className="font-semibold text-slate-800">
            Arsitektur Keterpaduan SADAJABAR (Satu Data Jawa Barat)
          </p>
          <p className="text-[11px] text-slate-500">
            Sistem mendukung single-family profile untuk mencegah pencatatan ganda antar-program serta menjamin kepatuhan UU PDP No. 27/2022.
          </p>
        </div>

        <button
          onClick={() => onNavigateModule('laporan')}
          className="px-4 py-2 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs shrink-0 transition-colors cursor-pointer"
        >
          Lihat Dokumen Laporan
        </button>
      </div>

    </div>
  );
};
