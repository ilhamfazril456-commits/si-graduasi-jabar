import React, { useState } from 'react';
import { Search, Plus, Minus, ArrowLeft } from 'lucide-react';

interface DesktopSurveiDesaViewProps {
  onBack?: () => void;
}

export const DesktopSurveiDesaView: React.FC<DesktopSurveiDesaViewProps> = ({ onBack }) => {
  const [selectedKab, setSelectedKab] = useState('Semua');
  const [searchDesa, setSearchDesa] = useState('');
  const [zoomLevel, setZoomLevel] = useState(1);

  return (
    <div className="w-full p-4 sm:p-6 pb-28 sm:pb-12 space-y-4 sm:space-y-5">
      
      {/* 1. Header & Breadcrumb (Responsive) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200/80">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            {onBack ? (
              <button 
                onClick={onBack} 
                className="hover:text-[#008444] transition-colors cursor-pointer"
              >
                Beranda
              </button>
            ) : (
              <span>Dashboard</span>
            )}
            <span aria-hidden="true">/</span>
            <span>Pemetaan & Survei</span>
            <span aria-hidden="true">/</span>
            <span className="text-slate-800 font-semibold">Desa Prioritas</span>
          </div>
          <h1 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
            Pemetaan & Survei Desa Prioritas
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Dinas Sosial Provinsi Jawa Barat · Instrumen Pemetaan SADAJABAR
          </p>
        </div>

        {onBack && (
          <button
            onClick={onBack}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Beranda</span>
          </button>
        )}
      </div>

      {/* 2. Responsive Filter Row (Grid on mobile, flex on desktop) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap items-center gap-2.5">
        
        {/* Kabupaten/Kota */}
        <div className="w-full sm:w-auto lg:w-44">
          <select
            value={selectedKab}
            onChange={(e) => setSelectedKab(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs focus:outline-none focus:border-[#008444] cursor-pointer"
          >
            <option value="Semua">Kabupaten/Kota</option>
            <option value="Kab. Bandung Barat">Kab. Bandung Barat</option>
            <option value="Kab. Garut">Kab. Garut</option>
            <option value="Kab. Cianjur">Kab. Cianjur</option>
          </select>
        </div>

        {/* Kecamatan */}
        <div className="w-full sm:w-auto lg:w-40">
          <select className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs focus:outline-none focus:border-[#008444] cursor-pointer">
            <option value="Semua">Kecamatan</option>
            <option value="Cililin">Cililin</option>
            <option value="Ciparay">Ciparay</option>
          </select>
        </div>

        {/* Status Survei */}
        <div className="w-full sm:w-auto lg:w-40">
          <select className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs focus:outline-none focus:border-[#008444] cursor-pointer">
            <option value="Semua">Status Survei</option>
            <option value="Terverifikasi">Terverifikasi</option>
            <option value="Dalam Proses">Dalam Proses</option>
          </select>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:col-span-2 lg:flex-1 lg:min-w-[200px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchDesa}
            onChange={(e) => setSearchDesa(e.target.value)}
            placeholder="Cari Desa atau Kelurahan..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 shadow-2xs focus:outline-none focus:border-[#008444]"
          />
        </div>
      </div>

      {/* 3. Responsive Map & Survey Result (1 col on mobile, 12 cols on desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        
        {/* Left Map Viewport (Full width on mobile, 7 cols on desktop) */}
        <div className="w-full lg:col-span-7 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col justify-between min-h-[380px] sm:min-h-[460px]">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900">
                Peta Sebaran Desa Prioritas Jawa Barat
              </h2>
              <p className="text-[11px] text-slate-500">
                Sebaran Titik Sasaran 27 Kabupaten/Kota
              </p>
            </div>

            {/* Total Summary Box on Map */}
            <div className="grid grid-cols-3 gap-2 p-2 rounded-xl bg-slate-50 border border-slate-200 text-center sm:text-left text-xs shrink-0">
              <div className="px-2 py-0.5">
                <span className="text-[10px] text-slate-500 block">Total:</span>
                <span className="font-mono font-bold text-slate-900 text-xs sm:text-sm">245</span>
              </div>
              <div className="px-2 py-0.5 border-x border-slate-200">
                <span className="text-[10px] text-slate-500 block">Terpetakan:</span>
                <span className="font-mono font-bold text-[#008444] text-xs sm:text-sm">182</span>
              </div>
              <div className="px-2 py-0.5">
                <span className="text-[10px] text-slate-500 block">Belum:</span>
                <span className="font-mono font-bold text-amber-700 text-xs sm:text-sm">63</span>
              </div>
            </div>
          </div>

          {/* Interactive Map Visual of West Java (Safe SVG with pointer-events-none) */}
          <div className="relative w-full h-52 sm:h-72 flex items-center justify-center my-3 bg-slate-50/50 rounded-xl overflow-hidden border border-slate-100">
            <svg viewBox="0 0 600 300" className="w-full h-full max-h-72 pointer-events-none">
              {/* West Java stylized polygon geography */}
              <path d="M40,140 Q100,100 160,110 T280,120 T380,80 T480,120 T560,160 L540,220 L400,240 L260,250 L120,230 Z" fill="#008444" opacity="0.85" stroke="#ffffff" strokeWidth="2" />
              <path d="M120,110 Q200,80 260,130 L280,200 L180,210 Z" fill="#0D6EFD" opacity="0.8" stroke="#ffffff" strokeWidth="1.5" />
              <path d="M260,130 Q340,90 400,150 L380,230 L280,210 Z" fill="#0369A1" opacity="0.85" stroke="#ffffff" strokeWidth="1.5" />
              <path d="M380,80 Q460,70 510,130 L480,210 L380,220 Z" fill="#10B981" opacity="0.75" stroke="#ffffff" strokeWidth="1.5" />
              <path d="M40,140 Q100,160 140,210 L80,220 Z" fill="#94A3B8" opacity="0.5" stroke="#ffffff" strokeWidth="1.5" />
            </svg>

            {/* Zoom Controls */}
            <div className="absolute top-2 left-2 flex flex-col gap-1 bg-white border border-slate-200 rounded-lg shadow-xs p-1 z-10">
              <button 
                onClick={() => setZoomLevel(prev => Math.min(prev + 0.2, 2))}
                className="w-7 h-7 flex items-center justify-center text-slate-700 hover:bg-slate-100 rounded cursor-pointer"
                title="Perbesar Peta"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setZoomLevel(prev => Math.max(prev - 0.2, 0.8))}
                className="w-7 h-7 flex items-center justify-center text-slate-700 hover:bg-slate-100 rounded cursor-pointer"
                title="Perkecil Peta"
              >
                <Minus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Map Legend (Horizontal wrap friendly for all screens) */}
          <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs w-full text-[11px] flex flex-wrap items-center gap-x-4 gap-y-1.5">
            <span className="font-bold text-slate-800">Legend:</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-xs bg-[#0D6EFD]" />
              <span className="text-slate-600">Prioritas Tinggi</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-xs bg-[#10B981]" />
              <span className="text-slate-600">Prioritas Sedang</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-xs bg-[#94A3B8]" />
              <span className="text-slate-600">Belum Survei</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-xs bg-[#008444]" />
              <span className="text-slate-600">Tuntas Survei</span>
            </div>
          </div>

        </div>

        {/* Right Survey Summary Panel (Full width on mobile, 5 cols on desktop) */}
        <div className="w-full lg:col-span-5 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
          
          <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Ringkasan Hasil Survei Desa
              </span>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight mt-0.5">
                Desa Sukamaju, Kec. Cililin
              </h3>
              <p className="text-xs text-slate-600">
                Kabupaten Bandung Barat
              </p>
            </div>

            <div className="text-right shrink-0">
              <span className="text-[10px] font-bold text-[#008444] bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 block">
                TERVERIFIKASI
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                12 Okt 2026
              </span>
            </div>
          </div>

          {/* Potensi & Kemiskinan Split Cards (1 col on mobile, 2 cols on tablet+) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            {/* Potensi Ekonomi Lokal */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-slate-800 block">
                Potensi Ekonomi Lokal
              </span>
              <p className="text-xs text-slate-600 leading-snug">
                Pertanian (Singkong & Padi)<br />
                Pengolahan Pangan (Keripik)
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100/70 text-emerald-800 font-semibold">
                  SDA Tinggi
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 font-medium">
                  Keterampilan Lokal
                </span>
              </div>
            </div>

            {/* Kondisi PPKS & Kemiskinan */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5 text-xs">
              <span className="text-[11px] font-bold text-slate-800 block">
                Kondisi PPKS & Kemiskinan
              </span>
              <div className="flex justify-between">
                <span className="text-slate-500">Keluarga Miskin:</span>
                <span className="font-mono font-bold text-slate-800">124 KK</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">PPKS Teridentifikasi:</span>
                <span className="font-mono font-bold text-slate-800">42 Jiwa</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Butuh Intervensi:</span>
                <span className="font-mono font-bold text-slate-800">58 KK</span>
              </div>
              <span className="inline-block text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 mt-1">
                DALAM PROSES
              </span>
            </div>

          </div>

          {/* Action Button for Details */}
          <button className="w-full py-2.5 rounded-xl bg-[#008444] hover:bg-emerald-700 text-white font-semibold text-xs transition-colors cursor-pointer shadow-xs min-h-[42px]">
            Lihat Detail Survei Desa
          </button>

          {/* Rekomendasi Intervensi */}
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-bold text-slate-800 block">
              Rekomendasi Intervensi
            </span>
            <div className="flex flex-wrap gap-1.5">
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 font-semibold">
                Modal Sosial (Pemberdayaan/Usaha)
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-md bg-sky-100 text-sky-800 font-semibold">
                Jalan-Jalan Sosial (Lingkungan)
              </span>
            </div>

            <button className="w-full mt-2 py-2 rounded-lg bg-white border border-slate-200 hover:border-[#008444] hover:text-[#008444] text-slate-700 font-semibold text-xs transition-colors cursor-pointer min-h-[38px]">
              Lihat Detail Rekomendasi
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
