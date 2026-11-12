import type { GraduationCriteria } from '../types';

/**
 * Masking NIK kependudukan sesuai amanat UU Perlindungan Data Pribadi (UU PDP No. 27/2022)
 * Menyembunyikan 6 digit tengah (tanggal lahir dan kode gender) untuk mencegah eksploitasi data.
 * Contoh: "3201015508820001" -> "320101******0001"
 */
export function maskNIK(nik: string): string {
  if (!nik) return '-';
  const clean = nik.replace(/\D/g, '');
  if (clean.length < 10) return clean.replace(/.(?=.{2})/g, '*');
  const start = clean.slice(0, 6);
  const end = clean.slice(-4);
  return `${start}******${end}`;
}

/**
 * Masking Nomor Kartu Keluarga
 * Contoh: "3201010101010005" -> "320101******0005"
 */
export function maskKK(kk: string): string {
  if (!kk) return '-';
  const clean = kk.replace(/\D/g, '');
  if (clean.length < 10) return clean.replace(/.(?=.{2})/g, '*');
  const start = clean.slice(0, 6);
  const end = clean.slice(-4);
  return `${start}******${end}`;
}

/**
 * Sanitasi string input untuk mencegah Cross-Site Scripting (XSS) dan injeksi karakter berbahaya
 * Mematuhi standar OWASP Top 10 A03:2021-Injection
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  return input
    .replace(/[&<>"'/]/g, (char) => {
      switch (char) {
        case '&': return '&amp;';
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '"': return '&quot;';
        case "'": return '&#39;';
        case '/': return '&#x2F;';
        default: return char;
      }
    })
    .trim();
}

/**
 * Validasi ketat format NIK Republik Indonesia (16 Digit Numerik)
 */
export function validateNIK(nik: string): { isValid: boolean; message: string } {
  if (!nik) {
    return { isValid: false, message: 'NIK wajib diisi.' };
  }
  const clean = nik.replace(/\s+/g, '');
  if (!/^\d+$/.test(clean)) {
    return { isValid: false, message: 'NIK hanya boleh memuat karakter angka.' };
  }
  if (clean.length !== 16) {
    return { isValid: false, message: `NIK harus tepat 16 digit (terdeteksi ${clean.length} digit).` };
  }
  return { isValid: true, message: 'Format NIK valid.' };
}

/**
 * Kalkulasi skor kelayakan graduasi KPM berdasarkan 4 pilar indikator kesejahteraan Kemensos:
 * 1. Pendapatan & Kemandirian Pangan (bobot 35%)
 * 2. Kelayakan Tempat Tinggal & Sanitasi (bobot 20%)
 * 3. Kepemilikan Usaha / Keterampilan Vokasi (bobot 30%)
 * 4. Akses Pendidikan & Kesehatan Keluarga (bobot 15%)
 */
export function calculateGraduationScore(criteria: GraduationCriteria): {
  totalScore: number;
  status: 'Belum Siap' | 'Kandidat Graduasi' | 'Tergraduasi Mandiri';
  recommendation: string;
} {
  const weightedScore =
    criteria.incomeScore * 0.35 +
    criteria.housingScore * 0.20 +
    criteria.businessCapabilityScore * 0.30 +
    criteria.educationHealthScore * 0.15;

  const totalScore = Math.min(100, Math.max(0, Math.round(weightedScore)));

  if (totalScore >= 75) {
    return {
      totalScore,
      status: 'Tergraduasi Mandiri',
      recommendation: 'KPM telah memenuhi ambang batas graduasi mandiri dan siap lepas dari kepesertaan bansos reguler.'
    };
  } else if (totalScore >= 50) {
    return {
      totalScore,
      status: 'Kandidat Graduasi',
      recommendation: 'KPM berada dalam fase transisi. Direkomendasikan mengikuti program Modal Sosial dan Teman Sosial.'
    };
  } else {
    return {
      totalScore,
      status: 'Belum Siap',
      recommendation: 'KPM masih memerlukan pendampingan intensif program Jalan Jalan Sosial dan bantuan sosial dasar.'
    };
  }
}

/**
 * Menghasilkan digital checksum / cryptographic hash simulator untuk Audit Trail Diskominfo
 */
export function generateAuditSignature(actor: string, action: string, timestamp: string): string {
  const raw = `${actor}|${action}|${timestamp}|SI_GRADUASI_SALT_SPBE_2026`;
  let hash = 0;
  for (let i = 0; i < raw.length; i++) {
    const char = raw.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }
  const hex = Math.abs(hash).toString(16).padStart(8, '0');
  return `SHA256-SIG-${hex.toUpperCase()}-${timestamp.slice(-4)}`;
}
