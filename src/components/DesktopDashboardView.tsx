import React, { useState, useMemo } from 'react';
import { MetricCardsRow } from './MetricCardsRow';
import { ArrowLeft, Search, Info } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { useInView } from '../hooks/useInView';
import { JABAR_27_REGIONS, type RegionGraduationData } from '../data/jabarRegions';

interface DesktopDashboardViewProps {
  onSelectProgramDetail?: (programId: string) => void;
  onBack?: () => void;
}

export const DesktopDashboardView: React.FC<DesktopDashboardViewProps> = ({
  onSelectProgramDetail,
  onBack,
}) => {
  // Filters State
  const [selectedKab, setSelectedKab] = useState('Semua');
  const [selectedKec, setSelectedKec] = useState('Semua');
  const [selectedPola, setSelectedPola] = useState('Semua Pola');
  const [selectedStatusGraduasi, setSelectedStatusGraduasi] = useState('Semua Status');
  const [searchRegionQuery, setSearchRegionQuery] = useState('');

  // Tooltip State for Hover/Touch Floating Cards
  const [hoveredProgram, setHoveredProgram] = useState<any | null>(null);
  const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<RegionGraduationData | null>(null);
  const [regionTooltipPos, setRegionTooltipPos] = useState<{ x: number; y: number } | null>(null);

  // In-View Animation Hooks: Animation triggers every time user scrolls to each section
  const { ref: chartRef, isInView: isChartInView } = useInView<HTMLDivElement>({ threshold: 0.15 });
  const { ref: regionRef, isInView: isRegionInView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  // Dynamic Kecamatan options based on selected Kabupaten/Kota
  const availableKecamatan = useMemo(() => {
    if (selectedKab === 'Semua') {
      return ['Cibinong', 'Soreang', 'Ciparay', 'Palabuhanratu', 'Garut Kota', 'Kadungora', 'Singaparna', 'Lembang', 'Cililin'];
    }
    const found = JABAR_27_REGIONS.find((r) => r.name === selectedKab);
    return found ? found.kecamatanList : ['Pusat Pemerintahan', 'Wilayah 1', 'Wilayah 2'];
  }, [selectedKab]);

  // Handle Kab Change: automatically reset Kecamatan to 'Semua'
  const handleKabChange = (kab: string) => {
    setSelectedKab(kab);
    setSelectedKec('Semua');
  };

  // Chart data matching reference photo 1794458053516_762ad2f2.jpg
  // Green bar heights scaled cleanly (305-340) so Jalan-Jalan Sosial (325) is perfectly parallel and never breaches top
  const chartPrograms = [
    {
      id: 'kampung-sosial',
      name: 'Kampung Sosial',
      logoUrl: '/assets/logos/kampung-sosial.jpg',
      outputVal: 340,
      outputNum: 142,
      outputDesc: '142 Desa Terpetakan (Target Komunal)',
      outcomeVal: 245,
      outcomeNum: 1692,
      outcomeDesc: '1.692 KPM Mandiri Berdaya',
      bidang: 'Bidang Rehabilitasi Sosial (Rehsos)',
    },
    {
      id: 'teman-sosial',
      name: 'Teman Sosial',
      logoUrl: '/assets/logos/teman-sosial.jpg',
      outputVal: 305,
      outputNum: 18450,
      outputDesc: '18.450 KPM Terdampingi Relawan',
      outcomeVal: 190,
      outcomeNum: 2427,
      outcomeDesc: '2.427 KPM Lolos Asesmen Mandiri',
      bidang: 'Bidang Rehabilitasi Sosial (Rehsos)',
    },
    {
      id: 'kawal-bansos',
      name: 'Kawal Bansos',
      logoUrl: '/assets/logos/kawal-bansos.jpg',
      outputVal: 315,
      outputNum: 32890,
      outputDesc: '32.890 Penyaluran Bansos Terverifikasi',
      outcomeVal: 265,
      outcomeNum: 1639,
      outcomeDesc: '1.639 Aduan Tuntas Terselesaikan',
      bidang: 'Bidang Penanganan Fakir Miskin (PFM)',
    },
    {
      id: 'jalan-jalan-sosial',
      name: 'Jalan-Jalan Sosial',
      logoUrl: '/assets/logos/jalan-jalan-sosial.jpg',
      outputVal: 325,
      outputNum: 11240,
      outputDesc: '11.240 KPM Tersurvei & Teredukasi Lapangan',
      outcomeVal: 270,
      outcomeNum: 1285,
      outcomeDesc: '1.285 Kasus PPKS Tertangani Tuntas',
      bidang: 'Bidang Perlindungan dan Jaminan Sosial (Linjamsos)',
    },
    {
      id: 'modal-sosial',
      name: 'Modal Sosial',
      logoUrl: '/assets/logos/modal-sosial.jpg',
      outputVal: 340,
      outputNum: 2150,
      outputDesc: '2.150 Paket Bantuan Modal & Vokasi',
      outcomeVal: 210,
      outcomeNum: 706,
      outcomeDesc: '706 Usaha KPM Berkelanjutan',
      bidang: 'Bidang Pemberdayaan Sosial (Dayasos)',
    },
  ];

  // Filter 27 Regions based on search query or selected Kabupaten
  const filteredRegions = useMemo(() => {
    return JABAR_27_REGIONS.filter((reg) => {
      const matchSearch = reg.name.toLowerCase().includes(searchRegionQuery.toLowerCase());
      const matchKab = selectedKab === 'Semua' || reg.name === selectedKab;
      return matchSearch && matchKab;
    });
  }, [searchRegionQuery, selectedKab]);

  return (
    <div className="w-full p-4 sm:p-6 pb-28 sm:pb-12 space-y-4 sm:space-y-6">
      
      {/* 1. Single Top-Left Back Button for Mobile View */}
      {onBack && (
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 flex items-center justify-center transition-colors cursor-pointer shrink-0 shadow-2xs"
              aria-label="Kembali ke Beranda"
              title="Kembali ke Beranda"
            >
              <ArrowLeft className="w-5 h-5 text-slate-800" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-900 leading-tight">Dashboard Eksekutif</span>
                <span className="text-[10px] font-semibold text-[#008444] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  SADAJABAR
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium block">
                Dinas Sosial Provinsi Jawa Barat · 27 Kabupaten/Kota
              </span>
            </div>
          </div>
          <div className="w-7 h-7 flex items-center justify-center shrink-0">
            <img 
              src="/assets/logos/si-graduasi-logo.png" 
              alt="Logo Resmi Si-Graduasi" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      {/* 2. Responsive Filter Bar with 27 Kab/Kota & Dynamic Kecamatan & Periode 2026 Only */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap items-center gap-2.5 sm:gap-3 text-xs font-semibold">
        
        {/* Kabupaten/Kota (Lengkap 27 Kab/Kota dari Kab. Bogor s.d. Kota Banjar) */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <span className="text-slate-600 text-[11px] sm:text-xs whitespace-nowrap">Kabupaten/Kota:</span>
          <select
            value={selectedKab}
            onChange={(e) => handleKabChange(e.target.value)}
            className="w-full sm:w-auto px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-2xs focus:outline-none focus:border-[#008444] cursor-pointer text-xs"
          >
            <option value="Semua">Semua (27 Kab/Kota)</option>
            {JABAR_27_REGIONS.map((reg) => (
              <option key={reg.id} value={reg.name}>
                {reg.name}
              </option>
            ))}
          </select>
        </div>

        {/* Kecamatan (Disesuaikan otomatis sesuai Kab/Kota yang dipilih) */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <span className="text-slate-600 text-[11px] sm:text-xs whitespace-nowrap">Kecamatan:</span>
          <select
            value={selectedKec}
            onChange={(e) => setSelectedKec(e.target.value)}
            className="w-full sm:w-auto px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-2xs focus:outline-none focus:border-[#008444] cursor-pointer text-xs"
          >
            <option value="Semua">
              {selectedKab === 'Semua' ? 'Semua Kecamatan' : `Semua di ${selectedKab}`}
            </option>
            {availableKecamatan.map((kec) => (
              <option key={kec} value={kec}>
                {kec}
              </option>
            ))}
          </select>
        </div>

        {/* Periode: Hanya Ada Pilihan Tahun 2026 Saja Sesuai Instruksi */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <span className="text-slate-600 text-[11px] sm:text-xs whitespace-nowrap">Periode:</span>
          <select
            value="Tahun 2026"
            disabled
            className="w-full sm:w-auto px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 shadow-2xs cursor-default text-xs font-bold"
          >
            <option value="Tahun 2026">Tahun 2026</option>
          </select>
        </div>

        {/* Pola */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <span className="text-slate-600 text-[11px] sm:text-xs whitespace-nowrap">Pola:</span>
          <select
            value={selectedPola}
            onChange={(e) => setSelectedPola(e.target.value)}
            className="w-full sm:w-auto px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-2xs focus:outline-none focus:border-[#008444] cursor-pointer text-xs"
          >
            <option value="Semua Pola">Semua Pola</option>
            <option value="Pola Terpadu">Pola Terpadu</option>
            <option value="Pola Mandiri">Pola Mandiri</option>
            <option value="Pola Berkelanjutan">Pola Berkelanjutan</option>
          </select>
        </div>

        {/* Status */}
        <div className="col-span-2 sm:col-span-1 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
          <span className="text-slate-600 text-[11px] sm:text-xs whitespace-nowrap">Status:</span>
          <select
            value={selectedStatusGraduasi}
            onChange={(e) => setSelectedStatusGraduasi(e.target.value)}
            className="w-full sm:w-auto px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-white border border-slate-200 text-slate-800 shadow-2xs focus:outline-none focus:border-[#008444] cursor-pointer text-xs"
          >
            <option value="Semua Status">Semua Status</option>
            <option value="Pra-Sejahtera">Pra-Sejahtera</option>
            <option value="Berkembang">Berkembang</option>
            <option value="Kandidat Graduasi">Kandidat Graduasi</option>
            <option value="Terverifikasi Graduasi">Terverifikasi Graduasi</option>
          </select>
        </div>

      </div>

      {/* 3. Six Metric Cards - Animated on Scroll via useInView */}
      <MetricCardsRow isMobile={false} />

      {/* 4. Bottom Panels: Realisasi & Dampak (Left) and 27 Wilayah Graduasi (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        
        {/* Left Column (8 cols desktop): Realisasi & Dampak Program Strategis Dual Bar Chart */}
        <div 
          ref={chartRef}
          className="w-full lg:col-span-7 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between relative"
        >
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h2 className="text-base font-bold text-slate-900 tracking-tight">
                  Realisasi & Dampak Program Strategis
                </h2>
                <span className="text-[11px] text-slate-400 font-medium">
                  Arahkan kursor / sentuh batang untuk melihat rincian melayang
                </span>
              </div>

              {/* Chart Legend */}
              <div className="flex items-center gap-3 text-xs font-medium text-slate-600 shrink-0">
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

            {/* Custom Dual Bar Chart with Scroll Container & Precision Alignment */}
            <div className="w-full overflow-x-auto pb-2 pt-2 -mx-2 px-2 sm:mx-0 sm:px-0">
              <div className="min-w-[480px] sm:min-w-full">
                
                {/* Chart Plot Area with Y Axis Guide Lines */}
                <div className="relative h-60 sm:h-64 pt-6 pb-2 flex items-end justify-between px-3 sm:px-6 border-b border-l border-slate-200">
                  
                  {/* Y Axis Guide Lines (0, 100, 200, 300, 400) matching photo */}
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
                    <div className="border-b border-slate-100 flex items-center justify-between pr-2">
                      <span>0</span>
                    </div>
                  </div>

                  {/* 5 Program Dual Bars - Smoothly Animated on Scroll */}
                  {chartPrograms.map((prog) => {
                    // Maximum bar height clamped so green bars stay in the 305-340 zone below the 400 guide line
                    // Jalan-Jalan Sosial (325) aligns cleanly between Teman Sosial (305) and Modal Sosial (340)
                    const maxBarHeightPx = 155;
                    const outHeight = Math.round((prog.outputVal / 400) * maxBarHeightPx);
                    const outcomeHeight = Math.round((prog.outcomeVal / 400) * maxBarHeightPx);

                    return (
                      <div 
                        key={prog.id}
                        onMouseEnter={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredProgram(prog);
                          setTooltipPos({ x: rect.left + rect.width / 2, y: rect.top - 8 });
                        }}
                        onMouseLeave={() => setHoveredProgram(null)}
                        onTouchStart={(e) => {
                          const rect = e.currentTarget.getBoundingClientRect();
                          setHoveredProgram(prog);
                          setTooltipPos({ x: rect.left + rect.width / 2, y: rect.top - 8 });
                        }}
                        onClick={() => onSelectProgramDetail && onSelectProgramDetail(prog.id)}
                        className="relative z-10 flex flex-col items-center gap-1.5 h-full justify-end cursor-pointer group flex-1 max-w-[90px] sm:max-w-[110px]"
                        title={`Klik untuk melihat detail ${prog.name}`}
                      >
                        <div className="flex items-end justify-center gap-1.5 sm:gap-2 h-full pb-1">
                          
                          {/* Green Bar (Output / Target) */}
                          <div className="flex flex-col items-center justify-end h-full">
                            <span className="text-[10px] font-bold text-slate-700 font-mono mb-1 group-hover:text-[#008444] whitespace-nowrap leading-none transition-colors">
                              <AnimatedCounter value={prog.outputNum} duration={850} trigger={isChartInView} />
                            </span>
                            <div 
                              className="w-7 sm:w-9 rounded-t-sm bg-[#008444] group-hover:brightness-110 shadow-xs transition-all duration-1000 ease-out origin-bottom"
                              style={{ 
                                height: isChartInView ? `${outHeight}px` : '0px'
                              }}
                            />
                          </div>

                          {/* Blue Bar (Outcome / Perubahan Kondisi) */}
                          <div className="flex flex-col items-center justify-end h-full">
                            <span className="text-[10px] font-bold text-slate-700 font-mono mb-1 group-hover:text-[#0D6EFD] whitespace-nowrap leading-none transition-colors">
                              <AnimatedCounter value={prog.outcomeNum} duration={850} trigger={isChartInView} />
                            </span>
                            <div 
                              className="w-7 sm:w-9 rounded-t-sm bg-[#0D6EFD] group-hover:brightness-110 shadow-xs transition-all duration-1000 ease-out origin-bottom"
                              style={{ 
                                height: isChartInView ? `${outcomeHeight}px` : '0px'
                              }}
                            />
                          </div>

                        </div>

                        {/* Program Logo & Label on X Axis */}
                        <div className="flex flex-col items-center gap-1 mt-2">
                          <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/90 p-0.5 flex items-center justify-center shrink-0 shadow-2xs group-hover:border-[#008444] transition-colors">
                            <img 
                              src={prog.logoUrl} 
                              alt={prog.name} 
                              className={`max-h-full max-w-full object-contain [image-rendering:-webkit-optimize-contrast] ${
                                prog.id === 'kawal-bansos' ? 'scale-90' : ''
                              }`} 
                            />
                          </div>
                          <span className="text-xs font-bold text-slate-700 group-hover:text-[#008444] transition-colors text-center max-w-[95px] leading-tight line-clamp-2">
                            {prog.name}
                          </span>
                        </div>
                      </div>
                    );
                  })}

                </div>
              </div>
            </div>
          </div>

          {/* Sub legend footer matching photo */}
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

          {/* Floating Tooltip Melayang for Vertical Bar Chart */}
          {hoveredProgram && (
            <div 
              className="absolute z-40 bg-slate-900/95 text-white p-3 rounded-xl shadow-xl text-xs backdrop-blur-xs border border-slate-700 pointer-events-none transition-all duration-150 animate-in fade-in"
              style={{
                top: '12px',
                right: '16px',
                maxWidth: '260px',
              }}
            >
              <div className="flex items-center gap-2 pb-2 border-b border-slate-800">
                <span className="font-bold text-white text-sm">{hoveredProgram.name}</span>
              </div>
              <div className="space-y-1.5 mt-2 text-[11px]">
                <div className="flex items-center justify-between gap-3">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    Output (Target):
                  </span>
                  <span className="font-mono font-bold text-white">
                    {hoveredProgram.outputNum.toLocaleString('id-ID')}
                  </span>
                </div>
                <p className="text-[10px] text-slate-300 pl-3.5">
                  {hoveredProgram.outputDesc}
                </p>

                <div className="flex items-center justify-between gap-3 pt-1 border-t border-slate-800/80">
                  <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    Outcome:
                  </span>
                  <span className="font-mono font-bold text-white">
                    {hoveredProgram.outcomeNum.toLocaleString('id-ID')}
                  </span>
                </div>
                <p className="text-[10px] text-slate-300 pl-3.5">
                  {hoveredProgram.outcomeDesc}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Right Column (5 cols desktop): Status Graduasi Wilayah (Lengkap 27 Kab/Kota Jawa Barat) */}
        <div 
          ref={regionRef}
          className="w-full lg:col-span-5 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between relative"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <div>
                <h2 className="text-base font-bold text-slate-900 tracking-tight">
                  Status Graduasi 27 Wilayah
                </h2>
                <span className="text-[11px] text-slate-500 font-medium block">
                  Kab. Bogor s.d. Kota Banjar (Target 500 KK/Wilayah)
                </span>
              </div>
              <span className="text-xs font-bold text-[#008444] bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100">
                27 Kab/Kota
              </span>
            </div>

            {/* Quick Search Filter for 27 Wilayah */}
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                value={searchRegionQuery}
                onChange={(e) => setSearchRegionQuery(e.target.value)}
                placeholder="Cari dari 27 Kabupaten / Kota..."
                className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#008444] transition-all"
              />
            </div>

            {/* Scrollable Container for all 27 Regions with Hover Tooltip */}
            <div className="max-h-[380px] sm:max-h-[420px] overflow-y-auto pr-2 space-y-3 divide-y divide-slate-100">
              {filteredRegions.map((reg, idx) => {
                const pct = Math.round((reg.achieved / reg.target) * 100);
                return (
                  <div 
                    key={reg.id} 
                    onMouseEnter={() => setHoveredRegion(reg)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    onTouchStart={() => setHoveredRegion(reg)}
                    className="pt-2.5 first:pt-0 space-y-1.5 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-800">
                      <span className="group-hover:text-[#008444] transition-colors flex items-center gap-1.5">
                        <span className="w-4 text-[10px] text-slate-400 font-mono">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        {reg.name}
                      </span>
                      <span className="font-mono text-slate-900 font-bold group-hover:text-[#008444] transition-colors">
                        <AnimatedCounter value={reg.achieved} duration={850} trigger={isRegionInView} /> / {reg.target} KK
                      </span>
                    </div>

                    {/* Horizontal Animated Progress Bar */}
                    <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden relative">
                      <div 
                        className="h-full bg-[#008444] rounded-full transition-all duration-1000 ease-out origin-left group-hover:brightness-110"
                        style={{ width: isRegionInView ? `${pct}%` : '0%' }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Floating Tooltip for Horizontal Progress Bar */}
          {hoveredRegion && (
            <div 
              className="absolute z-40 bg-slate-900/95 text-white p-3 rounded-xl shadow-xl text-xs backdrop-blur-xs border border-slate-700 pointer-events-none transition-all duration-150 animate-in fade-in"
              style={{
                bottom: '48px',
                right: '16px',
                maxWidth: '240px',
              }}
            >
              <div className="font-bold text-white text-sm mb-1">{hoveredRegion.name}</div>
              <div className="space-y-1 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Wilayah:</span>
                  <span className="font-mono text-white font-semibold">{hoveredRegion.target} KK</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emerald-400 font-semibold">Tercapai Graduasi:</span>
                  <span className="font-mono text-emerald-400 font-bold">{hoveredRegion.achieved} KK</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Persentase:</span>
                  <span className="font-mono text-white font-bold">{Math.round((hoveredRegion.achieved / hoveredRegion.target) * 100)}%</span>
                </div>
                <div className="flex justify-between pt-1 border-t border-slate-800">
                  <span className="text-slate-400">Status:</span>
                  <span className="text-[#008444] font-semibold">{hoveredRegion.status}</span>
                </div>
              </div>
            </div>
          )}

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
            <span>27 Kabupaten & Kota Terintegrasi</span>
            <span className="text-[#008444] font-semibold">SADAJABAR Real-time</span>
          </div>

        </div>

      </div>

      {/* 5. Showcase 5 Program Si-Graduasi */}
      <div className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-base font-bold text-slate-900 tracking-tight">
              Program Si-Graduasi Jawa Barat
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Pilar operasional terintegrasi lintas bidang Dinas Sosial Provinsi Jawa Barat
            </p>
          </div>
          <span className="text-xs font-semibold text-[#008444] bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-200 hidden sm:inline-block">
            Dinas Sosial Provinsi Jawa Barat
          </span>
        </div>

        {/* 5 Cards Grid: 1 col on mobile, 2 col on tablet, 5 col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
          {chartPrograms.map((prog) => (
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
                    className={`max-h-full max-w-full object-contain [image-rendering:-webkit-optimize-contrast] ${
                      prog.id === 'kawal-bansos' ? 'scale-85' : ''
                    }`}
                    loading="lazy"
                  />
                </div>

                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#008444] transition-colors leading-snug">
                  {prog.name}
                </h3>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-[#008444]">
                <span>Buka Detail</span>
                <span className="text-xs">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
