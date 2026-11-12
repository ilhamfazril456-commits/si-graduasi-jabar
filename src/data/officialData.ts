import type { 
  DashboardKPIs, 
  ProgramPerformanceSummary, 
  RegionalSummary,
  ProgramItem 
} from '../types';

export const OFFICIAL_DASHBOARD_KPIS: DashboardKPIs = {
  desaTerpetakan: 142,
  desaTotalTarget: 200,
  penerimaManfaatUnik: 4820,
  totalIntervensi: 6950,
  pmBerkembangPositif: 3140,
  pmBerkembangPersen: 65.1,
  kasusTertangani: 284,
  kasusTotal: 310,
  keluargaGraduasi: 512,
  keluargaGraduasiTarget: 800
};

export const OFFICIAL_5_PROGRAMS_SUMMARY: ProgramPerformanceSummary[] = [
  {
    id: 'kampung-sosial',
    name: 'Kampung Sosial',
    bidangPengampu: 'Bidang Rehabilitasi Sosial (Rehsos)',
    bidangKode: 'REHSOS',
    outputLabel: 'Keluarga Penerima Kebutuhan Dasar & Sembako',
    outputRealisasi: 2450,
    outputTarget: 3000,
    outputSatuan: 'KK',
    outcomeLabel: 'Pemenuhan Kebutuhan Dasar & Berkurangnya Beban Pengeluaran',
    outcomeStatus: '81.6% Kebutuhan pangan dasar tercukupi secara mandiri',
    polaPelaksanaan: 'Terpadu',
    fokusKegiatan: 'Pemberian sembako, intervensi nutrisi keluarga rentan, dan klaster kawasan desa percontohan.'
  },
  {
    id: 'teman-sosial',
    name: 'Teman Sosial',
    bidangPengampu: 'Bidang Rehabilitasi Sosial (Rehsos)',
    bidangKode: 'REHSOS',
    outputLabel: 'Kasus Orang Terlantar, Migran & Rujukan Ditangani',
    outputRealisasi: 284,
    outputTarget: 310,
    outputSatuan: 'Kasus',
    outcomeLabel: 'Kasus Tertangani, Perlindungan & Keberfungsian Sosial Pulih',
    outcomeStatus: '91.6% Kasus tereunifikasi ke keluarga atau dirujuk ke panti sosial',
    polaPelaksanaan: 'Mandiri',
    fokusKegiatan: 'Asesmen darurat, penelusuran keluarga, reunifikasi, penjemputan bandara luar provinsi, dan rujukan panti.'
  },
  {
    id: 'kawal-bansos',
    name: 'Kawal Bansos',
    bidangPengampu: 'Bidang Penanganan Fakir Miskin (PFM)',
    bidangKode: 'PFM',
    outputLabel: 'Kegiatan Pengawalan & Pemantauan Penyaluran Bansos',
    outputRealisasi: 185,
    outputTarget: 220,
    outputSatuan: 'Kegiatan Titik Salur',
    outcomeLabel: 'Peningkatan Ketepatan Sasaran & Penanganan Masalah Penyaluran',
    outcomeStatus: '98.4% Penyaluran diverifikasi tepat sasaran bebas pungutan liar',
    polaPelaksanaan: 'Mandiri',
    fokusKegiatan: 'Pengawalan bansos pusat/daerah, audit lapangan, pemadanan data penerima, dan tindak lanjut aduan.'
  },
  {
    id: 'jalan-jalan-sosial',
    name: 'Jalan-Jalan Sosial (JJS)',
    bidangPengampu: 'Bidang Perlindungan dan Jaminan Sosial (Linjamsos)',
    bidangKode: 'LINJAMSOS',
    outputLabel: 'Kegiatan Kepedulian Lingkungan & Warga Terlibat',
    outputRealisasi: 1420,
    outputTarget: 1800,
    outputSatuan: 'Warga / 96 Titik',
    outcomeLabel: 'Kondisi Lingkungan Membaik & Gotong Royong Berkelanjutan',
    outcomeStatus: '84.0% Titik sasaran terpelihara secara komunal oleh rukun warga',
    polaPelaksanaan: 'Terpadu',
    fokusKegiatan: 'Pembersihan aliran sungai, penanaman penghijauan/taman desa, dan edukasi ketahanan lingkungan warga.'
  },
  {
    id: 'modal-sosial',
    name: 'Modal Sosial',
    bidangPengampu: 'Bidang Pemberdayaan Sosial (Dayasos)',
    bidangKode: 'DAYASOS',
    outputLabel: 'Penerima Bantuan Usaha Produktif, Alat & Vokasi',
    outputRealisasi: 1260,
    outputTarget: 1500,
    outputSatuan: 'Kelompok / KPM',
    outcomeLabel: 'Peningkatan Kapasitas, Produksi Bertambah & Pendapatan Naik',
    outcomeStatus: '68.5% KPM binaan mencatat omzet di atas garis kemiskinan BPS',
    polaPelaksanaan: 'Berkelanjutan',
    fokusKegiatan: 'Bantuan peralatan produksi pangan/tani/ternak ayam, pelatihan vokasi, kemitraan KUR, dan pemasaran produk.'
  }
];

