import React from 'react';
import type { ActiveTab, UserRole } from '../types';
import { 
  ShieldCheck, 
  Smartphone, 
  UserCheck, 
  Users, 
  Download,
  CheckCircle2
} from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  onLogAction: (action: string, module: string, details: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  userRole,
  setUserRole,
  onLogAction,
}) => {
  const { isInstallable, isInstalled, install, isIOS } = usePWAInstall();
  const [showIOSModal, setShowIOSModal] = React.useState(false);

  const toggleRole = () => {
    const nextRole: UserRole = userRole === 'masyarakat' ? 'petugas' : 'masyarakat';
    setUserRole(nextRole);
    onLogAction(
      'SWITCH_ROLE',
      'Otentikasi & RBAC',
      `Beralih mode peran menjadi: ${nextRole === 'petugas' ? 'Petugas Dinas Sosial' : 'Masyarakat Umum'}`
    );
  };

  const navLinks: { id: ActiveTab; label: string }[] = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'programs', label: '5 Program Sosial' },
    { id: 'cek-graduasi', label: 'Cek Graduasi' },
    { id: 'kawal-bansos', label: 'Kawal Bansos' },
    { id: 'audit-diskominfo', label: 'Audit Diskominfo' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 text-white backdrop-blur-md border-b border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4 md:gap-8">
          
          {/* Zone 1: Brand Wordmark with GovTech Emblem */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                setActiveTab('beranda');
                onLogAction('NAVIGATE', 'Beranda', 'Navigasi ke halaman beranda');
              }}
              className="flex items-center gap-2.5 text-left focus:outline-none group"
              aria-label="Kembali ke Beranda Si-Graduasi"
            >
              <div className="w-9 h-9 rounded-xl bg-white/10 p-1 shadow-md flex items-center justify-center shrink-0">
                <img 
                  src="/assets/logos/si-graduasi-logo.png" 
                  alt="Logo Resmi Si-Graduasi" 
                  className="w-full h-full object-contain [image-rendering:-webkit-optimize-contrast]"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors whitespace-nowrap">
                  Si-Graduasi
                </span>
                <span className="text-[10px] font-medium text-slate-400 -mt-1 hidden sm:inline whitespace-nowrap">
                  Dinas Sosial · GovTech Terpadu
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links (Desktop Viewport) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    onLogAction('NAVIGATE', item.label, `Membuka modul: ${item.label}`);
                  }}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-emerald-400 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Interactive Role Switcher & Install Affordances */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* PWA Install Button (Desktop & Mobile) */}
            {isInstallable && (
              <button
                onClick={install}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-all active:scale-95 whitespace-nowrap"
                title="Pasang aplikasi ke layar laptop atau ponsel"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Install App</span>
              </button>
            )}

            {isIOS && (
              <button
                onClick={() => setShowIOSModal(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all whitespace-nowrap"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>PWA iOS</span>
              </button>
            )}

            {isInstalled && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 px-2 py-1 bg-emerald-950/60 rounded-md border border-emerald-800/40">
                <CheckCircle2 className="w-3 h-3" />
                <span>PWA Aktif</span>
              </span>
            )}

            {/* Interactive Role Switcher Toggle (Essential for PKL Demo & RBAC Audit) */}
            <button
              onClick={toggleRole}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all active:scale-95 whitespace-nowrap ${
                userRole === 'petugas'
                  ? 'bg-amber-950/70 border-amber-600/50 text-amber-200 hover:bg-amber-900/60'
                  : 'bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-700/80'
              }`}
              title="Klik untuk beralih mode peran (Masyarakat vs Petugas Dinas)"
            >
              {userRole === 'petugas' ? (
                <>
                  <UserCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-semibold text-amber-300">Petugas Dinas</span>
                </>
              ) : (
                <>
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  <span>Mode: Masyarakat</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Modal Panduan iOS Safari */}
      {showIOSModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-2xl bg-slate-900 border border-slate-700 p-6 shadow-2xl text-slate-100">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-emerald-400" />
              Pasang di iPhone / iPad
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
              Saya Mengerti
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
