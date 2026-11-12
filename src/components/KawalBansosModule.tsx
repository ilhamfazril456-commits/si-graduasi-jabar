import React, { useState } from 'react';
import type { WhistleblowerReport, UserRole } from '../types';
import { INITIAL_REPORTS } from '../data/securityAuditData';
import { sanitizeInput } from '../utils/security';
import { 
  ShieldAlert, 
  Send, 
  Search, 
  CheckCircle, 
  Clock, 
  FileText, 
  AlertCircle,
  Lock,
  EyeOff
} from 'lucide-react';

interface KawalBansosModuleProps {
  userRole: UserRole;
  onLogAction: (action: string, module: string, details: string) => void;
}

export const KawalBansosModule: React.FC<KawalBansosModuleProps> = ({
  userRole,
  onLogAction,
}) => {
  const [reports, setReports] = useState<WhistleblowerReport[]>(INITIAL_REPORTS);
  const [category, setCategory] = useState<'Pungli' | 'Salah Sasaran' | 'Pemotongan Bansos' | 'Data Ganda' | 'Lainnya'>('Salah Sasaran');
  const [kecamatan, setKecamatan] = useState('Cibinong');
  const [desa, setDesa] = useState('Sukahati');
  const [description, setDescription] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  // Search Ticket State
  const [searchTicket, setSearchTicket] = useState('');
  const [searchedReport, setSearchedReport] = useState<WhistleblowerReport | null>(null);
  const [searchNotFound, setSearchNotFound] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    const sanitizedDesc = sanitizeInput(description);
    const newTicketNum = `KB-2026-${Math.floor(10000 + Math.random() * 90000)}`;

    const newReport: WhistleblowerReport = {
      id: `REP-${Date.now()}`,
      ticketNumber: newTicketNum,
      category,
      kecamatan: sanitizeInput(kecamatan),
      desa: sanitizeInput(desa),
      description: sanitizedDesc,
      status: 'Menunggu Verifikasi',
      createdAt: 'Baru saja (Hari ini)',
      isAnonymous
    };

    setReports([newReport, ...reports]);
    setSubmitSuccess(newTicketNum);
    setDescription('');
    onLogAction(
      'SUBMIT_COMPLAINT',
      'Kawal Bansos',
      `Tiket aduan baru diterbitkan: ${newTicketNum} (Kategori: ${category}, Wilayah: ${kecamatan})`
    );
  };

  const handleSearchTicket = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchNotFound(false);
    const found = reports.find((r) => r.ticketNumber.toUpperCase() === searchTicket.trim().toUpperCase());
    if (found) {
      setSearchedReport(found);
      onLogAction('TRACK_TICKET', 'Kawal Bansos', `Pencarian tiket pengaduan: ${found.ticketNumber}`);
    } else {
      setSearchedReport(null);
      setSearchNotFound(true);
      onLogAction('TRACK_TICKET_NOT_FOUND', 'Kawal Bansos', `Tiket ${searchTicket} tidak ditemukan`);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-slate-900/60 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2 uppercase tracking-wider">
            <span>Partisipasi Publik</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Pengawasan Bantuan Sosial</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-2.5">
            <ShieldAlert className="w-7 h-7 text-emerald-400" />
            Kawal Bansos: Saluran Pengaduan & Transparansi
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-2xl leading-relaxed">
            Laporkan dugaan salah sasaran, pemotongan dana bansos, atau pungli secara aman dan terenkripsi. Identitas Anda dijamin terlindungi oleh sistem perlindungan saksi internal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Form Pengaduan */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-5">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-400" />
                  Formulir Pengaduan Partisipatif
                </h3>
                <span className="text-xs font-medium text-emerald-400 flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5" />
                  Enkripsi End-to-End
                </span>
              </div>

              {submitSuccess && (
                <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-600/50 text-emerald-200 text-xs space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-white text-sm">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    Aduan Berhasil Dikirim!
                  </div>
                  <p>
                    Nomor Tiket Anda: <strong className="font-mono text-emerald-300 text-sm">{submitSuccess}</strong>.
                    Simpan nomor ini untuk melacak proses verifikasi investigasi petugas dinas.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Kategori Aduan */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Kategori Laporan:
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="Salah Sasaran">Salah Sasaran (Penerima Mampu Secara Ekonomi)</option>
                    <option value="Pemotongan Bansos">Pemotongan Dana / Pungutan Biaya Tidak Resmi</option>
                    <option value="Pungli">Pungutan Liar oleh Oknum</option>
                    <option value="Data Ganda">Data Kependudukan Ganda / Anomali NIK</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                {/* Lokasi Wilayah */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Kecamatan Kejadian:</label>
                    <input
                      type="text"
                      value={kecamatan}
                      onChange={(e) => setKecamatan(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Desa / Kelurahan:</label>
                    <input
                      type="text"
                      value={desa}
                      onChange={(e) => setDesa(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>

                {/* Uraian Laporan */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Uraian Kejadian & Bukti Pendukung:
                  </label>
                  <textarea
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    placeholder="Jelaskan secara rinci kronologi kejadian, perkiraan waktu, dan pihak yang terlibat..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs sm:text-sm text-white focus:outline-none focus:border-emerald-500"
                  />
                </div>

                {/* Anonymous Toggle */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center gap-2">
                    <EyeOff className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-slate-300">Kirim Secara Anonim (Lindungi Identitas Saya)</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="w-4 h-4 accent-emerald-500 rounded cursor-pointer"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Laporan Pengaduan</span>
                </button>
              </form>

            </div>
          </div>

          {/* Right Column: Ticket Tracker & Recent Reports List */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Ticket Tracking Widget */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Search className="w-4 h-4 text-emerald-400" />
                Lacak Status Tiket Pengaduan
              </h3>
              
              <form onSubmit={handleSearchTicket} className="flex gap-2">
                <input
                  type="text"
                  value={searchTicket}
                  onChange={(e) => setSearchTicket(e.target.value)}
                  placeholder="Contoh: KB-2026-11001"
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs font-mono text-white focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
                >
                  Lacak
                </button>
              </form>

              {searchNotFound && (
                <p className="text-xs text-amber-400">
                  Tiket tidak ditemukan. Coba periksa kembali nomor tiket Anda.
                </p>
              )}

              {searchedReport && (
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-emerald-400">{searchedReport.ticketNumber}</span>
                    <span className="px-2 py-0.5 rounded-md bg-amber-950 text-amber-300 font-medium text-[10px]">
                      {searchedReport.status}
                    </span>
                  </div>
                  <p className="text-slate-300 line-clamp-2">{searchedReport.description}</p>
                  <span className="text-[10px] text-slate-500 block">Kec. {searchedReport.kecamatan} · {searchedReport.createdAt}</span>
                </div>
              )}
            </div>

            {/* Recent Public Oversight Reports */}
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Riwayat Pengaduan Masuk
                </h3>
                <span className="text-[11px] text-slate-500">{reports.length} Laporan</span>
              </div>

              <div className="space-y-3">
                {reports.slice(0, 3).map((rep) => (
                  <div 
                    key={rep.id}
                    className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-slate-300 font-semibold">{rep.ticketNumber}</span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        rep.status === 'Telah Ditindaklanjuti'
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                          : rep.status === 'Dalam Investigasi'
                          ? 'bg-amber-950 text-amber-300 border border-amber-800'
                          : 'bg-slate-800 text-slate-300'
                      }`}>
                        {rep.status}
                      </span>
                    </div>
                    <p className="text-slate-300 text-xs line-clamp-2">
                      {rep.description}
                    </p>
                    <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1">
                      <span>Kec. {rep.kecamatan}</span>
                      <span>{rep.createdAt}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
