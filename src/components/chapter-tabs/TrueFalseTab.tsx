import React, { useState, useMemo } from 'react';
import { TrueFalseQuestion } from '../../types/mathTypes';
import { FormattedMathText } from '../../utils/mathUtils';
import { RotateCcw, CheckCircle2, XCircle, Award, Check, Info } from 'lucide-react';

interface TrueFalseTabProps {
  questions: TrueFalseQuestion[];
}

export const TrueFalseTab: React.FC<TrueFalseTabProps> = ({ questions }) => {
  const [shuffleKey, setShuffleKey] = useState(0);

  // User responses: { [qId]: { a?: boolean; b?: boolean; c?: boolean; d?: boolean } }
  const [userChoices, setUserChoices] = useState<Record<string, Record<'a' | 'b' | 'c' | 'd', boolean | undefined>>>({});

  // Submitted questions state: { [qId]: boolean }
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<string, boolean>>({});

  const activeQuestions = useMemo(() => {
    const list = [...questions];
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list.slice(0, 5);
  }, [questions, shuffleKey]);

  const handleSelectSubItem = (qId: string, subKey: 'a' | 'b' | 'c' | 'd', value: boolean) => {
    if (submittedQuestions[qId]) return; // locked after submission

    setUserChoices((prev) => ({
      ...prev,
      [qId]: {
        ...(prev[qId] || {}),
        [subKey]: value,
      },
    }));
  };

  const isQuestionReady = (qId: string) => {
    const choice = userChoices[qId];
    return (
      choice &&
      choice.a !== undefined &&
      choice.b !== undefined &&
      choice.c !== undefined &&
      choice.d !== undefined
    );
  };

  const handleSubmitQuestion = (qId: string) => {
    if (!isQuestionReady(qId)) return;
    setSubmittedQuestions((prev) => ({ ...prev, [qId]: true }));
  };

  const handleReset = () => {
    setUserChoices({});
    setSubmittedQuestions({});
    setShuffleKey((prev) => prev + 1);
  };

  // Score calculation for 1 question according to Ministry 2025 rule:
  // 1 correct item = 0.1đ, 2 items = 0.25đ, 3 items = 0.5đ, 4 items = 1.0đ
  const calculateQuestionScore = (q: TrueFalseQuestion) => {
    if (!submittedQuestions[q.id]) return 0;
    const choice = userChoices[q.id] || {};
    let matchedCount = 0;
    q.items.forEach((item) => {
      if (choice[item.key] === item.isCorrect) {
        matchedCount++;
      }
    });

    if (matchedCount === 1) return 0.1;
    if (matchedCount === 2) return 0.25;
    if (matchedCount === 3) return 0.5;
    if (matchedCount === 4) return 1.0;
    return 0;
  };

  const totalScore = activeQuestions.reduce((acc, q) => acc + calculateQuestionScore(q), 0);
  const submittedCount = Object.keys(submittedQuestions).length;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Header Card with Visual Asset: s4_dungtai_01.svg */}
      <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/40 p-2 shrink-0">
            <img
              src="/assets/s4_dungtai_01.svg"
              alt="Icon Bài tập Đúng Sai"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Trắc Nghiệm Đúng / Sai
              </h3>
              <span className="text-xs bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-semibold px-2 py-0.5 rounded-full">
                5 Câu (4 ý/câu)
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Chọn đủ cả 4 ý a, b, c, d mới bấm kiểm tra đáp án. Chấm theo quy tắc lũy tiến Bộ GD&amp;ĐT 2025.
            </p>
          </div>
        </div>

        {/* Live Score & Reset */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-xs text-slate-500 dark:text-slate-400">Điểm đạt được</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white tabular-nums">
              <span className="text-emerald-600 dark:text-emerald-400 text-base">{totalScore.toFixed(2)}</span> / 5.00 đ ({submittedCount}/5 câu)
            </div>
          </div>

          <button
            onClick={handleReset}
            className="px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Làm lượt bài tập mới với bộ câu hỏi ngẫu nhiên"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Lượt Bài Mới</span>
          </button>
        </div>
      </div>

      {/* Scoring Matrix Banner */}
      <div className="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
          <Award className="w-4 h-4 text-amber-500" />
          <span>Quy tắc chấm Đúng/Sai chuẩn 2025:</span>
        </div>
        <div className="flex items-center gap-3 font-mono">
          <span>1 ý đúng = <strong>0.10đ</strong></span>
          <span>·</span>
          <span>2 ý đúng = <strong>0.25đ</strong></span>
          <span>·</span>
          <span>3 ý đúng = <strong>0.50đ</strong></span>
          <span>·</span>
          <span className="text-emerald-600 dark:text-emerald-400">4 ý đúng = <strong>1.00đ</strong></span>
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-6">
        {activeQuestions.map((q, qIndex) => {
          const choice = userChoices[q.id] || {};
          const isSubmitted = !!submittedQuestions[q.id];
          const isReady = isQuestionReady(q.id);
          const score = calculateQuestionScore(q);

          let matchedCount = 0;
          if (isSubmitted) {
            q.items.forEach((item) => {
              if (choice[item.key] === item.isCorrect) matchedCount++;
            });
          }

          return (
            <div
              key={q.id}
              className={`bg-white dark:bg-slate-800/90 rounded-2xl p-6 border transition-all ${
                isSubmitted
                  ? score === 1.0
                    ? 'border-emerald-300 dark:border-emerald-800'
                    : 'border-amber-300 dark:border-amber-800'
                  : 'border-slate-200 dark:border-slate-700/80'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-center shrink-0">
                    {qIndex + 1}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Bài tập Đúng / Sai (4 ý)
                  </span>
                </div>

                {isSubmitted && (
                  <div className="text-xs font-bold px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Đúng {matchedCount}/4 ý (+{score.toFixed(2)}đ)</span>
                  </div>
                )}
              </div>

              {/* Context Statement */}
              <div className="text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100 mb-5 leading-relaxed">
                <FormattedMathText text={q.context} />
              </div>

              {/* 4 Sub-items Table */}
              <div className="space-y-3 mb-5">
                {q.items.map((item) => {
                  const userVal = choice[item.key];
                  const isItemCorrect = userVal === item.isCorrect;

                  return (
                    <div
                      key={item.key}
                      className={`p-3.5 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isSubmitted
                          ? isItemCorrect
                            ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-900'
                            : 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-300 dark:border-rose-900'
                          : 'bg-slate-50/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-700/70'
                      }`}
                    >
                      {/* Left: Statement */}
                      <div className="flex items-start gap-3 flex-1">
                        <span className="font-bold text-xs uppercase px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 mt-0.5">
                          {item.key})
                        </span>
                        <div className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-normal">
                          <FormattedMathText text={item.text} />
                        </div>
                      </div>

                      {/* Right: True / False Selection Buttons */}
                      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                        <button
                          onClick={() => handleSelectSubItem(q.id, item.key, true)}
                          disabled={isSubmitted}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                            userVal === true
                              ? isSubmitted
                                ? item.isCorrect
                                  ? 'bg-emerald-600 text-white ring-2 ring-emerald-400'
                                  : 'bg-rose-600 text-white ring-2 ring-rose-400'
                                : 'bg-indigo-600 text-white shadow-xs'
                              : 'bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                          }`}
                        >
                          <Check className="w-3 h-3" />
                          <span>Đúng</span>
                        </button>

                        <button
                          onClick={() => handleSelectSubItem(q.id, item.key, false)}
                          disabled={isSubmitted}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                            userVal === false
                              ? isSubmitted
                                ? !item.isCorrect
                                  ? 'bg-emerald-600 text-white ring-2 ring-emerald-400'
                                  : 'bg-rose-600 text-white ring-2 ring-rose-400'
                                : 'bg-indigo-600 text-white shadow-xs'
                              : 'bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                          }`}
                        >
                          <XCircle className="w-3 h-3" />
                          <span>Sai</span>
                        </button>

                        {/* Status feedback tag when submitted */}
                        {isSubmitted && (
                          <span
                            className={`text-xs font-bold px-2 py-0.5 rounded ml-1 ${
                              isItemCorrect
                                ? 'text-emerald-700 dark:text-emerald-400'
                                : 'text-rose-700 dark:text-rose-400'
                            }`}
                          >
                            (Đáp án: {item.isCorrect ? 'Đúng' : 'Sai'})
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Submit Button (Requires all 4 items to be picked) */}
              {!isSubmitted ? (
                <div className="flex items-center justify-between pt-2">
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {isReady ? (
                      <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                        ✓ Đã chọn đủ 4 ý. Bấm nút bên phải để nộp bài!
                      </span>
                    ) : (
                      <span>Vui lòng chọn Đúng hoặc Sai cho đủ cả 4 ý a, b, c, d trước khi nộp.</span>
                    )}
                  </div>
                  <button
                    onClick={() => handleSubmitQuestion(q.id)}
                    disabled={!isReady}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                      isReady
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm shadow-emerald-600/20 active:scale-95'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    Kiểm Tra Đáp Án &amp; Giải Thích
                  </button>
                </div>
              ) : (
                /* Full Explanation Reveal */
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/60 bg-slate-50/70 dark:bg-slate-900/50 p-4 rounded-xl space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-400">
                    <Info className="w-4 h-4" />
                    <span>Lời giải chi tiết từng ý:</span>
                  </div>
                  <div className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {q.items.map((item) => (
                      <div key={item.key} className="pl-3 border-l-2 border-indigo-200 dark:border-indigo-800">
                        <strong>Ý {item.key}) [{item.isCorrect ? 'ĐÚNG' : 'SAI'}]:</strong>{' '}
                        <FormattedMathText text={item.explanation} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
