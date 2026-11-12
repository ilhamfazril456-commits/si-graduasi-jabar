import type { SlideNewsItem } from '../types';

const createSvgBase64 = (svg: string): string => {
  if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
    return 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(svg.trim())));
  }
  return 'data:image/svg+xml;base64,' + Buffer.from(svg.trim()).toString('base64');
};

// Slide 1: Scenic West Java Highland Landscape (Emerald Hills & Mount Manglayang / Tangkuban Perahu)
const SLIDE_1_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 520" width="1200" height="520">
  <defs>
    <linearGradient id="sky1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0284C7" />
      <stop offset="40%" stop-color="#38BDF8" />
      <stop offset="70%" stop-color="#BAE6FD" />
      <stop offset="100%" stop-color="#F0FDF4" />
    </linearGradient>
    <linearGradient id="mtnFar" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0369A1" />
      <stop offset="100%" stop-color="#0E7490" />
    </linearGradient>
    <linearGradient id="mtnMid" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#047857" />
      <stop offset="100%" stop-color="#065F46" />
    </linearGradient>
    <linearGradient id="hillFront" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#10B981" />
      <stop offset="50%" stop-color="#059669" />
      <stop offset="100%" stop-color="#008444" />
    </linearGradient>
    <linearGradient id="sun" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE047" />
      <stop offset="100%" stop-color="#F59E0B" />
    </linearGradient>
  </defs>
  <rect width="1200" height="520" fill="url(#sky1)" />
  
  <!-- Morning Sun -->
  <circle cx="880" cy="140" r="56" fill="url(#sun)" opacity="0.9" />
  <circle cx="880" cy="140" r="90" fill="#FEF08A" opacity="0.25" />

  <!-- Distant Blue Ridge Mountains -->
  <polygon points="120,320 380,180 640,320" fill="url(#mtnFar)" opacity="0.75" />
  <polygon points="460,320 740,160 1020,320" fill="url(#mtnFar)" opacity="0.65" />

  <!-- Midground Pine & Forest Foothills -->
  <path d="M0,360 Q260,260 520,330 T1040,290 L1200,320 L1200,520 L0,520 Z" fill="url(#mtnMid)" />

  <!-- Foreground Lush Terraced Green Hills (Kebun Teh Jawa Barat) -->
  <path d="M0,420 Q320,340 680,410 T1200,380 L1200,520 L0,520 Z" fill="url(#hillFront)" />
  <path d="M0,470 Q450,420 900,470 T1200,440 L1200,520 L0,520 Z" fill="#005A2E" opacity="0.95" />
  
  <!-- Subtle Official Watermark -->
  <g transform="translate(48, 48)" opacity="0.85">
    <rect width="210" height="34" rx="8" fill="#000000" opacity="0.25" />
    <circle cx="20" cy="17" r="7" fill="#FBBF24" />
    <text x="36" y="22" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" letter-spacing="1">PROVINSI JAWA BARAT</text>
  </g>
</svg>
`;

// Slide 2: Modern Civic & Public Empowerment Facility (Gedung Sate & Integrated Community Hub)
const SLIDE_2_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 520" width="1200" height="520">
  <defs>
    <linearGradient id="sky2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="50%" stop-color="#064E3B" />
      <stop offset="100%" stop-color="#008444" />
    </linearGradient>
    <linearGradient id="glass" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0.05" />
    </linearGradient>
  </defs>
  <rect width="1200" height="520" fill="url(#sky2)" />

  <!-- Geometric Architectural Curves of Modern Public Infrastructure -->
  <circle cx="950" cy="260" r="380" fill="#10B981" opacity="0.08" />
  <circle cx="200" cy="480" r="280" fill="#38BDF8" opacity="0.07" />

  <path d="M0,380 L350,220 L750,300 L1200,190 L1200,520 L0,520 Z" fill="url(#glass)" />
  <path d="M0,430 L450,320 L850,390 L1200,310 L1200,520 L0,520 Z" fill="#003D1F" opacity="0.7" />

  <!-- Clean Minimalist Government Badge -->
  <g transform="translate(48, 48)" opacity="0.85">
    <rect width="230" height="34" rx="8" fill="#000000" opacity="0.25" />
    <circle cx="20" cy="17" r="7" fill="#34D399" />
    <text x="36" y="22" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" letter-spacing="1">DINAS SOSIAL JABAR</text>
  </g>
</svg>
`;

