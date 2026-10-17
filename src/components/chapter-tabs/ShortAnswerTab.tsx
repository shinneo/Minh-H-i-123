import React, { useState, useMemo } from 'react';
import { ShortAnswerQuestion } from '../../types/mathTypes';
import { FormattedMathText } from '../../utils/mathUtils';
import { RotateCcw, CheckCircle2, XCircle, Info, Send, Keyboard } from 'lucide-react';

interface ShortAnswerTabProps {
  questions: ShortAnswerQuestion[];
}

export const ShortAnswerTab: React.FC<ShortAnswerTabProps> = ({ questions }) => {
  const [shuffleKey, setShuffleKey] = useState(0);
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [submittedQuestions, setSubmittedQuestions] = useState<Record<string, boolean>>({});

  const activeQuestions = useMemo(() => {
    const list = [...questions];
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list.slice(0, 5);
  }, [questions, shuffleKey]);

  const handleInputChange = (qId: string, val: string) => {
    if (submittedQuestions[qId]) return;
    setInputs((prev) => ({ ...prev, [qId]: val }));
  };

  const handleInsertChar = (qId: string, char: string) => {
    if (submittedQuestions[qId]) return;
    setInputs((prev) => ({
      ...prev,
      [qId]: (prev[qId] || '') + char,
    }));
  };

  const handleSubmitQuestion = (qId: string) => {
    const val = (inputs[qId] || '').trim();
    if (!val) return;
    setSubmittedQuestions((prev) => ({ ...prev, [qId]: true }));
  };

  const handleReset = () => {
    setInputs({});
    setSubmittedQuestions({});
    setShuffleKey((prev) => prev + 1);
  };

  const isAnswerCorrect = (q: ShortAnswerQuestion, userAns: string) => {
    const cleanUser = userAns.trim().toLowerCase().replace(/\s+/g, '');
    const cleanCorrect = q.correctAnswer.trim().toLowerCase().replace(/\s+/g, '');

    if (cleanUser === cleanCorrect) return true;

    if (q.acceptedAnswers) {
      return q.acceptedAnswers.some(
        (ans) => ans.trim().toLowerCase().replace(/\s+/g, '') === cleanUser
      );
    }
    return false;
  };

  const correctCount = activeQuestions.filter(
    (q) => submittedQuestions[q.id] && isAnswerCorrect(q, inputs[q.id] || '')
  ).length;

  const totalSubmitted = Object.keys(submittedQuestions).length;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Header Card with Visual Asset: s5_traloin_01.svg */}
      <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-900/40 p-2 shrink-0">
            <img
              src="/assets/s5_traloin_01.svg"
              alt="Icon Bài tập Trả lời ngắn"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Bài Tập Trả Lời Ngắn
              </h3>
              <span className="text-xs bg-purple-100 dark:bg-purple-900/60 text-purple-700 dark:text-purple-300 font-semibold px-2 py-0.5 rounded-full">
                5 Câu
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Nhập đáp án số hoặc phân số. Trả lời xong mới hiện đáp án và giải thích chi tiết.
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs text-slate-500 dark:text-slate-400">Kết quả</div>
            <div className="text-sm font-bold text-slate-900 dark:text-white tabular-nums">
              <span className="text-purple-600 dark:text-purple-400">{correctCount}</span> / {totalSubmitted} đúng (thang 5 câu)
            </div>
          </div>

          <button
            onClick={handleReset}
            className="px-3.5 py-2 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700/60 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Làm lượt bài tập mới"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Lượt Bài Mới</span>
          </button>
        </div>
      </div>

      {/* Questions list */}
      <div className="space-y-6">
        {activeQuestions.map((q, qIndex) => {
          const isSubmitted = !!submittedQuestions[q.id];
          const userVal = inputs[q.id] || '';
          const correct = isSubmitted && isAnswerCorrect(q, userVal);

          return (
            <div
              key={q.id}
              className={`bg-white dark:bg-slate-800/90 rounded-2xl p-6 border transition-all ${
                isSubmitted
                  ? correct
                    ? 'border-emerald-300 dark:border-emerald-800 shadow-xs'
                    : 'border-rose-300 dark:border-rose-800 shadow-xs'
                  : 'border-slate-200 dark:border-slate-700/80'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs font-bold flex items-center justify-center shrink-0">
                    {qIndex + 1}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Trả lời ngắn (Điền số)
                  </span>
                </div>

                {isSubmitted && (
                  <div
                    className={`flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-md ${
                      correct
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300'
                        : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300'
                    }`}
                  >
                    {correct ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Chính xác (+0.5đ)</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-3.5 h-3.5 text-rose-600" />
                        <span>Chưa chính xác (Đáp án đúng: {q.correctAnswer})</span>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Question Text */}
              <div className="text-sm sm:text-base font-medium text-slate-900 dark:text-slate-100 mb-5 leading-relaxed">
                <FormattedMathText text={q.question} />
              </div>

              {/* Answer Input Section */}
              <div className="bg-slate-50/70 dark:bg-slate-900/40 p-4 rounded-xl border border-slate-200 dark:border-slate-700/70 max-w-xl">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2 flex items-center justify-between">
                  <span>Nhập kết quả của bạn:</span>
                  <span className="text-[11px] font-normal text-slate-400">
                    (Ví dụ: 3, -2.5, 1/2)
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <input
                    type="text"
                    value={userVal}
                    disabled={isSubmitted}
                    onChange={(e) => handleInputChange(q.id, e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSubmitQuestion(q.id);
                    }}
                    placeholder="Gõ kết quả vào đây..."
                    className="flex-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg px-3.5 py-2 text-sm font-mono text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-60"
                  />

                  {!isSubmitted && (
                    <button
                      onClick={() => handleSubmitQuestion(q.id)}
                      disabled={!userVal.trim()}
                      className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                        userVal.trim()
                          ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-sm shadow-purple-600/20 active:scale-95'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Nộp bài</span>
                    </button>
                  )}
                </div>

                {/* Quick Number Buttons for Mobile / Fast input */}
                {!isSubmitted && (
                  <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-xs">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 mr-1">
                      <Keyboard className="w-3 h-3" /> Nhanh:
                    </span>
                    {['-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map((c) => (
                      <button
                        key={c}
                        onClick={() => handleInsertChar(q.id, c)}
                        className="w-7 h-7 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-mono text-xs hover:bg-purple-50 dark:hover:bg-purple-950/50 hover:border-purple-300 transition-colors cursor-pointer"
                      >
                        {c}
                      </button>
                    ))}
                    <button
                      onClick={() => setInputs((prev) => ({ ...prev, [q.id]: '' }))}
                      className="px-2 h-7 rounded-md bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs hover:bg-rose-100 transition-colors cursor-pointer ml-auto"
                    >
                      Xóa
                    </button>
                  </div>
                )}
              </div>

              {/* Reveal explanation after submission */}
              {isSubmitted && (
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/60 bg-slate-50/70 dark:bg-slate-900/50 p-4 rounded-xl">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-400 mb-1.5">
                    <Info className="w-4 h-4" />
                    <span>Lời giải chi tiết &amp; Đáp số chính thức:</span>
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
    </div>
  );
};
