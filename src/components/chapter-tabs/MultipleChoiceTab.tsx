import React, { useState, useMemo } from 'react';
import { MultipleChoiceQuestion } from '../../types/mathTypes';
import { FormattedMathText } from '../../utils/mathUtils';
import { RotateCcw, CheckCircle, XCircle, Info, Sparkles } from 'lucide-react';

interface MultipleChoiceTabProps {
  questions: MultipleChoiceQuestion[];
}

export const MultipleChoiceTab: React.FC<MultipleChoiceTabProps> = ({ questions }) => {
  // Randomize questions when entering or pressing reset
  const [shuffleKey, setShuffleKey] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});

  // Memoize shuffled questions (15 questions)
  const activeQuestions = useMemo(() => {
    const list = [...questions];
    // Fisher-Yates shuffle
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list.slice(0, 15);
  }, [questions, shuffleKey]);

  const handleSelectOption = (qId: string, optKey: 'A' | 'B' | 'C' | 'D') => {
    // Only set once or allow changing
    setSelectedAnswers((prev) => ({
      ...prev,
      [qId]: optKey,
    }));
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShuffleKey((prev) => prev + 1);
  };

  // Stats calculation
  const totalAnswered = Object.keys(selectedAnswers).length;
  const correctCount = activeQuestions.filter(
    (q) => selectedAnswers[q.id] === q.correctKey
  ).length;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Header Card with Visual Asset: s3_tracnghiem_01.svg */}
      <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/40 p-2 shrink-0">
            <img
              src="/assets/s3_tracnghiem_01.svg"
              alt="Icon Trắc nghiệm 4 đáp án"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Trắc Nghiệm 4 Phương Án
              </h3>
              <span className="text-xs bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-semibold px-2 py-0.5 rounded-full">
                15 Câu
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Chọn đáp án tới đâu thì hệ thống lập tức chấm và hiển thị lời giải chi tiết tới đó.
            </p>
          </div>
        </div>

        {/* Action Controls & Real-time Score */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs text-slate-500 dark:text-slate-400">Tiến độ bài làm</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white tabular-nums">
              <span className="text-emerald-600 dark:text-emerald-400">{correctCount}</span> / {totalAnswered} đúng ({activeQuestions.length} câu)
            </div>
          </div>

          <button
            onClick={handleReset}
            className="px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Làm lượt bài tập mới với bộ câu hỏi được xáo trộn ngẫu nhiên"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Lượt Bài Mới</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 rounded-full"
          style={{ width: `${(totalAnswered / activeQuestions.length) * 100}%` }}
        />
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {activeQuestions.map((q, qIndex) => {
          const userChoice = selectedAnswers[q.id];
          const hasAnswered = !!userChoice;
          const isCorrect = userChoice === q.correctKey;

          return (
            <div
              key={q.id}
              className={`bg-white dark:bg-slate-800/90 rounded-2xl p-6 border transition-all ${
                hasAnswered
                  ? isCorrect
                    ? 'border-emerald-300 dark:border-emerald-800 shadow-xs'
                    : 'border-rose-300 dark:border-rose-800 shadow-xs'
                  : 'border-slate-200 dark:border-slate-700/80 hover:border-slate-300'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-bold flex items-center justify-center shrink-0">
                    {qIndex + 1}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Câu hỏi trắc nghiệm
                  </span>
                </div>

                {hasAnswered && (
                  <div
                    className={`flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-md ${
                      isCorrect
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300'
                        : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300'
                    }`}
                  >
                    {isCorrect ? (
                      <>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Chính xác (+0.25đ)</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3.5 h-3.5 text-rose-600" />
                        <span>Chưa chính xác (Đáp án đúng: {q.correctKey})</span>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Question Text */}
              <div className="text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100 leading-relaxed mb-5">
                <FormattedMathText text={q.question} />
              </div>

              {/* 4 Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                {q.options.map((opt) => {
                  const isThisSelected = userChoice === opt.key;
                  const isThisCorrect = q.correctKey === opt.key;

                  let optStyle =
                    'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/40 hover:bg-slate-100 dark:hover:bg-slate-700/50 text-slate-800 dark:text-slate-200';

                  if (hasAnswered) {
                    if (isThisCorrect) {
                      optStyle =
                        'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-900 dark:text-emerald-100 font-semibold ring-1 ring-emerald-500';
                    } else if (isThisSelected) {
                      optStyle =
                        'border-rose-500 bg-rose-50 dark:bg-rose-950/30 text-rose-900 dark:text-rose-100 ring-1 ring-rose-500';
                    } else {
                      optStyle =
                        'border-slate-200 dark:border-slate-800 opacity-60 text-slate-500 dark:text-slate-400';
                    }
                  }

                  return (
                    <button
                      key={opt.key}
                      onClick={() => handleSelectOption(q.id, opt.key)}
                      disabled={hasAnswered}
                      className={`p-3.5 rounded-xl border text-left text-sm transition-all flex items-start gap-3 cursor-pointer ${optStyle}`}
                    >
                      <span
                        className={`w-6 h-6 rounded-md font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 ${
                          hasAnswered && isThisCorrect
                            ? 'bg-emerald-600 text-white'
                            : hasAnswered && isThisSelected
                            ? 'bg-rose-600 text-white'
                            : 'bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {opt.key}
                      </span>
                      <div className="flex-1 leading-normal pt-0.5">
                        <FormattedMathText text={opt.text} />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Immediate Explanation Accordion (Visible as soon as answered) */}
              {hasAnswered && (
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/60 bg-slate-50/70 dark:bg-slate-900/50 p-4 rounded-xl">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-400 mb-2">
                    <Info className="w-4 h-4" />
                    <span>Lời giải chi tiết &amp; Phương pháp phân tích:</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    <FormattedMathText text={q.explanation} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Completion Summary Footer */}
      {totalAnswered === activeQuestions.length && (
        <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent p-6 rounded-2xl border border-emerald-300 dark:border-emerald-800 text-center space-y-3">
          <div className="inline-flex p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 mb-1">
            <Sparkles className="w-6 h-6" />
          </div>
          <h4 className="text-lg font-bold text-slate-900 dark:text-white">
            Hoàn Thành 15 Câu Trắc Nghiệm!
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
            Bạn đã trả lời đúng <strong className="text-emerald-600 dark:text-emerald-400">{correctCount}</strong> / {activeQuestions.length} câu. Hãy bấm &quot;Lượt Bài Mới&quot; để luyện tập các câu hỏi khác hoặc chuyển sang phần Đúng / Sai.
          </p>
          <button
            onClick={handleReset}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs rounded-lg shadow-sm transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Làm Lượt Bài Mới</span>
          </button>
        </div>
      )}
    </div>
  );
};
