import React from 'react';
import { Chapter } from '../../types/mathTypes';
import { FormattedMathText } from '../../utils/mathUtils';
import { BookMarked, Lightbulb, AlertTriangle, Copy, Check } from 'lucide-react';

export const TheoryTab: React.FC<{ chapter: Chapter }> = ({ chapter }) => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const handleCopy = (formula: string, index: number) => {
    navigator.clipboard.writeText(formula);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Overview Banner */}
      <div className="bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-transparent p-6 rounded-2xl border border-indigo-200/50 dark:border-indigo-900/30">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
          <BookMarked className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          {chapter.theory.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300">
          Tổng hợp kiến thức cốt lõi, hệ thống công thức giải nhanh và sơ đồ tư duy giúp ghi nhớ sâu toàn bộ kiến thức {chapter.title.toLowerCase()}.
        </p>
      </div>

      {/* Grid: Theory Summary + Infographic Asset (s2_cungko_01.jpg) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Theory core (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              Lí Thuyết Trọng Tâm Cần Nắm
            </h4>
            <div className="space-y-3">
              {chapter.theory.summary.map((item, idx) => (
                <div key={idx} className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed pl-3 border-l-2 border-indigo-200 dark:border-indigo-800">
                  <FormattedMathText text={item} />
                </div>
              ))}
            </div>
          </div>

          {/* Key Formulas Deck */}
          <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Bảng Công Thức Vàng Cần Lưu Nhớ &amp; Mở Rộng
            </h4>
            <div className="space-y-4">
              {chapter.theory.keyFormulas.map((f, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200/80 dark:border-slate-700/60"
                >
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                    <span>{f.name}</span>
                    <button
                      onClick={() => handleCopy(f.formula, idx)}
                      className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1"
                      title="Sao chép mã công thức LaTeX"
                    >
                      {copiedIndex === idx ? (
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                  <div className="text-indigo-600 dark:text-indigo-300 font-medium py-1">
                    <FormattedMathText text={`$$${f.formula}$$`} />
                  </div>
                  {f.note && (
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 italic">
                      Lưu ý: {f.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Infographic Asset & Pitfalls (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Visual Asset: s2_cungko_01.jpg (Infographic Lý thuyết 4:5) */}
          <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-4 border border-slate-200 dark:border-slate-700/80">
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wide">
              Infographic Trực Quan (4:5)
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700">
              <img
                src="/assets/s2_cungko_01.jpg"
                alt="Infographic củng cố kiến thức và sơ đồ tư duy phương pháp giải toán 12"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Methods */}
          <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              Phương Pháp Giải Các Dạng Toán
            </h4>
            <div className="space-y-4 text-xs text-slate-600 dark:text-slate-300">
              {chapter.theory.typicalMethods.map((m, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/20">
                  <div className="font-bold text-slate-900 dark:text-white mb-2">{m.name}</div>
                  <ul className="list-disc pl-4 space-y-1">
                    {m.steps.map((s, sIdx) => (
                      <li key={sIdx}>
                        <FormattedMathText text={s} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pitfalls & Mistakes */}
          <div className="bg-rose-500/5 dark:bg-rose-950/20 rounded-2xl p-6 border border-rose-500/20">
            <h4 className="text-sm font-bold text-rose-700 dark:text-rose-400 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Bẫy Sai Lầm Thường Gặp Cần Tránh
            </h4>
            <ul className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
              {chapter.theory.pitfalls.map((p, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold shrink-0 mt-0.5">•</span>
                  <div className="flex-1 leading-relaxed">
                    <FormattedMathText text={p} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
