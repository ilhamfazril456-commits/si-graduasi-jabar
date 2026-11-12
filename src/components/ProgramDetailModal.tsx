import React, { useState } from 'react';
import type { ProgramItem } from '../types';
import { 
  X, 
  CheckCircle, 
  Sparkles, 
  FileText, 
  Send,
  MessageSquare,
  ShieldCheck
} from 'lucide-react';

interface ProgramDetailModalProps {
  program: ProgramItem | null;
  onClose: () => void;
  onLogAction?: (action: string, module: string, details: string) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  onLogAction,
}) => {
  const [mentorNote, setMentorNote] = useState('');
  const [savedNotes, setSavedNotes] = useState<string[]>([
    'Integrasikan format isian survei lapangan dengan instrumen verifikasi DTKS Pemdaprov Jabar.',
    'Pastikan pilar indikator program dapat dievaluasi bersama pendamping PKH di tingkat kecamatan.'
  ]);
  const [showSavedFeedback, setShowSavedFeedback] = useState(false);

  if (!program) return null;

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mentorNote.trim()) return;
    const clean = mentorNote.trim();
    setSavedNotes((prev) => [clean, ...prev]);
    if (onLogAction) {
      onLogAction(
        'ADD_MENTOR_NOTE',
        program.name,
        `Menambahkan catatan diskusi pembimbing PKL pada program ${program.name}: "${clean.slice(0, 40)}..."`
      );
    }
    setMentorNote('');
    setShowSavedFeedback(true);
    setTimeout(() => setShowSavedFeedback(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-slate-200 shadow-2xl text-slate-800 my-8 overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-[#008444]">
                {program.badge}
              </span>
              <span className="text-xs text-amber-700 font-semibold flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Fase Rancang Bangun
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              {program.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              {program.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Tutup Jendela Detail Program"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          
          {/* Status Placeholder Announcement */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed">
            <strong className="font-semibold block text-amber-800 mb-0.5">
              Status Cangkang Program: Siap Ditempel ke Sapawarga
            </strong>
            Sesuai arahan Anda, isi teknis dari modul ini sengaja dikosongkan terlebih dahulu dan dipersiapkan dalam bentuk cangkang sistem yang siap diisi sesuai masukan pembimbing PKL.
          </div>

          {/* Program Overview */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">
              Deskripsi & Nilai Tambah
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              {program.summary}
            </p>
          </div>

          {/* 4 Pilar Arsitektur Program */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
              4 Pilar Ruang Lingkup Program
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {program.pillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#008444] flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5" />
                      {pillar.title}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {pillar.targetUnit}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-normal">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Outcome */}
          <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#008444] shrink-0 mt-0.5" />
            <div className="text-xs text-slate-700">
              <strong className="text-slate-900 block font-semibold mb-0.5">Dampak Graduasi yang Diharapkan:</strong>
              {program.expectedImpact}
            </div>
          </div>

          {/* Section: Catatan Pembimbing PKL / Diskusi */}
          <div className="pt-3 border-t border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-700 flex items-center gap-1.5 uppercase tracking-wider">
                <MessageSquare className="w-3.5 h-3.5 text-[#008444]" />
                Catatan Diskusi Bersama Pembimbing PKL
              </h3>
              <span className="text-[11px] text-slate-500">
                {savedNotes.length} Catatan Tersimpan
              </span>
            </div>

            <form onSubmit={handleAddNote} className="space-y-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={mentorNote}
                  onChange={(e) => setMentorNote(e.target.value)}
                  placeholder="Ketik catatan atau masukan dari pembimbing PKL..."
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#008444] transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-[#008444] hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-1.5 shrink-0 transition-colors active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Simpan</span>
                </button>
              </div>
              {showSavedFeedback && (
                <p className="text-[11px] text-[#008444] flex items-center gap-1 font-medium">
                  <CheckCircle className="w-3 h-3" />
                  Catatan berhasil disimpan!
                </p>
              )}
            </form>

            {/* List of saved notes */}
            <div className="space-y-2 pt-1">
              {savedNotes.map((note, i) => (
                <div 
                  key={i}
                  className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2"
                >
                  <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="flex-1">{note}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-[11px] text-slate-500 hidden sm:inline">
            Si-Graduasi · Modul Terintegrasi Sapawarga
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold transition-colors"
          >
            Tutup Dialog
          </button>
        </div>

      </div>
    </div>
  );
};
