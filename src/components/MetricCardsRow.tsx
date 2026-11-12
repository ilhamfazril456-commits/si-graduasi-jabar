import React from 'react';
import { 
  MapPin, 
  Users, 
  Sparkles, 
  TrendingUp, 
  Briefcase, 
  Home 
} from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { useInView } from '../hooks/useInView';

interface MetricCardsRowProps {
  isMobile?: boolean;
}

export const MetricCardsRow: React.FC<MetricCardsRowProps> = ({ isMobile = false }) => {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  const cards = [
    {
      id: 'desa',
      label: 'Desa Terpetakan',
      value: 142,
      bgClass: 'bg-[#E1F7EE] text-slate-800 border-emerald-200/60',
      iconBg: 'bg-emerald-100 text-emerald-800',
      icon: <MapPin className="w-5 h-5 text-emerald-700" />,
    },
    {
      id: 'pm',
      label: 'Penerima Manfaat',
      value: 18450,
      bgClass: 'bg-[#E2F0FD] text-slate-800 border-sky-200/60',
      iconBg: 'bg-sky-100 text-sky-800',
      icon: <Users className="w-5 h-5 text-sky-700" />,
    },
    {
      id: 'intervensi',
      label: 'Total Intervensi',
      value: 32890,
      bgClass: 'bg-[#E7ECFE] text-slate-800 border-indigo-200/60',
      iconBg: 'bg-indigo-100 text-indigo-800',
      icon: <Sparkles className="w-5 h-5 text-indigo-700" />,
    },
    {
      id: 'berkembang',
      label: 'Penerima Berkembang',
      value: 11240,
      bgClass: 'bg-[#DCFCE7] text-slate-800 border-emerald-200/60',
      iconBg: 'bg-emerald-100 text-emerald-800',
      icon: <TrendingUp className="w-5 h-5 text-[#008444]" />,
    },
    {
      id: 'kasus',
      label: 'Kasus Tertangani',
      value: 1285,
      bgClass: 'bg-[#FEF3C7] text-slate-800 border-amber-200/60',
      iconBg: 'bg-amber-100 text-amber-800',
      icon: <Briefcase className="w-5 h-5 text-amber-700" />,
    },
    {
      id: 'graduasi',
      label: 'Keluarga Graduasi',
      value: 2150,
      bgClass: 'bg-[#008444] text-white border-[#006e39]',
      iconBg: 'bg-white/20 text-white',
      icon: <Home className="w-5 h-5 text-white" />,
      isHighlight: true,
    },
  ];

  if (isMobile) {
    return (
      <section ref={ref} className="w-full max-w-6xl mx-auto px-4 sm:px-6 mt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-slate-800">
            Capaian Indikator Si-Graduasi
          </span>
          <span className="text-[11px] text-slate-500 font-medium">
            Jawa Barat 2026
          </span>
        </div>

        {/* 2-Column on Mobile, 3-Column on Tablet Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`p-3 rounded-xl border shadow-2xs flex flex-col justify-between transition-transform active:scale-[0.99] ${card.bgClass}`}
            >
              <div className="flex items-start justify-between gap-1 mb-1.5">
                <span className={`text-[11px] font-semibold leading-tight line-clamp-2 min-h-[28px] ${card.isHighlight ? 'text-emerald-100' : 'text-slate-700'}`}>
                  {card.label}
                </span>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${card.iconBg}`}>
                  {card.icon}
                </div>
              </div>

              <div className={`text-xl font-black font-mono tracking-tight tabular-nums ${card.isHighlight ? 'text-white' : 'text-slate-900'}`}>
                <AnimatedCounter value={card.value} duration={850} trigger={isInView} />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Inherently Responsive Row: 2-col on mobile, 3-col on tablet, 6-col on desktop/laptop
  return (
    <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5 w-full">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`p-3.5 sm:p-4 rounded-xl border shadow-2xs flex flex-col justify-between min-h-[92px] sm:min-h-[96px] ${card.bgClass}`}
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className={`text-[11px] sm:text-xs font-semibold leading-tight line-clamp-2 ${card.isHighlight ? 'text-emerald-100' : 'text-slate-700'}`}>
              {card.label}
            </span>
            <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0 ${card.iconBg}`}>
              {card.icon}
            </div>
          </div>

          <div className={`text-xl sm:text-2xl font-black font-mono tracking-tight tabular-nums ${card.isHighlight ? 'text-white' : 'text-slate-900'}`}>
            <AnimatedCounter value={card.value} duration={850} trigger={isInView} />
          </div>
        </div>
      ))}
    </div>
  );
};
