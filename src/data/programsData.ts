import type { ProgramItem } from '../types';

export const PROGRAMS_DATA: ProgramItem[] = [
  {
    id: 'kampung-sosial',
    name: 'Kampung Sosial',
    badge: 'Program 01',
    subtitle: 'Pemberdayaan Wilayah Komunal',
    summary: 'Intervensi berbasis klaster wilayah percontohan desa/kelurahan berdaya, mengintegrasikan sanitasi sehat, bank sampah komunal, dan sentra ekonomi kreatif warga.',
    iconName: 'Building2',
    logoUrl: '/assets/logos/kampung-sosial.jpg',
    bidang: 'Bidang Rehabilitasi Sosial (Rehsos)',
    themeColor: 'sky',
    bgGradient: 'from-sky-950/90 to-slate-900',
    isPlaceholder: true,
    phaseNote: 'Cangkang Arsitektur Siap · Konten Teknis Menunggu Input Pembimbing PKL',
    expectedImpact: 'Menciptakan ekosistem lingkungan yang suportif sehingga pengentasan kemiskinan berlangsung secara komunal.',
    pillars: [
      {
        title: 'Sentra Produksi Komunal',
        description: 'Pusat produksi bersama untuk efisiensi biaya bahan baku dan standarisasi mutu produk KPM.',
        metricLabel: 'Klaster Usaha',
        targetUnit: 'Tingkat Desa'
      },
      {
        title: 'Ekonomi Sirkular & Bank Sampah',
        description: 'Pengelolaan sampah terpadu yang menghasilkan tabungan kas keluarga bagi warga KPM.',
        metricLabel: 'Unit Bank Sampah',
        targetUnit: '100% Aktif'
      },
      {
        title: 'Revitalisasi Rumah Sehat Terpadu',
        description: 'Program bedah rumah terpadu dengan standar ventilasi, jamban, dan pencahayaan sehat.',
        metricLabel: 'Standar Hunian',
        targetUnit: 'Kemenkes SNI'
      },
      {
        title: 'Koperasi Graduasi Berkah',
        description: 'Wadah simpan pinjam dan pengadaan sembako murah yang dikelola oleh anggota tergraduasi.',
        metricLabel: 'Legalitas Badan Usaha',
        targetUnit: 'Kemenkumham'
      }
    ]
  },
  {
    id: 'teman-sosial',
    name: 'Teman Sosial',
    badge: 'Program 02',
    subtitle: 'Pendampingan & Mentorship KPM',
    summary: 'Ekosistem mentorship yang menghubungkan keluarga pra-sejahtera dengan relawan dan alumni KPM yang telah sukses tergraduasi, guna membangun motivasi dan resiliensi mental.',
    iconName: 'HeartHandshake',
    logoUrl: '/assets/logos/teman-sosial.jpg',
    bidang: 'Bidang Rehabilitasi Sosial (Rehsos)',
    themeColor: 'teal',
    bgGradient: 'from-teal-900/90 to-slate-900',
    isPlaceholder: true,
    phaseNote: 'Cangkang Arsitektur Siap · Konten Teknis Menunggu Input Pembimbing PKL',
    expectedImpact: 'Mencegah KPM kembali jatuh miskin (relapse) melalui penguatan modal sosial dan dukungan moral sesama warga.',
    pillars: [
      {
        title: 'Mentorship Alumni Graduasi',
        description: 'Pendampingan langsung dari KPM yang telah mandiri secara ekonomi.',
        metricLabel: 'Rasio Mentor',
        targetUnit: '1 : 5 KPM'
      },
      {
        title: 'Konseling Psikososial Keluarga',
        description: 'Layanan konsultasi kesehatan mental, harmoni rumah tangga, dan motivasi anak sekolah.',
        metricLabel: 'Sesi Konseling',
        targetUnit: 'Tersedia 24/7'
      },
      {
        title: 'Kelompok Swadaya KPM (KSM)',
        description: 'Pembentukan kelompok arisan modal mikro dan gotong royong warga rukun tetangga.',
        metricLabel: 'Kelompok Terbina',
        targetUnit: 'Per Dusun'
      },
      {
        title: 'Hotline Sahabat Pendamping',
        description: 'Kanal komunikasi cepat bagi pendamping sosial PKH & TKSK untuk konsultasi kasus.',
        metricLabel: 'Respons Aduan',
        targetUnit: '< 24 Jam'
      }
    ]
  },
  {
    id: 'kawal-bansos',
    name: 'Kawal Bansos',
    badge: 'Program 03',
    subtitle: 'Pengawasan Bansos & Kanal Aduan',
    summary: 'Kanal transparansi publik untuk memantau data penerima bantuan, mengecek ketepatan sasaran, serta saluran pelaporan pengaduan penyimpangan bantuan sosial.',
    iconName: 'ShieldCheck',
    logoUrl: '/assets/logos/kawal-bansos.jpg',
    bidang: 'Bidang Penanganan Fakir Miskin (PFM)',
    themeColor: 'indigo',
    bgGradient: 'from-indigo-950/90 to-slate-900',
    isPlaceholder: true,
    phaseNote: 'Cangkang Arsitektur Siap · Konten Teknis Menunggu Input Pembimbing PKL',
    expectedImpact: 'Menjamin akuntabilitas penyaluran bantuan sosial 100% tepat sasaran dan bebas pungutan liar (zero fraud).',
    pillars: [
      {
        title: 'Cek DTKS & Kepesertaan Real-time',
        description: 'Fitur pencarian berbasis NIK dengan proteksi masking data privasi kependudukan.',
        metricLabel: 'Validasi Identitas',
        targetUnit: 'Kependudukan Capil'
      },
      {
        title: 'Whistleblower System Aduan Pungli',
        description: 'Kanal aduan anonim terenkripsi untuk melaporkan pemotongan dana atau salah sasaran.',
        metricLabel: 'Tiket Aduan',
        targetUnit: 'Tracking Status'
      },
      {
        title: 'Audit Penyaluran Publik Terbuka',
        description: 'Grafik agregat penyaluran bansos per kecamatan tanpa membocorkan data pribadi warga.',
        metricLabel: 'Transparansi',
        targetUnit: 'Keterbukaan Publik'
      },
      {
        title: 'Umpan Balik Kualitas Layanan',
        description: 'Survei kepuasan KPM terhadap sikap dan layanan petugas pendamping lapangan.',
        metricLabel: 'Indeks Kepuasan',
        targetUnit: 'Skala 1 - 5'
      }
    ]
  },
  {
    id: 'jalan-jalan-sosial',
    name: 'Jalan Jalan Sosial',
    badge: 'Program 04',
    subtitle: 'Survei & Edukasi Lapangan',
    summary: 'Gerakan penjangkauan langsung ke kantong-kantong pemukiman KPM untuk verifikasi faktual kelayakan sosial, evaluasi kondisi hunian, dan edukasi literasi kesejahteraan.',
    iconName: 'Compass',
    logoUrl: '/assets/logos/jalan-jalan-sosial.jpg',
    bidang: 'Bidang Perlindungan dan Jaminan Sosial (Linjamsos)',
    themeColor: 'emerald',
    bgGradient: 'from-emerald-900/90 to-slate-900',
    isPlaceholder: true,
    phaseNote: 'Cangkang Arsitektur Siap · Konten Teknis Menunggu Input Pembimbing PKL',
    expectedImpact: 'Meningkatkan akurasi data kemiskinan ekstrem hingga 99% dan mendeteksi potensi graduasi secara dini di tingkat RT/RW.',
    pillars: [
      {
        title: 'Pemetaan Geospasial KPM',
        description: 'Pencatatan titik koordinat rumah KPM dan verifikasi lingkungan fisik tempat tinggal.',
        metricLabel: 'Cakupan Wilayah',
        targetUnit: '100% Desa'
      },
      {
        title: 'Validasi Faktual Kondisi Hunian',
        description: 'Pengecekan lantai, dinding, atap, dan akses sanitasi air bersih untuk skor kemandirian.',
        metricLabel: 'Indeks Validasi',
        targetUnit: '36 Parameter'
      },
      {
        title: 'Edukasi Literasi Dasar Kesejahteraan',
        description: 'Bimbingan pola asuh gizi, pencegahan stunting, dan pengelolaan keuangan rumah tangga.',
        metricLabel: 'Sesi Pendampingan',
        targetUnit: '12 Modul'
      },
      {
        title: 'Evaluasi Kesiapan Graduasi Berkala',
        description: 'Penilaian berkala tiap 6 bulan untuk mengidentifikasi KPM yang siap naik kelas.',
        metricLabel: 'Frekuensi Asesmen',
        targetUnit: '2x / Tahun'
      }
    ]
  },
  {
    id: 'modal-sosial',
    name: 'Modal Sosial',
    badge: 'Program 05',
    subtitle: 'Akses Modal & Pelatihan Vokasi',
    summary: 'Pemberdayaan ekonomi produktif dengan menyalurkan fasilitasi bantuan modal kerja, alat produksi, serta inkubasi wirausaha mikro agar KPM memiliki sumber pendapatan tetap.',
    iconName: 'TrendingUp',
    logoUrl: '/assets/logos/modal-sosial.jpg',
    bidang: 'Bidang Pemberdayaan Sosial (Dayasos)',
    themeColor: 'amber',
    bgGradient: 'from-amber-950/90 to-slate-900',
    isPlaceholder: true,
    phaseNote: 'Cangkang Arsitektur Siap · Konten Teknis Menunggu Input Pembimbing PKL',
    expectedImpact: 'Mendorong rata-rata pendapatan keluarga KPM melampaui Garis Kemiskinan Nasional (BPS).',
    pillars: [
      {
        title: 'Inkubasi Wirausaha Mikro Mandiri',
        description: 'Pelatihan pembuatan produk olahan pangan, kerajinan tangan, dan jasa rumahan.',
        metricLabel: 'Kurikulum Pelatihan',
        targetUnit: '8 Bidang'
      },
      {
        title: 'Bantuan Stimulan Alat Kerja',
        description: 'Pemberian peralatan usaha seperti kompor gas produksi, gerobak, mesin jahit, dsb.',
        metricLabel: 'Paket Usaha',
        targetUnit: 'Tersertifikasi'
      },
      {
        title: 'Fasilitasi Akses KUR & Koperasi',
        description: 'Pendampingan administrasi perbankan untuk mendapatkan modal usaha bebas rentenir.',
        metricLabel: 'Akses Perbankan',
        targetUnit: 'Mitra Bank Himbara'
      },
      {
        title: 'Akses Pasar & Pemasaran Digital',
        description: 'Pelatihan berjualan online via e-commerce dan pameran bazar binaan Pemda.',
        metricLabel: 'Katalog Produk',
        targetUnit: 'Binaan Dinsos'
      }
    ]
  }
];
