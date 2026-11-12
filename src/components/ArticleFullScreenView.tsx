import React from 'react';
import type { SlideNewsItem } from '../types';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';

interface ArticleFullScreenViewProps {
  article: SlideNewsItem;
  onBack: () => void;
}

export const ArticleFullScreenView: React.FC<ArticleFullScreenViewProps> = ({
  article,
  onBack,
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col overflow-y-auto animate-in fade-in duration-200">
      
      {/* Top App Bar with Back Button '<-' */}
      <header className="sticky top-0 z-30 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-2xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Kembali ke halaman sebelumnya"
              title="Kembali"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-bold text-[#008444]">
                Informasi & Berita
              </span>
              <p className="text-xs text-slate-500 hidden sm:block truncate max-w-sm">
                Si-Graduasi Jawa Barat
              </p>
            </div>
          </div>

          <button
            onClick={onBack}
            className="text-xs font-semibold text-[#008444] hover:text-emerald-700 px-3 py-1.5 rounded-lg hover:bg-emerald-50 transition-colors cursor-pointer"
          >
            ← Kembali
          </button>
        </div>
      </header>

      {/* Main Full-Screen Article Content */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 pb-20">
        
        {/* Full Image Banner */}
        <div className="w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs mb-6">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Metadata Row */}
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3 border-b border-slate-100 pb-3">
          <span className="flex items-center gap-1.5 font-medium text-slate-600">
            <Calendar className="w-4 h-4 text-slate-400" />
            {article.date}
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span className="flex items-center gap-1.5 font-medium text-slate-600">
            <User className="w-4 h-4 text-slate-400" />
            {article.author}
          </span>
          <span aria-hidden="true" className="text-slate-300">·</span>
          <span className="text-emerald-700 font-semibold">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-5">
          {article.title}
        </h1>

        {/* Full Article Text */}
        <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-4 whitespace-pre-line border-t border-slate-100 pt-5">
          {article.content}
        </div>

        {/* Return Button at Bottom */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </button>
          
          <span className="text-xs text-slate-400">
            Dinas Sosial Provinsi Jawa Barat
          </span>
        </div>

      </main>

    </div>
  );
};
