/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PROGRAMS_DATA } from './data/programsData';
import { INITIAL_SLIDES } from './data/slidesData';
import type { ProgramItem, SlideNewsItem, OfficialModuleId } from './types';

// Mobile / Citizen-Ergonomics Components (< 1024px)
import { SiGraduasiHeader } from './components/SiGraduasiHeader';
import { PhotoSlideBanner } from './components/PhotoSlideBanner';
import { MetricCardsRow } from './components/MetricCardsRow';
import { MobileModulesSection } from './components/MobileModulesSection';
import { ProgramsList } from './components/ProgramsList';
import { SapawargaBottomNav, type SapawargaNavTab } from './components/SapawargaBottomNav';

// Full Screen Detail Views (Both Mobile & Laptop)
import { ProgramFullScreenView } from './components/ProgramFullScreenView';
import { ArticleFullScreenView } from './components/ArticleFullScreenView';

// Desktop Laptop Enterprise GovTech Components (≥ 1024px)
import { DesktopSidebar, type DesktopNavId } from './components/DesktopSidebar';
import { DesktopHeader } from './components/DesktopHeader';
import { DesktopDashboardView } from './components/DesktopDashboardView';
import { DesktopSurveiDesaView } from './components/DesktopSurveiDesaView';
import { DesktopEvaluasiGraduasiView } from './components/DesktopEvaluasiGraduasiView';
import { ModulePlaceholderView } from './components/ModulePlaceholderView';

import { Search, FileText, ShieldCheck, ClipboardList, MapPin } from 'lucide-react';

