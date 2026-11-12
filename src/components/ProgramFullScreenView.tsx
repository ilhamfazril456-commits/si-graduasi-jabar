import React from 'react';
import type { ProgramId, ProgramItem } from '../types';
import { 
  ArrowLeft, 
  Compass, 
  HeartHandshake, 
  TrendingUp, 
  Building2, 
  ShieldCheck, 
  Layers 
} from 'lucide-react';

interface ProgramFullScreenViewProps {
  program?: ProgramItem | null;
  programId?: ProgramId | null;
  onBack: () => void;
}

export const ProgramFullScreenView: React.FC<ProgramFullScreenViewProps> = ({
  program,
  programId,
  onBack,
}) => {
  const currentId = program?.id || programId || 'jalan-jalan-sosial';
  const programName = program?.name || (
    currentId === 'jalan-jalan-sosial' ? 'Jalan Jalan Sosial' :
    currentId === 'teman-sosial' ? 'Teman Sosial' :
    currentId === 'modal-sosial' ? 'Modal Sosial' :
    currentId === 'kampung-sosial' ? 'Kampung Sosial' :
    currentId === 'kawal-bansos' ? 'Kawal Bansos' : 'Program Si-Graduasi'
  );

  const getHeaderIcon = (id: string) => {
    switch (id) {
      case 'jalan-jalan-sosial':
        return <Compass className="w-5 h-5 text-[#008444]" />;
      case 'teman-sosial':
        return <HeartHandshake className="w-5 h-5 text-[#008444]" />;
      case 'modal-sosial':
        return <TrendingUp className="w-5 h-5 text-[#008444]" />;
      case 'kampung-sosial':
        return <Building2 className="w-5 h-5 text-[#008444]" />;
      case 'kawal-bansos':
        return <ShieldCheck className="w-5 h-5 text-[#008444]" />;
      default:
        return <Layers className="w-5 h-5 text-[#008444]" />;
    }
  };

  const getLogoUrl = (id: string, customUrl?: string) => {
    if (customUrl) return customUrl;
    switch (id) {
      case 'teman-sosial':
        return '/assets/logos/teman-sosial.jpg';
      case 'kampung-sosial':
        return '/assets/logos/kampung-sosial.jpg';
      case 'modal-sosial':
        return '/assets/logos/modal-sosial.jpg';
      case 'kawal-bansos':
        return '/assets/logos/kawal-bansos.jpg';
      case 'jalan-jalan-sosial':
        return '/assets/logos/jalan-jalan-sosial.jpg';
      default:
        return '';
    }
  };

  const logoSrc = getLogoUrl(currentId, program?.logoUrl);

  return (
    <div className="fixed inset-0 z-50 bg-[#F8FAFC] flex flex-col overflow-y-auto animate-in fade-in duration-200">
      
      {/* Top App Bar with Back Button '<-' */}
      <header className="sticky top-0 z-30 w-full bg-white border-b border-slate-200 shadow-2xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Kembali ke halaman sebelumnya"
              title="Kembali"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 p-1 flex items-center justify-center shrink-0 shadow-2xs">
                {logoSrc ? (
                  <img
                    src={logoSrc}
                    alt={programName}
                    className={`w-full h-full object-contain ${
                      currentId === 'kawal-bansos' ? 'scale-90 p-0.5' : ''
                    }`}
                  />
                ) : (
                  getHeaderIcon(currentId)
                )}
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                  {programName}
                </h1>
                <p className="text-xs text-slate-500">
                  {program?.bidang || 'Si-Graduasi · Dinas Sosial Provinsi Jawa Barat'}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onBack}
            className="text-xs font-semibold text-[#008444] hover:text-emerald-700 px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer hidden sm:block"
          >
            ← Kembali
          </button>
        </div>
      </header>

      {/* Full Screen Body: Tampilan Logo Resmi Bersih Sesuai Arahan Pengguna */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col">
        
        {/* Clean Container Canvas with Prominent Official Logo */}
        <div className="flex-1 w-full rounded-2xl bg-white border border-slate-200 p-8 sm:p-12 flex flex-col items-center justify-center text-center shadow-2xs">
          
          {/* Official Logo Hero Card */}
          <div className="w-64 sm:w-80 h-28 sm:h-36 rounded-2xl bg-white border border-slate-200/90 p-4 flex items-center justify-center shadow-xs mb-6">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={programName}
                className={`max-h-full max-w-full object-contain [image-rendering:-webkit-optimize-contrast] ${
                  currentId === 'kawal-bansos' ? 'scale-85' : ''
                }`}
              />
            ) : (
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#008444]">
                {getHeaderIcon(currentId)}
              </div>
            )}
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
            {programName}
          </h2>

          <p className="text-xs sm:text-sm text-[#008444] font-semibold mb-2">
            {program?.bidang || 'Dinas Sosial Provinsi Jawa Barat'}
          </p>

          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mb-8 leading-relaxed">
            Halaman resmi program dalam arsitektur Si-Graduasi Jawa Barat. Sesuai arahan, konten teknis dipersiapkan bersih dan terstruktur untuk integrasi data lapangan.
          </p>

          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#008444] hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Halaman Sebelumnya</span>
          </button>

        </div>

      </main>

    </div>
  );
};