// Slide 3: Vibrant Sunrise Over Communal Village & Productive Enterprise
const SLIDE_3_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 520" width="1200" height="520">
  <defs>
    <linearGradient id="sky3" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#78350F" />
      <stop offset="35%" stop-color="#D97706" />
      <stop offset="70%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#FEF3C7" />
    </linearGradient>
    <linearGradient id="earth" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#047857" />
      <stop offset="100%" stop-color="#064E3B" />
    </linearGradient>
  </defs>
  <rect width="1200" height="520" fill="url(#sky3)" />

  <!-- Morning Sun -->
  <circle cx="600" cy="240" r="90" fill="#FEF08A" opacity="0.85" />
  <circle cx="600" cy="240" r="160" fill="#FDE047" opacity="0.2" />

  <!-- Rolling Terraced Farmland & Community Villages -->
  <path d="M0,350 Q300,280 600,330 T1200,300 L1200,520 L0,520 Z" fill="url(#earth)" />
  <path d="M0,420 Q400,360 800,410 T1200,390 L1200,520 L0,520 Z" fill="#004D26" />

  <!-- Clean Government Emblem Tag -->
  <g transform="translate(48, 48)" opacity="0.85">
    <rect width="210" height="34" rx="8" fill="#000000" opacity="0.25" />
    <circle cx="20" cy="17" r="7" fill="#FBBF24" />
    <text x="36" y="22" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" letter-spacing="1">KEMANDIRIAN KPM</text>
  </g>
</svg>
`;

export const INITIAL_SLIDES: SlideNewsItem[] = [
  {
    id: 'slide-1',
    imageUrl: createSvgBase64(SLIDE_1_SVG),
    title: 'Peluncuran Resmi Si-Graduasi: Mengakselerasi KPM Menuju Kemandirian Ekonomi Berkelanjutan',
    category: 'Kebijakan Sosial',
    date: '11 November 2026',
    author: 'Tim Komunikasi Dinas Sosial',
    content: `Dinas Sosial secara resmi memperkenalkan inisiatif Si-Graduasi (Sistem Informasi Graduasi Kesejahteraan Sosial) sebagai instrumen terpadu untuk memantau, mendampingi, dan memverifikasi Keluarga Penerima Manfaat (KPM) bantuan sosial yang telah siap mandiri.

Melalui sinergi 5 program utama—Jalan Jalan Sosial, Teman Sosial, Modal Sosial, Kampung Sosial, dan Kawal Bansos—program ini menargetkan ribuan keluarga pra-sejahtera bertransformasi secara bertahap keluar dari ketergantungan bantuan sosial menjadi wirausaha mandiri yang berdaya saing. Seluruh data kependudukan diproteksi sesuai standar UU Perlindungan Data Pribadi dan siap diaudit Diskominfo.`
  },
  {
    id: 'slide-2',
    imageUrl: createSvgBase64(SLIDE_2_SVG),
    title: 'Survei Faktual Lapangan Jalan Jalan Sosial: Memetakan Potensi Kemandirian Warga',
    category: 'Kegiatan Lapangan',
    date: '09 November 2026',
    author: 'Koordinator Pendamping Sosial',
    content: `Tim pendamping sosial terus menggiatkan penjangkauan langsung ke lapangan melalui program Jalan Jalan Sosial. Pendataan dilakukan dari rumah ke rumah untuk memverifikasi kondisi tempat tinggal, kepemilikan aset, dan sumber penghasilan KPM.

Data hasil survei ini menjadi rujukan utama dalam kalkulasi skor kemandirian Si-Graduasi, memastikan intervensi lanjutan—baik berupa modal usaha maupun pelatihan kejuruan—diberikan secara terukur dan tepat sasaran.`
  },
  {
    id: 'slide-3',
    imageUrl: createSvgBase64(SLIDE_3_SVG),
    title: 'Program Modal Sosial Buka Jalan Bagi KPM untuk Menjadi Wirausaha Mandiri',
    category: 'Pemberdayaan Ekonomi',
    date: '06 November 2026',
    author: 'Bidang Pemberdayaan Sosial',
    content: `Salah satu kunci keberhasilan graduasi adalah kepemilikan sumber penghasilan yang stabil. Melalui program Modal Sosial, para penerima manfaat difasilitasi dengan pelatihan wirausaha kuliner, kerajinan tangan, dan jasa rumahan.

Tidak hanya pelatihan, KPM binaan juga dibantu mendapatkan akses pembiayaan mikro syariah dan KUR tanpa agunan, memutus mata rantai jeratan rentenir di lingkungan pedesaan.`
  }
];
