import React, { useState } from 'react';
import type { SlideNewsItem } from '../types';
import { X, Upload, Image, Check, AlertCircle } from 'lucide-react';

interface EditSlideModalProps {
  onSaveSlide: (slide: SlideNewsItem) => void;
  onClose: () => void;
}

export const EditSlideModal: React.FC<EditSlideModalProps> = ({
  onSaveSlide,
  onClose,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Kegiatan Lapangan');
  const [content, setContent] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [compressing, setCompressing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Handle client-side image upload and compression via HTML5 Canvas
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg('');
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMsg('Harap pilih berkas gambar (JPG, PNG, atau WebP).');
      return;
    }

    setCompressing(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        // High quality canvas compression (max 1200px width with aspect ratio preservation)
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 1200;
        const scaleSize = MAX_WIDTH / img.width;
        const targetWidth = img.width > MAX_WIDTH ? MAX_WIDTH : img.width;
        const targetHeight = img.width > MAX_WIDTH ? img.height * scaleSize : img.height;

        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
          // Compress to WebP or high-quality JPEG
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.88);
          setImagePreview(compressedDataUrl);
        }
        setCompressing(false);
      };
      img.onerror = () => {
        setErrorMsg('Gagal memproses gambar. Coba gunakan gambar lain.');
        setCompressing(false);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrorMsg('Judul berita wajib diisi.');
      return;
    }
    if (!imagePreview) {
      setErrorMsg('Silakan unggah foto untuk slide ini.');
      return;
    }

    const newSlide: SlideNewsItem = {
      id: `slide-${Date.now()}`,
      imageUrl: imagePreview,
      title: title.trim(),
      category: category.trim(),
      date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      author: 'Admin Si-Graduasi',
      content: content.trim() || 'Informasi kegiatan dan publikasi terpadu program Si-Graduasi Dinas Sosial.'
    };

    onSaveSlide(newSlide);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 shadow-2xl text-slate-800 my-8 overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#008444] flex items-center justify-center">
              <Upload className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Tambah / Unggah Slide Berita Foto
              </h3>
              <p className="text-[11px] text-slate-500">
                Fitur demo presentasi: Gambar dikompres otomatis sangat jernih.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60"
            aria-label="Tutup Formulir"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          
          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Photo Upload Area */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">
              Unggah Foto Slide (Rasio 16:9):
            </label>
            
            <div className="relative border-2 border-dashed border-slate-300 hover:border-[#008444] rounded-2xl p-4 text-center cursor-pointer transition-colors bg-slate-50 overflow-hidden">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute inset-0 opacity-0 cursor-pointer z-10"
              />
              {imagePreview ? (
                <div className="space-y-2">
                  <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-900">
                    <img
                      src={imagePreview}
                      alt="Pratinjau Foto"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[11px] font-semibold text-[#008444] inline-flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    Foto Berhasil Dikompres & Siap Tampil
                  </span>
                </div>
              ) : (
                <div className="py-4 space-y-2 text-slate-500">
                  <Image className="w-8 h-8 mx-auto text-slate-400" />
                  <div className="text-xs font-semibold text-slate-700">
                    {compressing ? 'Sedang mengompres gambar...' : 'Klik atau seret foto ke sini'}
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Mendukung JPG, PNG, WebP (Otomatis dioptimalkan)
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Judul Berita */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">
              Judul Berita Foto:
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Contoh: Kunjungan Lapangan Penyerahan Bantuan Usaha KPM..."
              required
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#008444]"
            />
          </div>

          {/* Kategori */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">
              Kategori:
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#008444]"
            >
              <option value="Kegiatan Lapangan">Kegiatan Lapangan</option>
              <option value="Kebijakan Sosial">Kebijakan Sosial</option>
              <option value="Pemberdayaan Ekonomi">Pemberdayaan Ekonomi</option>
              <option value="Kawal Bansos">Kawal Bansos</option>
              <option value="Edukasi KPM">Edukasi KPM</option>
            </select>
          </div>

          {/* Uraian Berita */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700">
              Teks Berita Lengkap (Muncul Saat Foto Diklik):
            </label>
            <textarea
              rows={3}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Tuliskan isi artikel lengkap yang akan muncul ketika foto slide diklik..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#008444]"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-[#008444] hover:bg-emerald-700 text-white text-xs font-semibold transition-colors active:scale-95"
            >
              Simpan & Tampilkan di Slide
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
