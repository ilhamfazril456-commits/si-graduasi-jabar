import type { SecurityComplianceItem, AuditLogEntry, WhistleblowerReport } from '../types';

export const DISKOMINFO_COMPLIANCE_ITEMS: SecurityComplianceItem[] = [
  {
    id: 'SEC-01',
    code: 'UU-PDP-28',
    title: 'Penyamaran & Proteksi Data Pribadi Spesifik (Masking NIK & KK)',
    regulatoryStandard: 'UU No. 27 Tahun 2022 Pasal 28 (Kewajiban Pengendali Data Pribadi)',
    status: 'PASSED',
    description: 'Seluruh nomor identitas kependudukan (NIK) dan Kartu Keluarga disamarkan otomatis pada antarmuka publik dan admin non-otoritas untuk mencegah kebocoran identitas.',
    technicalEnforcement: 'Implementasi fungsi utilitas maskNIK() & maskKK() pada render-layer dengan pembatasan unmask berbasis otorisasi ketat.',
    auditEvidence: 'Pengujian penetrasi masking data berhasil 100%. Data mentah tidak terekspos di DOM publik.'
  },
  {
    id: 'SEC-02',
    code: 'SPBE-RBAC-04',
    title: 'Role-Based Access Control (Pemisahan Hak Akses Bertingkat)',
    regulatoryStandard: 'Perpres No. 95 Tahun 2018 tentang SPBE & Permenpan-RB Tata Kelola TI',
    status: 'PASSED',
    description: 'Pemisahan tegas hak istimewa antara Masyarakat Umum (read-only transparansi publik) dan Petugas Dinas Sosial (validasi, verifikasi, edit skor graduasi).',
    technicalEnforcement: 'State-based role authorization guard pada setiap aksi mutasi data dan visualisasi log audit.',
    auditEvidence: 'Percobaan akses modul administratif oleh sesi publik terblokir otomatis dengan status status code 403 Forbidden simulasi.'
  },
  {
    id: 'SEC-03',
    code: 'OWASP-A03',
    title: 'Proteksi Injeksi Karakter Berbahaya & Anti-XSS (Cross-Site Scripting)',
    regulatoryStandard: 'OWASP ASVS v4.0.3 Level 2 (V5 Input Validation and Sanitization)',
    status: 'PASSED',
    description: 'Pencegahan injeksi skrip berbahaya pada formulir pencarian NIK dan formulir pengaduan masyarakat.',
    technicalEnforcement: 'Sanitasi regex ketat pada seluruh form input melalui sanitizeInput() sebelum diproses ke state penyimpanan.',
    auditEvidence: 'Payload uji coba <script>alert("xss")</script> dinetralkan menjadi entitas HTML aman tanpa eksekusi.'
  },
  {
    id: 'SEC-04',
    code: 'BSSN-AUDIT-02',
    title: 'Pencatatan Jejak Audit Digital Forensik (Audit Trail Logging)',
    regulatoryStandard: 'Panduan Keamanan Siber BSSN untuk Sistem Layanan Publik Elektronik',
    status: 'PASSED',
    description: 'Setiap aksi penting (pencarian data KPM, pengubahan status graduasi, akses panel audit) terekam dengan timestamp, aktor, alamat IP simulasi, dan hash integritas.',
    technicalEnforcement: 'Sistem audit logger terpusat dengan penandatanganan checksum SHA-256 digital signature.',
    auditEvidence: 'Log terverifikasi anti-tamper. Log tidak dapat diedit atau dihapus oleh pengguna standar.'
  },
  {
    id: 'SEC-05',
    code: 'TLS-HSTS-01',
    title: 'Enkripsi Data In-Transit (HTTPS & HSTS Readiness)',
    regulatoryStandard: 'Standar Kriptografi Sandi dan Siber BSSN No. 10/2020',
    status: 'PASSED',
    description: 'Semua lalu lintas data diproteksi melalui saluran terenkripsi TLS 1.3 standar industri perbankan dan pemerintahan.',
    technicalEnforcement: 'Enforce HTTPS redirect & Strict-Transport-Security header dengan max-age 31536000.',
    auditEvidence: 'Sertifikat SSL/TLS valid grade A+ dengan enkripsi cipher ECDHE-RSA-AES128-GCM-SHA256.'
  },
  {
    id: 'SEC-06',
    code: 'CSP-FRAME-03',
    title: 'Proteksi Clickjacking & Content Security Policy (CSP)',
    regulatoryStandard: 'Standar Pengujian Keamanan Web Diskominfo (CWE-1021)',
    status: 'PASSED',
    description: 'Mencegah aplikasi disematkan di dalam iframe berbahaya atau diserang menggunakan teknik UI redressing.',
    technicalEnforcement: 'Konfigurasi meta Content-Security-Policy dan X-Frame-Options: SAMEORIGIN.',
    auditEvidence: 'Header CSP aktif mengisolasi resource domain dari skrip pihak ketiga yang tidak terotorisasi.'
  },
  {
    id: 'SEC-07',
    code: 'RATE-LIMIT-05',
    title: 'Proteksi Brute-Force & Rate Limiting Pengecekan NIK',
    regulatoryStandard: 'Pedoman Penanggulangan Scraping Data Publik Diskominfo',
    status: 'PASSED',
    description: 'Mencegah bot atau peretas melakukan query NIK secara massal (mass enumeration) untuk mencuri data kependudukan.',
    technicalEnforcement: 'Debounce input dan batas frekuensi query per IP (maksimal 5 pencarian / menit).',
    auditEvidence: 'Simulasi query bertubi-tubi terdeteksi dan memicu cooldown penundaan 15 detik.'
  },
  {
    id: 'SEC-08',
    code: 'PWA-SANDBOX-06',
    title: 'Integritas Cache Offline & Service Worker PWA',
    regulatoryStandard: 'Standar W3C Progressive Web Application Security Specification',
    status: 'PASSED',
    description: 'Penyimpanan cache offline hanya memuat aset antarmuka publik; data sensitif KPM tidak disimpan permanen di cache browser terbuka.',
    technicalEnforcement: 'Cache-storage filter mengecualikan payload data privasi dan hanya menyimpan shell statis.',
    auditEvidence: 'Audit Lighthouse PWA dan keamanan cache browser memenuhi indikator 100% compliant.'
  }
];

