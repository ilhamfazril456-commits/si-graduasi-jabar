import React, { useState } from 'react';
import type { KPMRecord, UserRole } from '../types';
import { SEED_KPM_RECORDS } from '../data/kpmData';
import { maskNIK, maskKK, validateNIK, calculateGraduationScore } from '../utils/security';
import { 
  Search, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  Sliders, 
  Eye, 
  EyeOff, 
  Award, 
  FileCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface GraduasiCheckerProps {
  userRole: UserRole;
  onLogAction: (action: string, module: string, details: string) => void;
}

export const GraduasiChecker: React.FC<GraduasiCheckerProps> = ({
  userRole,
  onLogAction,
}) => {
  const [searchNIK, setSearchNIK] = useState('');
  const [searchError, setSearchError] = useState('');
  const [activeKPM, setActiveKPM] = useState<KPMRecord | null>(SEED_KPM_RECORDS[0]);
  const [showUnmasked, setShowUnmasked] = useState(false);

  // Interactive Simulation Sliders
  const [customCriteria, setCustomCriteria] = useState({
    incomeScore: 85,
    housingScore: 80,
    businessCapabilityScore: 85,
    educationHealthScore: 80,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchError('');
    setShowUnmasked(false);

    const validation = validateNIK(searchNIK);
    if (!validation.isValid) {
      setSearchError(validation.message);
      onLogAction('QUERY_NIK_INVALID', 'Cek Graduasi', `Percobaan query NIK tidak valid: "${searchNIK}"`);
      return;
    }

    const found = SEED_KPM_RECORDS.find((r) => r.nik === searchNIK);
    if (found) {
      setActiveKPM(found);
      onLogAction('QUERY_NIK_SUCCESS', 'Cek Graduasi', `Query NIK berhasil untuk KPM an. ${found.namaKepalaKeluarga} (Masked: ${maskNIK(found.nik)})`);
    } else {
      setSearchError('NIK tidak ditemukan dalam sampel basis data KPM. Silakan gunakan salah satu sampel uji di bawah.');
      onLogAction('QUERY_NIK_NOT_FOUND', 'Cek Graduasi', `NIK ${maskNIK(searchNIK)} tidak ditemukan`);
    }
  };

  const handleSelectSample = (kpm: KPMRecord) => {
    setSearchNIK(kpm.nik);
    setSearchError('');
    setActiveKPM(kpm);
    setShowUnmasked(false);
    onLogAction('SELECT_SAMPLE_KPM', 'Cek Graduasi', `Memilih sampel data KPM: ${kpm.namaKepalaKeluarga}`);
  };

  const calculatedGraduation = calculateGraduationScore(customCriteria);

  const toggleUnmask = () => {
    if (userRole !== 'petugas') {
      alert('Akses Terbatas: Sesuai UU PDP No. 27/2022, pembukaan masking data lengkap hanya diizinkan untuk akun Petugas Dinas Sosial terverifikasi.');
      onLogAction('UNMASK_REJECTED', 'Cek Graduasi', 'Percobaan buka data masking ditolak (Role Publik/Masyarakat)');
      return;
    }
    setShowUnmasked((prev) => !prev);
    onLogAction(
      'UNMASK_TOGGLE',
      'Cek Graduasi',
      `Petugas ${!showUnmasked ? 'membuka' : 'menutup'} penyamaran data NIK/KK KPM an. ${activeKPM?.namaKepalaKeluarga}`
    );
  };

  return (
    <section className="py-12 sm:py-16 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2 uppercase tracking-wider">
            <span>Instrumen Penilaian</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Verifikasi Graduasi</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Pengecekan Status & Kalkulator Kelayakan Graduasi KPM
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-2xl leading-relaxed">
            Pencarian status kepesertaan bansos dan simulasi 4 pilar kemandirian ekonomi. Data kependudukan diproteksi otomatis menggunakan penyamaran NIK/KK berstandar UU Perlindungan Data Pribadi.
          </p>
        </div>

        {/* Search Bar & Sample Buttons */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-5 sm:p-6 mb-8 space-y-4">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchNIK}
                onChange={(e) => setSearchNIK(e.target.value)}
                placeholder="Masukkan 16 Digit NIK Kependudukan (misal: 3201015508820001)..."
                maxLength={16}
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-700 text-sm font-mono text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] font-mono text-slate-500">
                {searchNIK.length}/16
              </span>
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 shrink-0"
            >
              <Search className="w-4 h-4" />
              <span>Cek Status NIK</span>
            </button>
          </form>

          {searchError && (
            <p className="text-xs text-rose-400 flex items-center gap-1.5 font-medium">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              {searchError}
            </p>
          )}

          {/* Quick Sample NIK Chips */}
          <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
            <span className="text-xs text-slate-400 font-medium">
              Sampel Uji Coba Cepat:
            </span>
            {SEED_KPM_RECORDS.map((kpm, idx) => (
              <button
                key={kpm.nik}
                onClick={() => handleSelectSample(kpm)}
                className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors ${
                  activeKPM?.nik === kpm.nik
                    ? 'bg-emerald-600 text-white font-semibold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Sampel {idx + 1}: {kpm.namaKepalaKeluarga} ({kpm.statusGraduasi})
              </button>
            ))}
          </div>
        </div>

        {/* Two Column Layout: KPM Result Card + Interactive Graduation Score Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: KPM Profile & Masked Verification Record */}
          <div className="lg:col-span-6 space-y-6">
            {activeKPM ? (
              <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-5">
                
                {/* Result Title & Masking Toggle */}
                <div className="flex items-start justify-between pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      Profil Penerima Manfaat
                    </span>
                    <h3 className="text-xl font-bold text-white mt-0.5">
                      {activeKPM.namaKepalaKeluarga}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {activeKPM.desa}, Kec. {activeKPM.kecamatan}
                    </p>
                  </div>

                  <button
                    onClick={toggleUnmask}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors"
                    title={userRole === 'petugas' ? 'Klik untuk buka/tutup masking data' : 'Perlu akses petugas'}
                  >
                    {showUnmasked ? <EyeOff className="w-3.5 h-3.5 text-amber-400" /> : <Eye className="w-3.5 h-3.5 text-slate-400" />}
                    <span>{showUnmasked ? 'Tutup Masking' : 'Intip Data'}</span>
                  </button>
                </div>

                {/* Identification Data with Protected Masking */}
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-500 block mb-1">Nomor Induk Kependudukan (NIK)</span>
                    <span className="font-mono font-bold text-white text-sm">
                      {showUnmasked ? activeKPM.nik : maskNIK(activeKPM.nik)}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-500 block mb-1">Nomor Kartu Keluarga (KK)</span>
                    <span className="font-mono font-bold text-white text-sm">
                      {showUnmasked ? activeKPM.noKK : maskKK(activeKPM.noKK)}
                    </span>
                  </div>
                </div>

                {/* Status Badges */}
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-500 block mb-1">Status Kepesertaan Bansos</span>
                    <span className="font-semibold text-emerald-400 text-sm">
                      {activeKPM.statusBansos} ({activeKPM.lamaBantuanTahun} Tahun)
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                    <span className="text-slate-500 block mb-1">Predikat Evaluasi Graduasi</span>
                    <span className={`font-semibold text-sm ${
                      activeKPM.statusGraduasi === 'Tergraduasi Mandiri'
                        ? 'text-emerald-400'
                        : activeKPM.statusGraduasi === 'Kandidat Graduasi'
                        ? 'text-amber-400'
                        : 'text-slate-400'
                    }`}>
                      {activeKPM.statusGraduasi} (Skor: {activeKPM.skorKemandirian})
                    </span>
                  </div>
                </div>

                {/* Officer Notes */}
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-1">
                  <span className="text-slate-500 block font-semibold">Catatan Evaluasi Pendamping Sosial:</span>
                  <p className="text-slate-300 leading-relaxed italic">
                    "{activeKPM.catatanPendamping}"
                  </p>
                  <span className="text-[10px] text-slate-500 block pt-1">
                    Terakhir ditinjau: {activeKPM.terakhirDitinjau}
                  </span>
                </div>

                {/* Graduation Ready Certificate Simulation */}
                {activeKPM.statusGraduasi === 'Tergraduasi Mandiri' && (
                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-600/40 flex items-start gap-3">
                    <Award className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-xs text-emerald-200">
                      <strong className="text-white block font-semibold mb-0.5">
                        Sertifikasi Graduasi Mandiri Terpenuhi
                      </strong>
                      Keluarga ini telah memenuhi seluruh kriteria kelulusan dan mandiri secara finansial. Direkomendasikan mendapatkan sertifikat graduasi resmi Dinas Sosial.
                    </div>
                  </div>
                )}

              </div>
            ) : (
              <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 text-center text-slate-400 text-sm">
                Silakan cari NIK atau klik salah satu sampel di atas.
              </div>
            )}
          </div>

          {/* Right Column: Interactive 4-Pillars Simulation Calculator */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Sliders className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-base font-bold text-white">
                    Simulasi Parameter Kelayakan Graduasi
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400">
                  Total: {calculatedGraduation.totalScore}/100
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Geser nilai indikator di bawah untuk melihat bagaimana perubahan pendapatan, hunian, dan keterampilan wirausaha mempengaruhi kelulusan KPM:
              </p>

              {/* Slider 1: Pendapatan */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">1. Pendapatan & Ketahanan Pangan (Bobot 35%)</span>
                  <span className="font-mono text-emerald-400 font-bold">{customCriteria.incomeScore}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={customCriteria.incomeScore}
                  onChange={(e) => setCustomCriteria({ ...customCriteria, incomeScore: Number(e.target.value) })}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              {/* Slider 2: Hunian */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">2. Kelayakan Tempat Tinggal & Sanitasi (Bobot 20%)</span>
                  <span className="font-mono text-emerald-400 font-bold">{customCriteria.housingScore}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={customCriteria.housingScore}
                  onChange={(e) => setCustomCriteria({ ...customCriteria, housingScore: Number(e.target.value) })}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              {/* Slider 3: Usaha Mandiri */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">3. Usaha Mandiri & Keterampilan Vokasi (Bobot 30%)</span>
                  <span className="font-mono text-emerald-400 font-bold">{customCriteria.businessCapabilityScore}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={customCriteria.businessCapabilityScore}
                  onChange={(e) => setCustomCriteria({ ...customCriteria, businessCapabilityScore: Number(e.target.value) })}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              {/* Slider 4: Pendidikan & Kesehatan */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">4. Akses Pendidikan & Kesehatan Anak (Bobot 15%)</span>
                  <span className="font-mono text-emerald-400 font-bold">{customCriteria.educationHealthScore}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={customCriteria.educationHealthScore}
                  onChange={(e) => setCustomCriteria({ ...customCriteria, educationHealthScore: Number(e.target.value) })}
                  className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
              </div>

              {/* Calculation Output Box */}
              <div className={`p-4 rounded-xl border text-xs space-y-2 ${
                calculatedGraduation.status === 'Tergraduasi Mandiri'
                  ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
                  : calculatedGraduation.status === 'Kandidat Graduasi'
                  ? 'bg-amber-950/40 border-amber-500/50 text-amber-200'
                  : 'bg-slate-950 border-slate-800 text-slate-300'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-white">
                    Hasil Simulasi: {calculatedGraduation.status}
                  </span>
                  <span className="font-mono text-base font-extrabold">
                    {calculatedGraduation.totalScore} Poin
                  </span>
                </div>
                <p className="leading-relaxed">
                  {calculatedGraduation.recommendation}
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