export default function App() {
  // Mobile Navigation State
  const [activeTab, setActiveTab] = useState<SapawargaNavTab>('beranda');
  const [searchQuery, setSearchQuery] = useState('');
  const [slides, setSlides] = useState<SlideNewsItem[]>(INITIAL_SLIDES);
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<SlideNewsItem | null>(null);
  const [selectedMobileModule, setSelectedMobileModule] = useState<OfficialModuleId | null>(null);

  // Desktop Laptop Navigation State
  const [activeDesktopNav, setActiveDesktopNav] = useState<DesktopNavId>('dashboard');

  const handleMobileModuleSelect = (moduleId: OfficialModuleId) => {
    setSelectedMobileModule(moduleId);
  };

  // Filter 5 programs based on search input
  const filteredPrograms = PROGRAMS_DATA.filter((prog) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      prog.name.toLowerCase().includes(query) ||
      prog.subtitle.toLowerCase().includes(query) ||
      prog.summary.toLowerCase().includes(query)
    );
  });

  const handleAddSlide = (newSlide: SlideNewsItem) => {
    setSlides([newSlide, ...slides]);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-[#008444] selection:text-white">
      
      {/* ========================================================
          1. TAMPILAN HP (< 1024px)
          Mengadopsi konsep tampilan bersih mobile yang disetujui,
          DITAMBAH 6 Kotak Matriks / Kartu Indikator di Dashboard
         ======================================================== */}
      <div className="block lg:hidden min-h-screen flex flex-col pb-20">
        
        {/* Header Resmi Si-Graduasi Jabar */}
        <SiGraduasiHeader />

        <main className="flex-1 w-full">
          {activeTab === 'beranda' && (
            <div className="w-full">
              
              {/* Kolom Pencarian */}
              <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 mt-3.5">
                <div className="relative w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari Program atau Berita Si-Graduasi..."
                    className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 placeholder-slate-400 shadow-2xs focus:outline-none focus:border-[#008444] focus:ring-2 focus:ring-emerald-500/10 transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-semibold cursor-pointer"
                    >
                      Hapus
                    </button>
                  )}
                </div>
              </div>

              {/* Slider Berita Full Foto */}
              <PhotoSlideBanner
                slides={slides}
                onOpenArticle={(article) => setSelectedArticle(article)}
                onAddSlide={handleAddSlide}
              />

              {/* 6 KOTAK MATRIKS / KARTU INDIKATOR (Sesuai Arahan Pengguna untuk HP) */}
              <MetricCardsRow isMobile={true} />

              {/* 1. DAFTAR 5 PROGRAM RESMI SI-GRADUASI */}
              <ProgramsList
                programs={filteredPrograms}
                onSelectProgram={(program) => setSelectedProgram(program)}
              />

              {/* 2. 10 MODUL OPERASIONAL RESMI SI-GRADUASI (Diletakkan di bawah 5 Program Sesuai Arahan Pengguna) */}
              <MobileModulesSection onSelectModule={handleMobileModuleSelect} />

            </div>
          )}

          {/* Tab 2: Survei Desa (Option 1) */}
          {activeTab === 'survei-desa' && (
            <div className="w-full">
              <DesktopSurveiDesaView onBack={() => setActiveTab('beranda')} />
            </div>
          )}

          {/* Tab 3: Cek Sasaran (Option 1) */}
          {activeTab === 'cek-sasaran' && (
            <div className="w-full">
              <ModulePlaceholderView
                moduleId="data-sasaran"
                onBackToDashboard={() => setActiveTab('beranda')}
              />
            </div>
          )}

          {/* Tab 4: Profil */}
          {activeTab === 'profil' && (
            <div className="w-full max-w-md mx-auto px-4 py-8">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-full bg-[#008444]/10 text-[#008444] flex items-center justify-center font-bold text-lg">
                    SG
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900">
                      Petugas Lapangan Dinsos
                    </h2>
                    <span className="text-[11px] text-slate-500 block">
                      ID Akun: SG-2026-0042 · Wilayah: Bandung Barat
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#008444] bg-emerald-50 px-2 py-0.5 rounded mt-0.5">
                      <ShieldCheck className="w-3 h-3" />
                      Terdaftar Dinsos Jabar & SADAJABAR
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-400">Instansi:</span>
                    <span className="font-semibold text-slate-800">Dinas Sosial Provinsi Jawa Barat</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="text-slate-400">Sinkronisasi:</span>
                    <span className="font-semibold text-[#008444]">Aktif (SADAJABAR)</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Versi Sistem:</span>
                    <span className="font-mono text-slate-700">SI-GRADUASI v2.6</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab('beranda')}
                  className="w-full py-2.5 rounded-xl bg-[#008444] hover:bg-emerald-700 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  Kembali ke Beranda
                </button>
              </div>
            </div>
          )}
        </main>

        {/* Bottom Nav 3 Menu (Beranda, Informasi, Profil) */}
        <SapawargaBottomNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      {/* ========================================================
          2. TAMPILAN LAPTOP (≥ 1024px)
          Mengadopsi persis konsep gambar screenshot yang dikirimkan:
          - Sidebar Kiri Gelap (Dark Navy #111C2D)
          - Top Bar SI GRADUASI JABAR + Status SADAJABAR
          - Dashboard Eksekutif dengan 6 Indikator, Grafik 5 Program & Graduasi Wilayah
         ======================================================== */}
      <div className="hidden lg:flex min-h-screen w-full">
        
        {/* Left Dark Navy Sidebar */}
        <DesktopSidebar
          activeNav={activeDesktopNav}
          onSelectNav={(nav) => setActiveDesktopNav(nav)}
        />

        {/* Right Main Body Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-[#F8FAFC]">
          
          {/* Top Bar Desktop */}
          <DesktopHeader />

          {/* Main Viewport Content based on Sidebar Menu */}
          <main className="flex-1 overflow-y-auto">
            
            {/* 1. Dashboard Eksekutif View (Matching 1794458053516_762ad2f2.jpg) */}
            {activeDesktopNav === 'dashboard' && (
              <DesktopDashboardView
                onSelectProgramDetail={(progId) => {
                  const p = PROGRAMS_DATA.find((item) => item.id === progId) || null;
                  setSelectedProgram(p);
                }}
              />
            )}

            {/* 2. Pemetaan & Survei Desa (Matching 1794458083122_8f741d9e.jpg) */}
            {activeDesktopNav === 'pemetaan-survei' && (
              <DesktopSurveiDesaView />
            )}

            {/* 3. Evaluasi & Graduasi (Matching 1794458068658_44b630e6.jpg) */}
            {activeDesktopNav === 'evaluasi-graduasi' && (
              <DesktopEvaluasiGraduasiView />
            )}

            {/* Modul Lainnya (Cangkang Terstruktur Sesuai Blueprint) */}
            {activeDesktopNav !== 'dashboard' && 
             activeDesktopNav !== 'pemetaan-survei' && 
             activeDesktopNav !== 'evaluasi-graduasi' && (
              <ModulePlaceholderView
                moduleId={activeDesktopNav}
                onBackToDashboard={() => setActiveDesktopNav('dashboard')}
              />
            )}

          </main>

        </div>

      </div>

      {/* ========================================================
          3. FULL SCREEN VIEWS (Program & Article)
          Berlaku mulus untuk perangkat HP maupun Laptop
         ======================================================== */}
      {selectedProgram && (
        <ProgramFullScreenView
          program={selectedProgram}
          onBack={() => setSelectedProgram(null)}
        />
      )}

      {selectedArticle && (
        <ArticleFullScreenView
          article={selectedArticle}
          onBack={() => setSelectedArticle(null)}
        />
      )}

      {/* ========================================================
          4. MODUL FULL SCREEN VIEW (Khusus HP saat modul dipilih)
         ======================================================== */}
      {selectedMobileModule && (
        <div className="fixed inset-0 z-50 bg-[#F8FAFC] overflow-y-auto block lg:hidden animate-in fade-in duration-150">
          {selectedMobileModule === 'dashboard' ? (
            <DesktopDashboardView
              onBack={() => setSelectedMobileModule(null)}
              onSelectProgramDetail={(progId) => {
                const p = PROGRAMS_DATA.find((item) => item.id === progId) || null;
                setSelectedProgram(p);
              }}
            />
          ) : selectedMobileModule === 'pemetaan-survei' ? (
            <DesktopSurveiDesaView onBack={() => setSelectedMobileModule(null)} />
          ) : selectedMobileModule === 'evaluasi-graduasi' ? (
            <DesktopEvaluasiGraduasiView onBack={() => setSelectedMobileModule(null)} />
          ) : (
            <ModulePlaceholderView
              moduleId={selectedMobileModule}
              onBackToDashboard={() => setSelectedMobileModule(null)}
            />
          )}
        </div>
      )}

    </div>
  );
}
