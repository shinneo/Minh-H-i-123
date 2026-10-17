import React from 'react';
import { Bookmark, CheckCircle2, Clock } from 'lucide-react';

interface QuestionPaletteProps {
  totalQuestions: 22;
  answeredMap: Record<number, boolean>;
  flaggedMap: Record<number, boolean>;
  onToggleFlag: (qNum: number) => void;
  onScrollToQuestion: (qNum: number) => void;
  scoreMap?: Record<number, 'correct' | 'partial' | 'wrong'>;
  isSubmitted?: boolean;
}

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  answeredMap,
  flaggedMap,
  onToggleFlag,
  onScrollToQuestion,
  scoreMap,
  isSubmitted = false,
}) => {
  const answeredCount = Object.values(answeredMap).filter(Boolean).length;
  const flaggedCount = Object.values(flaggedMap).filter(Boolean).length;

  const renderSection = (title: string, start: number, end: number, subtitle: string) => {
    const list = [];
    for (let i = start; i <= end; i++) {
      list.push(i);
    }

    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-slate-800 dark:text-slate-200">{title}</span>
          <span className="text-[11px] text-slate-400">{subtitle}</span>
        </div>
        <div className="grid grid-cols-6 sm:grid-cols-6 gap-1.5">
          {list.map((qNum) => {
            const isAnswered = !!answeredMap[qNum];
            const isFlagged = !!flaggedMap[qNum];
            const scoreStatus = scoreMap?.[qNum];

            let bgClass = 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300';

            if (isSubmitted && scoreStatus) {
              if (scoreStatus === 'correct') {
                bgClass = 'bg-emerald-500 text-white border-emerald-600 font-bold';
              } else if (scoreStatus === 'partial') {
                bgClass = 'bg-amber-500 text-white border-amber-600 font-bold';
              } else {
                bgClass = 'bg-rose-500 text-white border-rose-600 font-bold';
              }
            } else if (isAnswered) {
              bgClass = 'bg-indigo-600 text-white border-indigo-600 font-bold shadow-xs';
            }

            return (
              <div key={qNum} className="relative group">
                <button
                  type="button"
                  onClick={() => onScrollToQuestion(qNum)}
                  className={`w-full aspect-square rounded-lg border text-xs font-mono font-semibold flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer ${bgClass}`}
                  title={`Đi đến Câu ${qNum}`}
                >
                  {qNum}
                </button>

                {/* Flag Icon Trigger */}
                {!isSubmitted && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleFlag(qNum);
                    }}
                    className={`absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center transition-transform hover:scale-110 cursor-pointer ${
                      isFlagged
                        ? 'bg-amber-500 text-white ring-1 ring-white'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-400 opacity-0 group-hover:opacity-100'
                    }`}
                    title={isFlagged ? 'Bỏ đánh dấu xem lại' : 'Đánh dấu câu này để xem lại'}
                  >
                    <Bookmark className="w-2.5 h-2.5" />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200 dark:border-slate-700/80 shadow-xs space-y-4">
      {/* Header status */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700/60">
        <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-indigo-500" />
          <span>Bảng Câu Hỏi (22 Câu)</span>
        </h4>
        <div className="text-xs font-semibold tabular-nums text-slate-500">
          <span className="text-indigo-600 dark:text-indigo-400 font-bold">{answeredCount}</span>/22 đã làm
        </div>
      </div>

      {/* 3 Sections */}
      {renderSection('Phần I: Trắc nghiệm', 1, 12, '12 câu · 3.0đ')}
      {renderSection('Phần II: Đúng / Sai', 13, 16, '4 câu · 4.0đ')}
      {renderSection('Phần III: Trả lời ngắn', 17, 22, '6 câu · 3.0đ')}

      {/* Legend */}
      <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-indigo-600 inline-block" />
            <span>Đã trả lời ({answeredCount})</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded bg-amber-500 inline-block" />
            <span>Xem lại ({flaggedCount})</span>
          </span>
        </div>
        {isSubmitted && (
          <div className="flex items-center justify-between pt-1">
            <span className="flex items-center gap-1 text-emerald-600 font-semibold">
              <span className="w-3 h-3 rounded bg-emerald-500 inline-block" /> Đúng
            </span>
            <span className="flex items-center gap-1 text-amber-600 font-semibold">
              <span className="w-3 h-3 rounded bg-amber-500 inline-block" /> Một phần
            </span>
            <span className="flex items-center gap-1 text-rose-600 font-semibold">
              <span className="w-3 h-3 rounded bg-rose-500 inline-block" /> Sai
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