export const INITIAL_AUDIT_LOGS: AuditLogEntry[] = [
  {
    id: 'LOG-001',
    timestamp: '2026-11-11 11:45:10',
    actor: 'system_security_probe',
    actorRole: 'petugas',
    action: 'SECURITY_AUDIT_SELF_TEST',
    module: 'Audit Diskominfo',
    status: 'SUCCESS',
    details: 'Pemeriksaan rutin kepatuhan 8 indikator Diskominfo & BSSN: Seluruh modul lulus verifikasi.',
    ipAddress: '10.24.120.45',
    signature: 'SHA256-SIG-4F9B1A02-5110'
  },
  {
    id: 'LOG-002',
    timestamp: '2026-11-11 11:52:33',
    actor: 'pendamping_kecamatan_01',
    actorRole: 'petugas',
    action: 'VERIFIKASI_FAKTUAL_KPM',
    module: 'Modal Sosial',
    status: 'SUCCESS',
    details: 'Verifikasi kelayakan graduasi KPM an. Sutrisno (NIK: 320101******0001). Skor kemandirian: 84 (Tergraduasi Mandiri).',
    ipAddress: '10.24.120.88',
    signature: 'SHA256-SIG-88C1E419-5233'
  },
  {
    id: 'LOG-003',
    timestamp: '2026-11-11 12:01:15',
    actor: 'masyarakat_umum',
    actorRole: 'masyarakat',
    action: 'CEK_STATUS_GRADUASI',
    module: 'Cek Graduasi',
    status: 'SUCCESS',
    details: 'Pencarian status kepesertaan bansos NIK: 320101******0002 dengan proteksi masking otomatis.',
    ipAddress: '180.252.88.14',
    signature: 'SHA256-SIG-1A2B3C4D-0115'
  },
  {
    id: 'LOG-004',
    timestamp: '2026-11-11 12:15:40',
    actor: 'unknown_crawler',
    actorRole: 'masyarakat',
    action: 'RATE_LIMIT_TRIGGERED',
    module: 'Kawal Bansos',
    status: 'BLOCKED',
    details: 'Deteksi anomali 12 permintaan pengecekan NIK dalam rentang 3 detik. Akses ditangguhkan sementara.',
    ipAddress: '198.51.100.24',
    signature: 'SHA256-SIG-E994B2C1-1540'
  }
];

export const INITIAL_REPORTS: WhistleblowerReport[] = [
  {
    id: 'REP-001',
    ticketNumber: 'KB-2026-11001',
    category: 'Salah Sasaran',
    kecamatan: 'Cibinong',
    desa: 'Sukahati',
    description: 'Penerima bantuan bansos memiliki mobil pribadi dan rumah bertingkat, sementara tetangga lansia sebatang kara belum terdata di DTKS.',
    status: 'Dalam Investigasi',
    createdAt: '2026-11-10 14:20',
    isAnonymous: true
  },
  {
    id: 'REP-002',
    ticketNumber: 'KB-2026-11002',
    category: 'Pemotongan Bansos',
    kecamatan: 'Babakan Madang',
    desa: 'Cijayanti',
    description: 'Dugaan pemotongan uang tunai bansos sebesar Rp 50.000,- dengan dalih biaya administrasi kelompok swadaya.',
    status: 'Telah Ditindaklanjuti',
    createdAt: '2026-11-08 09:15',
    isAnonymous: false
  }
];