export const OFFICIAL_REGIONAL_SUMMARIES: RegionalSummary[] = [
  {
    kabupatenKota: 'Kabupaten Bandung',
    desaTerpetakan: 18,
    penerimaManfaat: 640,
    intervensiBerjalan: 920,
    kasusSelesai: 38,
    kandidatGraduasi: 120,
    keluargaGraduasi: 78
  },
  {
    kabupatenKota: 'Kabupaten Garut',
    desaTerpetakan: 22,
    penerimaManfaat: 780,
    intervensiBerjalan: 1110,
    kasusSelesai: 42,
    kandidatGraduasi: 155,
    keluargaGraduasi: 94
  },
  {
    kabupatenKota: 'Kabupaten Bogor',
    desaTerpetakan: 16,
    penerimaManfaat: 590,
    intervensiBerjalan: 840,
    kasusSelesai: 51,
    kandidatGraduasi: 104,
    keluargaGraduasi: 62
  },
  {
    kabupatenKota: 'Kabupaten Cianjur',
    desaTerpetakan: 19,
    penerimaManfaat: 610,
    intervensiBerjalan: 890,
    kasusSelesai: 34,
    kandidatGraduasi: 118,
    keluargaGraduasi: 71
  },
  {
    kabupatenKota: 'Kabupaten Cirebon',
    desaTerpetakan: 14,
    penerimaManfaat: 490,
    intervensiBerjalan: 710,
    kasusSelesai: 29,
    kandidatGraduasi: 92,
    keluargaGraduasi: 58
  },
  {
    kabupatenKota: 'Kabupaten Tasikmalaya',
    desaTerpetakan: 15,
    penerimaManfaat: 510,
    intervensiBerjalan: 730,
    kasusSelesai: 27,
    kandidatGraduasi: 88,
    keluargaGraduasi: 54
  },
  {
    kabupatenKota: 'Kabupaten Karawang',
    desaTerpetakan: 13,
    penerimaManfaat: 440,
    intervensiBerjalan: 640,
    kasusSelesai: 24,
    kandidatGraduasi: 81,
    keluargaGraduasi: 47
  },
  {
    kabupatenKota: 'Kabupaten Sukabumi',
    desaTerpetakan: 15,
    penerimaManfaat: 480,
    intervensiBerjalan: 680,
    kasusSelesai: 26,
    kandidatGraduasi: 86,
    keluargaGraduasi: 48
  },
  {
    kabupatenKota: 'Kabupaten Subang',
    desaTerpetakan: 10,
    penerimaManfaat: 280,
    intervensiBerjalan: 430,
    kasusSelesai: 13,
    kandidatGraduasi: 52,
    keluargaGraduasi: 0
  }
];

export const OFFICIAL_MODULES_LIST = [
  { id: 'dashboard', name: 'Dashboard Eksekutif', shortName: 'Dashboard' },
  { id: 'pemetaan-survei', name: 'Pemetaan & Survei Desa', shortName: 'Survei Desa' },
  { id: 'data-sasaran', name: 'Data Sasaran & Penerima Manfaat', shortName: 'Data Sasaran' },
  { id: 'perencanaan', name: 'Perencanaan Intervensi', shortName: 'Perencanaan' },
  { id: 'realisasi', name: 'Pelaksanaan & Realisasi Intervensi', shortName: 'Realisasi' },
  { id: 'kasus-rujukan', name: 'Manajemen Kasus & Rujukan', shortName: 'Kasus Rujukan' },
  { id: 'riwayat', name: 'Riwayat Intervensi Terpadu', shortName: 'Riwayat' },
  { id: 'monev', name: 'Monitoring & Evaluasi', shortName: 'Monev' },
  { id: 'evaluasi-graduasi', name: 'Evaluasi & Verifikasi Graduasi', shortName: 'Graduasi' },
  { id: 'laporan', name: 'Laporan & Rekapitulasi Otomatis', shortName: 'Laporan' }
] as const;
