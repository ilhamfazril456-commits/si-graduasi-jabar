import React from 'react';
import type { OfficialModuleId } from '../types';
import { OFFICIAL_MODULES_LIST } from '../data/officialData';
import { 
  ArrowLeft, 
  MapPin, 
  Users, 
  CalendarCheck, 
  Activity, 
  HeartHandshake, 
  History, 
  BarChart3, 
  Award, 
  FileText,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface ModulePlaceholderViewProps {
  moduleId: OfficialModuleId;
  onBackToDashboard: () => void;
}

export const ModulePlaceholderView: React.FC<ModulePlaceholderViewProps> = ({
  moduleId,
  onBackToDashboard,
}) => {
  const currentModule = OFFICIAL_MODULES_LIST.find((m) => m.id === moduleId) || OFFICIAL_MODULES_LIST[0];

  const getModuleDetails = (id: OfficialModuleId) => {
    switch (id) {
      case 'pemetaan-survei':
        return {
          title: 'Pemetaan dan Survei Desa',
          badgeBidang: 'Dinas Sosial Provinsi & Dinsos Kab/Kota',
          description: 'Mencatat proses persiapan, penentuan desa prioritas, pelaksanaan survei lapangan, profil kondisi sosial ekonomi, pemetaan potensi desa, dan verifikasi data hasil survei.',
          features: [
            'Penentuan desa atau kelurahan prioritas',
            'Pencatatan koordinasi dengan Dinas Sosial kabupaten/kota',
            'Penjadwalan dan pencatatan pelaksanaan survei lapangan',
            'Profil dan kondisi sosial ekonomi masyarakat serta data PPKS',
            'Pemetaan potensi sumber daya desa (pertanian, pangan, kerajinan)',
            'Unggah dokumen hasil survei dan status verifikasi'
          ]
        };
      case 'data-sasaran':
        return {
          title: 'Data Sasaran dan Penerima Manfaat',
          badgeBidang: 'Keterpaduan SADAJABAR',
          description: 'Mengelola basis data keluarga, individu, kelompok, dan komunitas yang menjadi sasaran atau penerima manfaat dengan proteksi NIK/KK sesuai UU Perlindungan Data Pribadi.',
          features: [
            'Profil keluarga dan anggota keluarga (Single Family Profile)',
            'Identitas individu penerima manfaat dengan proteksi NIK/KK',
            'Alamat dan wilayah domisili terverifikasi Capil',
            'Kondisi sosial ekonomi, kebutuhan dasar, dan permasalahan PPKS',
            'Keterkaitan satu data dengan ekosistem SADAJABAR',
            'Status verifikasi data dan pencegahan duplikasi'
          ]
        };
      case 'perencanaan':
        return {
          title: 'Perencanaan Intervensi Sosial',
          badgeBidang: 'Lintas 4 Bidang Teknis Dinsos',
          description: 'Menentukan bentuk intervensi berdasarkan hasil pemetaan, survei desa, dan asesmen kebutuhan agar tepat sasaran dan selaras dengan potensi lokal.',
          features: [
            'Pemilihan program strategis (Terpadu / Mandiri)',
            'Penentuan sasaran intervensi (individu, keluarga, kelompok)',
            'Penentuan jenis bantuan, pelayanan, atau pendampingan vokasi',
            'Kesesuaian intervensi dengan potensi ekonomi desa',
            'Penetapan rencana kegiatan, jadwal waktu, lokasi, dan pelaksana',
            'Pencatatan rencana tindak lanjut (RTL)'
          ]
        };
      case 'realisasi':
        return {
          title: 'Pelaksanaan dan Realisasi Intervensi',
          badgeBidang: 'Bidang Rehsos · Dayasos · Linjamsos · PFM',
          description: 'Mencatat pelaksanaan kegiatan intervensi nyata di lapangan oleh masing-masing bidang, baik yang dilaksanakan secara terpadu maupun mandiri.',
          features: [
            'Pencatatan nama kegiatan dan jenis program pengampu',
            'Lokasi dan waktu pelaksanaan di tingkat desa/kecamatan',
            'Daftar sasaran dan penerima manfaat yang menerima bantuan',
            'Jumlah dan bentuk bantuan (sembako, alat produksi, bibit, KUR)',
            'Dokumentasi foto kegiatan lapangan berkualitas tinggi',
            'Laporan hasil pelaksanaan kegiatan'
          ]
        };
      case 'kasus-rujukan':
        return {
          title: 'Manajemen Kasus dan Rujukan (Teman Sosial)',
          badgeBidang: 'Bidang Rehabilitasi Sosial (Rehsos)',
          description: 'Mendukung penanganan orang terlantar, migran korban eksploitasi, penelusuran keluarga, rujukan panti pemerintah/swasta, hingga fasilitasi pemulangan antardaerah.',
          features: [
            'Pencatatan identitas, kronologi kasus, dan kondisi saat ditemukan',
            'Hasil asesmen psikososial dan kebutuhan darurat',
            'Penelusuran dan pencarian keluarga (family tracing)',
            'Pencatatan reunifikasi atau pemulangan ke keluarga',
            'Pencatatan rujukan ke panti sosial atau lembaga rehabilitasi',
            'Fasilitasi pemulangan orang terlantar luar Jabar (penjemputan bandara)'
          ]
        };
      case 'riwayat':
        return {
          title: 'Riwayat Intervensi Terpadu',
          badgeBidang: 'Sistem Keterpaduan Satu Data',
          description: 'Menyajikan seluruh riwayat bantuan, pelayanan, dan pendampingan yang pernah diterima satu keluarga atau individu dari berbagai program tanpa pencatatan ganda.',
          features: [
            'Riwayat kronologis intervensi per Nomor Kartu Keluarga (KK)',
            'Jejak bantuan lintas bidang (Rehsos, Dayasos, Linjamsos, PFM)',
            'Mekanisme pemadanan NIK otomatis mencegah intervensi tumpang tindih',
            'Rekam jejak perubahan kondisi penerima manfaat antar-waktu',
            'Audit jejak digital perubahan data petugas'
          ]
        };
      case 'monev':
        return {
          title: 'Monitoring dan Evaluasi',
          badgeBidang: 'Bidang Evaluasi & Pelaporan Dinsos',
          description: 'Memantau perkembangan penerima manfaat dan hasil kegiatan secara berkala untuk mengukur pergeseran dari sekadar output menuju capaian outcome nyata.',
          features: [
            'Pembaruan kondisi sosial dan ekonomi keluarga secara berkala',
            'Perkembangan pekerjaan, pendapatan, dan omzet usaha',
            'Perkembangan keterampilan dan kapasitas penerima bantuan',
            'Perubahan kondisi lingkungan dan partisipasi gotong royong',
            'Evaluasi pencapaian indikator output dan outcome 5 program',
            'Identifikasi kebutuhan intervensi lanjutan'
          ]
        };
      case 'evaluasi-graduasi':
        return {
          title: 'Evaluasi dan Verifikasi Graduasi',
          badgeBidang: 'Dinas Sosial Provinsi & Tim Verifikasi',
          description: 'Melakukan pengukuran kondisi awal vs kondisi terkini, penilaian indikator kemandirian keluarga, dan verifikasi status graduasi keluar dari kerentanan kemiskinan.',
          features: [
            'Pengukuran skor kondisi awal sebelum intervensi',
            'Penilaian indikator kemandirian (pendapatan, aset, usaha, ketahanan)',
            'Pengusulan keluarga yang memenuhi ambang batas graduasi',
            'Verifikasi faktual hasil penilaian oleh tim independen Dinsos',
            'Pencatatan surat penetapan status Tergraduasi Mandiri',
            'Pemantauan pascagraduasi mencegah kembalinya kerentanan (relapse)'
          ]
        };
      case 'laporan':
        return {
          title: 'Laporan dan Rekapitulasi Otomatis',
          badgeBidang: 'Bahan Kebijakan Pimpinan & Diskominfo',
          description: 'Menyediakan pelaporan otomatis berbasis data terverifikasi untuk koordinasi lintas sektor, evaluasi tahunan, dan perumusan kebijakan penanggulangan kemiskinan.',
          features: [
            'Laporan pemetaan dan survei desa se-Jawa Barat',
            'Laporan sasaran dan penerima manfaat unik',
            'Laporan realisasi capaian 5 program strategis',
            'Laporan penanganan kasus orang terlantar & rujukan',
            'Laporan keluarga yang diusulkan dan diverifikasi graduasi',
            'Ekspor laporan resmi berstandar format Pemprov Jabar'
          ]
        };
      default:
        return {
          title: currentModule.name,
          badgeBidang: 'Dinas Sosial Jawa Barat',
          description: 'Modul sistem SI-GRADUASI SADAJABAR.',
          features: []
        };
    }
  };

  const details = getModuleDetails(moduleId);

  return (
    <div className="w-full p-4 sm:p-6 pb-28 sm:pb-12 space-y-5 sm:space-y-6 animate-in fade-in duration-150">
      
      {/* 1. Header with Single '<-' Button in Top-Left Corner */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToDashboard}
            className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 flex items-center justify-center transition-colors cursor-pointer shrink-0 shadow-2xs"
            aria-label="Kembali ke Beranda"
            title="Kembali ke Beranda"
          >
            <ArrowLeft className="w-5 h-5 text-slate-800" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {details.title}
              </h1>
              <span className="text-[10px] font-semibold text-[#008444] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                SADAJABAR
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
              Pengampu: {details.badgeBidang}
            </p>
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

      {/* 2. Top Filter & Search Bar */}
      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-slate-600 font-semibold">Kabupaten/Kota:</span>
            <select className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:border-[#008444] cursor-pointer">
              <option value="Semua">Semua Wilayah</option>
              <option value="Kab. Bandung Barat">Kab. Bandung Barat</option>
              <option value="Kab. Bandung">Kab. Bandung</option>
              <option value="Kab. Garut">Kab. Garut</option>
              <option value="Kab. Sukabumi">Kab. Sukabumi</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-slate-600 font-semibold">Status:</span>
            <select className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:border-[#008444] cursor-pointer">
              <option value="Semua">Semua Status</option>
              <option value="Aktif">Terverifikasi</option>
              <option value="Dalam Proses">Dalam Proses</option>
              <option value="Menunggu">Menunggu Verifikasi</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder={`Cari di ${details.title}...`}
            className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#008444] min-w-[220px]"
          />
          <button className="px-3.5 py-1.5 rounded-lg bg-[#008444] hover:bg-emerald-700 text-white font-semibold text-xs transition-colors cursor-pointer">
            Cari
          </button>
        </div>
      </div>

      {/* 3. Clean Empty Structured Canvas */}
      <div className="rounded-2xl bg-white border border-slate-200 shadow-2xs overflow-hidden flex flex-col min-h-[420px]">
        {/* Table Mock Header */}
        <div className="px-6 py-3.5 bg-slate-50/80 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-slate-600">
          <span>Tampilan Awal Modul Operasional</span>
          <span className="text-[11px] font-medium text-slate-400">
            Dinas Sosial Provinsi Jawa Barat · SADAJABAR
          </span>
        </div>

        {/* Empty Canvas Ready for Technical Content */}
        <div className="flex-1 p-12 flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400">
            <ShieldCheck className="w-8 h-8 text-[#008444]" />
          </div>

          <div className="space-y-1">
            <h2 className="text-base font-bold text-slate-900">
              {details.title}
            </h2>
            <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
              Tampilan awal modul telah disiapkan sesuai surat rancangan resmi. Sesuai prioritas, area konten ini siap untuk integrasi data operasional.
            </p>
          </div>

          <div className="pt-2 text-xs text-slate-400 font-medium">
            Dinas Sosial Provinsi Jawa Barat · SADAJABAR
          </div>
        </div>

      </div>

    </div>
  );
};
