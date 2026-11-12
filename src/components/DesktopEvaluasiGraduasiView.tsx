import React, { useState } from 'react';
import { Search, CheckCircle2, X, ArrowLeft } from 'lucide-react';

interface DesktopEvaluasiGraduasiViewProps {
  onBack?: () => void;
}

export const DesktopEvaluasiGraduasiView: React.FC<DesktopEvaluasiGraduasiViewProps> = ({ onBack }) => {
  const [selectedFamilyId, setSelectedFamilyId] = useState(1);
  const [searchName, setSearchName] = useState('');
  const [isGraduated, setIsGraduated] = useState(false);

  const familyList = [
    {
      id: 1,
      nama: 'Ahmad Subarjo',
      wilayah: 'Kab. Bandung, Ciparay',
      kondisi: 'Mandiri',
      status: 'Terverifikasi Graduasi',
      statusType: 'success',
      sebelum: 'Pra-Sejahtera (Rp 1.200.000)',
      sesudah: 'Mandiri Sejahtera (Rp 3.500.000)',
      skor: 86,
      skorNote: 'Sangat Layak Graduasi',
    },
    {
      id: 2,
      nama: 'Siti Aminah',
      wilayah: 'Kota Cimahi, Cimahi Tengah',
      kondisi: 'Sangat Berkembang',
      status: 'Diusulkan Verifikasi',
      statusType: 'warning',
      sebelum: 'Pra-Sejahtera (Rp 950.000)',
      sesudah: 'Berkembang (Rp 2.400.000)',
      skor: 74,
      skorNote: 'Kandidat Verifikasi',
    },
    {
      id: 3,
      nama: 'Dadang Ruhiyat',
      wilayah: 'Kab. Garut, Kadungora',
      kondisi: 'Berkembang',
      status: 'Dalam Pemantauan',
      statusType: 'info',
      sebelum: 'Pra-Sejahtera (Rp 1.100.000)',
      sesudah: 'Transisi (Rp 2.100.000)',
      skor: 62,
      skorNote: 'Dalam Pemantauan Monev',
    },
    {
      id: 4,
      nama: 'Kosasih',
      wilayah: 'Kab. Bandung, Baleendah',
      kondisi: 'Mandiri',
      status: 'Terverifikasi Graduasi',
      statusType: 'success',
      sebelum: 'Pra-Sejahtera (Rp 1.300.000)',
      sesudah: 'Mandiri Sejahtera (Rp 3.800.000)',
      skor: 89,
      skorNote: 'Sangat Layak Graduasi',
    },
  ];

  const activeFamily = familyList.find(f => f.id === selectedFamilyId) || familyList[0];

  return (
    <div className="w-full p-4 sm:p-6 pb-28 sm:pb-12 space-y-5">
      
      {/* Breadcrumb & Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
            {onBack ? (
              <button 
                onClick={onBack} 
                className="hover:text-[#008444] transition-colors cursor-pointer"
              >
                Kembali
              </button>
            ) : (
              <span>Beranda</span>
            )}
            <span aria-hidden="true">/</span>
            <span className="text-slate-800 font-semibold">Evaluasi & Graduasi</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mt-1">
            Evaluasi & Graduasi Keluarga
          </h1>
        </div>

        {onBack && (
          <button
            onClick={onBack}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali ke Beranda</span>
          </button>
        )}
      </div>

      {/* Filter Row */}
      <div className="flex flex-wrap items-center gap-3">
        <select className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs focus:outline-none focus:border-[#008444] min-w-[150px]">
          <option>Kabupaten/Kota</option>
          <option>Kab. Bandung</option>
          <option>Kota Cimahi</option>
          <option>Kab. Garut</option>
        </select>

        <select className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs focus:outline-none focus:border-[#008444] min-w-[140px]">
          <option>Kecamatan</option>
          <option>Ciparay</option>
          <option>Cimahi Tengah</option>
          <option>Kadungora</option>
          <option>Baleendah</option>
        </select>

        <select className="px-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs focus:outline-none focus:border-[#008444] min-w-[140px]">
          <option>Status</option>
          <option>Semua Status</option>
          <option>Terverifikasi Graduasi</option>
          <option>Diusulkan Verifikasi</option>
          <option>Dalam Pemantauan</option>
        </select>

        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="Cari Nama Kepala Keluarga..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 shadow-2xs focus:outline-none focus:border-[#008444]"
          />
        </div>
      </div>

      {/* Split Table & Detail Panel (Matching 1794458068658_44b630e6.jpg) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        
        {/* Left: Table Daftar Keluarga Sasaran (Full on mobile, 7 cols on desktop) */}
        <div className="w-full lg:col-span-7 rounded-2xl bg-white border border-slate-200 shadow-2xs overflow-hidden">
          <div className="p-4 border-b border-slate-100">
            <h2 className="text-sm font-bold text-slate-900">
              Daftar Keluarga Sasaran
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                <tr>
                  <th className="py-3 px-3.5 w-12 text-center">No</th>
                  <th className="py-3 px-4">Nama Kepala Keluarga</th>
                  <th className="py-3 px-4">Alamat / Wilayah</th>
                  <th className="py-3 px-4">Kondisi Akhir</th>
                  <th className="py-3 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {familyList.map((fam, idx) => {
                  const isSelected = selectedFamilyId === fam.id;
                  return (
                    <tr
                      key={fam.id}
                      onClick={() => setSelectedFamilyId(fam.id)}
                      className={`cursor-pointer transition-colors ${
                        isSelected ? 'bg-emerald-50/60 font-semibold' : 'hover:bg-slate-50/80'
                      }`}
                    >
                      <td className="py-3 px-3.5 text-center text-slate-400 font-mono">
                        {idx + 1}.
                      </td>
                      <td className="py-3 px-4 text-slate-900">
                        {fam.nama}
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        {fam.wilayah}
                      </td>
                      <td className="py-3 px-4 text-slate-700">
                        {fam.kondisi}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {fam.statusType === 'success' && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#008444] text-white">
                            {fam.status}
                          </span>
                        )}
                        {fam.statusType === 'warning' && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-white">
                            {fam.status}
                          </span>
                        )}
                        {fam.statusType === 'info' && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-600 text-white">
                            {fam.status}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Detail Evaluasi & Mandiri Panel (Full on mobile, 5 cols on desktop) */}
        <div className="w-full lg:col-span-5 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-4">
          
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h2 className="text-sm font-bold text-slate-900 tracking-tight">
              Detail Evaluasi & Mandiri
            </h2>
            <button className="text-slate-400 hover:text-slate-700 p-1">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Family Info */}
          <div>
            <span className="text-[11px] text-slate-500 block">Informasi Keluarga</span>
            <h3 className="text-base font-extrabold text-slate-900 leading-tight">
              {activeFamily.nama}
            </h3>
            <p className="text-xs text-slate-500">
              {activeFamily.wilayah}
            </p>
          </div>

          {/* Sebelum vs Sesudah Split Box (Matching screenshot) */}
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-slate-700 block">
              Perkembangan Sosial Ekonomi (Sebelum vs Sesudah Intervensi)
            </span>

            <div className="flex items-center gap-2">
              {/* Sebelum */}
              <div className="flex-1 p-3 rounded-xl bg-rose-50 border border-rose-200/80 text-xs text-rose-900">
                <span className="block font-bold text-rose-800">Sebelum:</span>
                <span className="text-[11px] block mt-0.5">{activeFamily.sebelum}</span>
              </div>

              <span className="text-xs font-bold text-slate-400">VS</span>

              {/* Sesudah */}
              <div className="flex-1 p-3 rounded-xl bg-emerald-50 border border-emerald-200/80 text-xs text-emerald-900">
                <span className="block font-bold text-emerald-800">Sesudah:</span>
                <span className="text-[11px] block mt-0.5">{activeFamily.sesudah}</span>
              </div>
            </div>
          </div>

          {/* Skor Kemandirian Bar */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-700">Skor Kemandirian</span>
              <span className="font-mono font-bold text-[#008444]">{activeFamily.skor}%</span>
            </div>

            <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
              <div 
                className="h-full bg-[#008444] rounded-full transition-all"
                style={{ width: `${activeFamily.skor}%` }}
              />
            </div>
            <p className="text-[11px] text-[#008444] font-bold text-right">
              {activeFamily.skorNote}
            </p>
          </div>

          {/* Indikator Kelulusan Checklist */}
          <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
            <span className="font-bold text-slate-900 block">
              Indikator Kelulusan (Graduasi)
            </span>

            <div className="space-y-1.5 text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008444] shrink-0" />
                <span>Peningkatan Pendapatan Keluarga</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008444] shrink-0" />
                <span>Memiliki Pekerjaan / Usaha Stabil</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008444] shrink-0" />
                <span>Kemampuan Memenuhi Kebutuhan Dasar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008444] shrink-0" />
                <span>Peningkatan Kapasitas & Keterampilan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008444] shrink-0" />
                <span>Penurunan Ketergantungan Bansos</span>
              </div>
            </div>
          </div>

          {/* Timeline Intervensi */}
          <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
            <span className="font-bold text-slate-900 block">
              Riwayat & Timeline Intervensi
            </span>
            <div className="flex items-center gap-2 text-[11px]">
              <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-semibold">
                Kampung Sosial
              </span>
              <span className="text-slate-400">→</span>
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold">
                Modal Sosial
              </span>
            </div>
          </div>

          {/* Buttons: Batalkan & Verifikasi Graduasi */}
          <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
            <button className="flex-1 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer">
              Batalkan
            </button>
            <button 
              onClick={() => setIsGraduated(true)}
              className="flex-1 py-2 rounded-xl bg-[#008444] hover:bg-emerald-700 text-white font-semibold text-xs transition-colors cursor-pointer shadow-xs"
            >
              {isGraduated ? 'Telah Diverifikasi' : 'Verifikasi Graduasi'}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
