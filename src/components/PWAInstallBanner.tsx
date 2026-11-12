import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Smartphone, Download, CheckCircle2, Laptop, X, Sparkles } from 'lucide-react';

export const PWAInstallBanner: React.FC = () => {
  const { isInstallable, isInstalled, install, isIOS } = usePWAInstall();
  const [dismissed, setDismissed] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);

  if (dismissed || isInstalled) return null;

  return (
    <aside 
      aria-label="Pemberitahuan Pemasangan Aplikasi"
      className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-emerald-950/80 border-b border-emerald-800/40 text-white px-4 py-3 transition-all"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-600/30 border border-emerald-500/40 flex items-center justify-center shrink-0 text-emerald-400">
            <Smartphone className="w-4 h-4" />
          </div>
          <div className="text-xs">
            <span className="font-bold text-white block sm:inline mr-2">
              Dukungan Seluruh Perangkat (HP & Laptop):
            </span>
            <span className="text-slate-300">
              Pasang Si-Graduasi langsung ke layar ponsel atau desktop tanpa perlu mengunduh berkas APK manual.
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
          {isInstallable && (
            <button
              onClick={install}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Pasang Sekarang</span>
            </button>
          )}

          {isIOS && (
            <button
              onClick={() => setShowIOSModal(true)}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
            >
              Panduan iPhone
            </button>
          )}

          <button
            onClick={() => setDismissed(true)}
            className="p-1.5 text-slate-400 hover:text-slate-200 transition-colors rounded-lg"
            aria-label="Tutup Banner Pemasangan"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>

      {showIOSModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-2xl text-slate-100">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-emerald-400" />
              Cara Pasang di iPhone / iPad
            </h3>
            <p className="mt-3 text-xs text-slate-300 leading-relaxed">
              1. Buka halaman ini di browser <strong>Safari</strong>.<br />
              2. Ketuk ikon <strong>Share</strong> (kotak panah ke atas di bagian bawah Safari).<br />
              3. Gulir ke bawah lalu pilih <strong>Add to Home Screen (Tambah ke Layar Utama)</strong>.
            </p>
            <button
              onClick={() => setShowIOSModal(false)}
              className="mt-5 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 font-semibold text-xs text-white transition-colors"
            >
              Tutup Panduan
            </button>
          </div>
        </div>
      )}
    </aside>
  );
};
