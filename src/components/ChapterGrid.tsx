import React, { useState } from 'react';
import { Chapter } from '../types/mathTypes';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ChapterGridProps {
  chapters: Chapter[];
  onSelectChapter: (id: number) => void;
}

export const ChapterGrid: React.FC<ChapterGridProps> = ({ chapters, onSelectChapter }) => {
  const [filter, setFilter] = useState<'all' | '1' | '2'>('all');

  const filteredChapters = chapters.filter((c) => {
    if (filter === 'all') return true;
    return c.semester.toString() === filter;
  });

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="chuong-hoc">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
            Mục lục chương trình
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Các Chương Học Trong Toán 12
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Bấm chọn bất kỳ chương nào để vào củng cố lý thuyết và luyện tập 5 phân hệ
          </p>
        </div>

        {/* Semester Filter Tabs */}
        <div className="flex items-center gap-1 p-1 bg-slate-200/70 dark:bg-slate-800 rounded-lg self-start sm:self-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              filter === 'all'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Tất Cả (6 Chương)
          </button>
          <button
            onClick={() => setFilter('1')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              filter === '1'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Học Kỳ I (1 - 3)
          </button>
          <button
            onClick={() => setFilter('2')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              filter === '2'
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Học Kỳ II (4 - 6)
          </button>
        </div>
      </div>

      {/* Chapter Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredChapters.map((ch) => (
          <div
            key={ch.id}
            onClick={() => onSelectChapter(ch.id)}
            className="group relative bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Header with Visual Asset: s1_trangmo_02.svg */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700/60 p-2 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <img
                      src="/assets/s1_trangmo_02.svg"
                      alt={`Biểu trưng ${ch.code}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 tracking-wider">
                      {ch.code}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 ml-2">
                      · Học Kỳ {ch.semester}
                    </span>
                  </div>
                </div>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug mb-2">
                {ch.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
                {ch.subtitle}
              </p>
            </div>

            {/* Bottom Meta & Action */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  {ch.stats.mcCount} trắc nghiệm
                </span>
                <span>·</span>
                <span>5 Đúng/Sai</span>
              </div>

              <span className="inline-flex items-center gap-1 font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-0.5 transition-transform">
                Vào học
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
