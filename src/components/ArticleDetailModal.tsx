import React from 'react';
import type { SlideNewsItem } from '../types';
import { X, Calendar, User, Tag, Share2 } from 'lucide-react';

interface ArticleDetailModalProps {
  article: SlideNewsItem | null;
  onClose: () => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-slate-200 shadow-2xl text-slate-800 my-8 overflow-hidden">
        
        {/* Full Image Banner Header */}
        <div className="relative w-full aspect-[16/9] bg-slate-900 overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
            aria-label="Tutup Berita"
          >
            <X className="w-4 h-4" />
          </button>
          
          <div className="absolute bottom-3 left-3">
            <span className="text-xs font-bold bg-[#008444] text-white px-2.5 py-1 rounded-md shadow-xs">
              {article.category}
            </span>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-5 sm:p-6 space-y-4 max-h-[55vh] overflow-y-auto">
          
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pb-3 border-b border-slate-100">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              {article.date}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <User className="w-3.5 h-3.5 text-slate-400" />
              {article.author}
            </span>
          </div>

          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight leading-snug">
            {article.title}
          </h2>

          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line space-y-3">
            {article.content}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-[11px] text-slate-500">
            Publikasi Resmi Si-Graduasi · Dinas Sosial
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold transition-colors"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
