import React, { useState, useMemo } from 'react';
import { FormattedMathText } from '../utils/mathUtils';
import { X, Search, Copy, Check, BookOpen } from 'lucide-react';
import { allChapters } from '../data';

interface FormulaHandbookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FormulaHandbookModal: React.FC<FormulaHandbookModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChapterId, setSelectedChapterId] = useState<number | 'all'>('all');
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);

  // Extract all formulas
  const allFormulas = useMemo(() => {
    return allChapters.flatMap((ch) =>
      ch.theory.keyFormulas.map((f) => ({
        ...f,
        chapterCode: ch.code,
        chapterTitle: ch.title,
        chapterId: ch.id,
      }))
    );
  }, []);

  const filteredFormulas = useMemo(() => {
    return allFormulas.filter((f) => {
      const matchChapter =
        selectedChapterId === 'all' || f.chapterId === selectedChapterId;
      const matchSearch =
        searchTerm.trim() === '' ||
        f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (f.note && f.note.toLowerCase().includes(searchTerm.toLowerCase())) ||
        f.chapterTitle.toLowerCase().includes(searchTerm.toLowerCase());
      return matchChapter && matchSearch;
    });
  }, [allFormulas, selectedChapterId, searchTerm]);

  const handleCopy = (formula: string) => {
    navigator.clipboard.writeText(formula);
    setCopiedFormula(formula);
    setTimeout(() => setCopiedFormula(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[85vh] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Sổ Tay Công Thức Vàng Toán 12
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tra cứu nhanh hệ thống công thức trọng tâm 6 chương chuẩn GDPT 2025
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-3 items-center">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm công thức (ví dụ: tiệm cận, Oxyz, nguyên hàm, Bayes...)"
              className="w-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto scrollbar-none pb-1 sm:pb-0 text-xs">
            <button
              onClick={() => setSelectedChapterId('all')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap cursor-pointer transition-colors ${
                selectedChapterId === 'all'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
              }`}
            >
              Tất Cả
            </button>
            {allChapters.map((ch) => (
              <button
                key={ch.id}
                onClick={() => setSelectedChapterId(ch.id)}
                className={`px-2.5 py-1.5 rounded-lg font-medium whitespace-nowrap cursor-pointer transition-colors ${
                  selectedChapterId === ch.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100'
                }`}
              >
                Ch.{ch.id}
              </button>
            ))}
          </div>
        </div>

        {/* Formulas Grid */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {filteredFormulas.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-xs">
              Không tìm thấy công thức nào phù hợp với từ khóa &quot;{searchTerm}&quot;.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredFormulas.map((f, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-2 hover:border-indigo-500/50 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                        {f.chapterCode}
                      </span>
                      <button
                        onClick={() => handleCopy(f.formula)}
                        className="p-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        title="Sao chép LaTeX"
                      >
                        {copiedFormula === f.formula ? (
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-2">
                      {f.name}
                    </h4>

                    <div className="py-2 px-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl text-center overflow-x-auto text-indigo-700 dark:text-indigo-300 font-mono text-xs">
                      <FormattedMathText text={`$$${f.formula}$$`} />
                    </div>
                  </div>

                  {f.note && (
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 italic pt-2 border-t border-slate-100 dark:border-slate-700/60">
                      Ghi chú: {f.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
