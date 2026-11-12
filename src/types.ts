export type ProgramId =
  | 'kampung-sosial'
  | 'teman-sosial'
  | 'kawal-bansos'
  | 'jalan-jalan-sosial'
  | 'modal-sosial';

export type OfficialModuleId =
  | 'dashboard'
  | 'pemetaan-survei'
  | 'data-sasaran'
  | 'perencanaan'
  | 'realisasi'
  | 'kasus-rujukan'
  | 'riwayat'
  | 'monev'
  | 'evaluasi-graduasi'
  | 'laporan';

export type UserRole = 
  | 'masyarakat'
  | 'petugas'
  | 'dinsos-provinsi' 
  | 'bidang-rehsos' 
  | 'bidang-pfm' 
  | 'bidang-linjamsos' 
  | 'bidang-dayasos' 
  | 'dinsos-kabkota' 
  | 'petugas-lapangan';

export type ActiveTab = 'beranda' | 'programs' | 'cek-graduasi' | 'kawal-bansos' | 'audit-diskominfo' | OfficialModuleId;

export interface DashboardKPIs {
  desaTerpetakan: number;
  desaTotalTarget: number;
  penerimaManfaatUnik: number;
  totalIntervensi: number;
  pmBerkembangPositif: number;
  pmBerkembangPersen: number;
  kasusTertangani: number;
  kasusTotal: number;
  keluargaGraduasi: number;
  keluargaGraduasiTarget: number;
}

export interface ProgramPerformanceSummary {
  id: ProgramId;
  name: string;
  bidangPengampu: string;
  bidangKode: string;
  outputLabel: string;
  outputRealisasi: number;
  outputTarget: number;
  outputSatuan: string;
  outcomeLabel: string;
  outcomeStatus: string;
  polaPelaksanaan: 'Terpadu' | 'Mandiri' | 'Berkelanjutan';
  fokusKegiatan: string;
}

export interface RegionalSummary {
  kabupatenKota: string;
  desaTerpetakan: number;
  penerimaManfaat: number;
  intervensiBerjalan: number;
  kasusSelesai: number;
  kandidatGraduasi: number;
  keluargaGraduasi: number;
}

export interface ProgramPillar {
  title: string;
  description: string;
  metricLabel: string;
  targetUnit: string;
}

export interface ProgramItem {
  id: ProgramId;
  name: string;
  badge: string;
  subtitle: string;
  summary: string;
  iconName: string;
  logoUrl: string;
  bidang: string;
  themeColor: string;
  bgGradient: string;
  isPlaceholder: boolean;
  phaseNote: string;
  pillars: ProgramPillar[];
  expectedImpact: string;
}

export interface GraduationCriteria {
  incomeScore: number; // 0-100
  housingScore: number; // 0-100
  businessCapabilityScore: number; // 0-100
  educationHealthScore: number; // 0-100
}

export interface KPMRecord {
  nik: string;
  noKK: string;
  namaKepalaKeluarga: string;
  alamat: string;
  desa: string;
  kecamatan: string;
  statusBansos: 'PKH' | 'BPNT' | 'PBI-JK' | 'Graduasi Mandiri' | 'Transisi Mandiri';
  lamaBantuanTahun: number;
  skorKemandirian: number; // 0-100
  statusGraduasi: 'Belum Siap' | 'Kandidat Graduasi' | 'Tergraduasi Mandiri';
  rekomendasiProgram: ProgramId;
  catatanPendamping: string;
  terakhirDitinjau: string;
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  actor: string;
  actorRole: UserRole;
  action: string;
  module: string;
  status: 'SUCCESS' | 'BLOCKED' | 'FLAGGED';
  details: string;
  ipAddress: string;
  signature: string;
}

export interface SecurityComplianceItem {
  id: string;
  code: string;
  title: string;
  regulatoryStandard: string; // e.g., 'UU PDP No. 27/2022 Pasal 28', 'Perpres SPBE No. 95/2018', 'BSSN CSIRT Guideline'
  status: 'PASSED' | 'AUDITED' | 'ENFORCED';
  description: string;
  technicalEnforcement: string;
  auditEvidence: string;
}

export interface WhistleblowerReport {
  id: string;
  ticketNumber: string;
  category: 'Pungli' | 'Salah Sasaran' | 'Pemotongan Bansos' | 'Data Ganda' | 'Lainnya';
  kecamatan: string;
  desa: string;
  description: string;
  status: 'Menunggu Verifikasi' | 'Dalam Investigasi' | 'Telah Ditindaklanjuti';
  createdAt: string;
  isAnonymous: boolean;
}

export interface SlideNewsItem {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
  date: string;
  author: string;
  content: string;
}

