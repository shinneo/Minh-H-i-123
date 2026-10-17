import React, { useState, useEffect } from 'react';
import { ChapterPracticeExam } from '../../types/mathTypes';
import { FormattedMathText } from '../../utils/mathUtils';
import { QuestionPalette } from '../QuestionPalette';
import { Clock, RotateCcw, Award, Eye, Bookmark, Printer } from 'lucide-react';

interface PracticeExamTabProps {
  exam: ChapterPracticeExam;
}

export const PracticeExamTab: React.FC<PracticeExamTabProps> = ({ exam }) => {
  const [timeLeft, setTimeLeft] = useState(exam.durationMinutes * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showMockup, setShowMockup] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'correct'>('all');

  // User answers
  const [part1Answers, setPart1Answers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [part2Answers, setPart2Answers] = useState<Record<string, Record<'a' | 'b' | 'c' | 'd', boolean | undefined>>>({});
  const [part3Answers, setPart3Answers] = useState<Record<string, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTimerRunning && timeLeft > 0 && !isSubmitted) {
      timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsSubmitted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isTimerRunning, timeLeft, isSubmitted]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleStartExam = () => {
    setIsTimerRunning(true);
  };

  const handleSubmitExam = () => {
    if (window.confirm('Bạn có chắc chắn muốn nộp bài thi để chấm điểm không?')) {
      setIsSubmitted(true);
      setIsTimerRunning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleResetExam = () => {
    setPart1Answers({});
    setPart2Answers({});
    setPart3Answers({});
    setFlaggedQuestions({});
    setTimeLeft(exam.durationMinutes * 60);
    setIsTimerRunning(false);
    setIsSubmitted(false);
  };

  const handleToggleFlag = (qNum: number) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [qNum]: !prev[qNum],
    }));
  };

  const handleScrollToQuestion = (qNum: number) => {
    const el = document.getElementById(`practice-q-${qNum}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Build Answered Map
  const answeredMap: Record<number, boolean> = {};
  exam.part1.forEach((q, idx) => {
    answeredMap[idx + 1] = !!part1Answers[q.id];
  });
  exam.part2.forEach((q, idx) => {
    const choice = part2Answers[q.id] || {};
    answeredMap[idx + 13] =
      choice.a !== undefined ||
      choice.b !== undefined ||
      choice.c !== undefined ||
      choice.d !== undefined;
  });
  exam.part3.forEach((q, idx) => {
    answeredMap[idx + 17] = !!(part3Answers[q.id] && part3Answers[q.id].trim());
  });

  // Score calculation & scoreMap
  const scoreMap: Record<number, 'correct' | 'partial' | 'wrong'> = {};

  let part1Score = 0;
  exam.part1.forEach((q, idx) => {
    const isOk = part1Answers[q.id] === q.correctKey;
    if (isOk) part1Score += 0.25;
    scoreMap[idx + 1] = isOk ? 'correct' : 'wrong';
  });

  let part2Score = 0;
  exam.part2.forEach((q, idx) => {
    const choice = part2Answers[q.id] || {};
    let matched = 0;
    q.items.forEach((item) => {
      if (choice[item.key] === item.isCorrect) matched++;
    });
    if (matched === 1) part2Score += 0.1;
    else if (matched === 2) part2Score += 0.25;
    else if (matched === 3) part2Score += 0.5;
    else if (matched === 4) part2Score += 1.0;

    if (matched === 4) scoreMap[idx + 13] = 'correct';
    else if (matched > 0) scoreMap[idx + 13] = 'partial';
    else scoreMap[idx + 13] = 'wrong';
  });

  let part3Score = 0;
  exam.part3.forEach((q, idx) => {
    const userVal = (part3Answers[q.id] || '').trim().toLowerCase().replace(/\s+/g, '');
    const correctVal = q.correctAnswer.trim().toLowerCase().replace(/\s+/g, '');
    const isOk =
      userVal === correctVal ||
      (q.acceptedAnswers &&
        q.acceptedAnswers.some((a) => a.trim().toLowerCase().replace(/\s+/g, '') === userVal));
    if (isOk) part3Score += 0.5;
    scoreMap[idx + 17] = isOk ? 'correct' : 'wrong';
  });

  const totalScore = Math.min(10, Number((part1Score + part2Score + part3Score).toFixed(2)));

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Header Card */}
      <div className="bg-white dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-bold px-2 py-0.5 rounded-full">
              Chuẩn Đề Thi BGD 2025
            </span>
            <span className="text-xs text-slate-400">· 22 Câu hỏi (Thang 10 điểm)</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
            {exam.title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            12 câu trắc nghiệm (3.0đ) + 4 câu đúng sai (4.0đ) + 6 câu trả lời ngắn (3.0đ)
          </p>
        </div>

        {/* Timer & Main Controls */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700">
            <Clock className={`w-5 h-5 ${timeLeft < 300 ? 'text-rose-500 animate-pulse' : 'text-indigo-600 dark:text-indigo-400'}`} />
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Thời gian</div>
              <div className="text-lg font-mono font-bold text-slate-900 dark:text-white tabular-nums">
                {formatTime(timeLeft)}
              </div>
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
            title="In đề thi / Xuất file PDF"
          >
            <Printer className="w-4 h-4" />
          </button>

          {!isSubmitted ? (
            !isTimerRunning ? (
              <button
                onClick={handleStartExam}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs rounded-xl shadow-sm transition-all cursor-pointer"
              >
                Bắt Đầu Làm Bài
              </button>
            ) : (
              <button
                onClick={handleSubmitExam}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-sm transition-all cursor-pointer"
              >
                Nộp Bài Chấm Điểm
              </button>
            )
          ) : (
            <button
              onClick={handleResetExam}
              className="px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-800 dark:text-slate-100 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Thi Lại</span>
            </button>
          )}

          <button
            onClick={() => setShowMockup(!showMockup)}
            className="p-2.5 text-slate-500 hover:text-slate-900 dark:hover:text-white rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 border border-slate-200 dark:border-slate-700 transition-colors"
            title="Xem Mockup đề thi (s6_deontap_01.png)"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Visual Asset: s6_deontap_01.png (Mockup Màn hình làm đề 16:9) */}
      {showMockup && (
        <div className="bg-slate-900 p-4 rounded-2xl border border-slate-700 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span className="font-bold">MOCKUP GIAO DIỆN LÀM ĐỀ THI (s6_deontap_01.png)</span>
            <button
              onClick={() => setShowMockup(false)}
              className="text-slate-400 hover:text-white"
            >
              Đóng
            </button>
          </div>
          <div className="rounded-xl overflow-hidden border border-slate-700">
            <img
              src="/assets/s6_deontap_01.png"
              alt="Mockup Màn hình làm đề thi chuẩn ma trận Bộ GD&ĐT 2025"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      )}

      {/* Score Summary Modal/Card when submitted */}
      {isSubmitted && (
        <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-emerald-500/10 p-6 rounded-2xl border border-indigo-200 dark:border-indigo-800 text-center space-y-4">
          <div className="inline-flex p-3 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-300">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
              Kết Quả Bài Thi Của Bạn
            </h4>
            <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 my-2 tabular-nums">
              {totalScore.toFixed(2)} <span className="text-base font-normal text-slate-500">/ 10.00 điểm</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-xs">
            <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="text-slate-500 mb-1">Phần I (Trắc nghiệm)</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white tabular-nums">
                {part1Score.toFixed(2)} / 3.00 đ
              </div>
            </div>
            <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="text-slate-500 mb-1">Phần II (Đúng/Sai)</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white tabular-nums">
                {part2Score.toFixed(2)} / 4.00 đ
              </div>
            </div>
            <div className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="text-slate-500 mb-1">Phần III (Trả lời ngắn)</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white tabular-nums">
                {part3Score.toFixed(2)} / 3.00 đ
              </div>
            </div>
          </div>

          {/* Filter Review Buttons */}
          <div className="flex items-center justify-center gap-2 pt-2 text-xs">
            <span className="text-slate-500 font-medium">Lọc xem câu hỏi:</span>
            <button
              onClick={() => setReviewFilter('all')}
              className={`px-3 py-1 rounded-lg font-medium cursor-pointer ${
                reviewFilter === 'all' ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              Tất Cả (22 Câu)
            </button>
            <button
              onClick={() => setReviewFilter('wrong')}
              className={`px-3 py-1 rounded-lg font-medium cursor-pointer ${
                reviewFilter === 'wrong' ? 'bg-rose-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              Chỉ Câu Làm Sai
            </button>
            <button
              onClick={() => setReviewFilter('correct')}
              className={`px-3 py-1 rounded-lg font-medium cursor-pointer ${
                reviewFilter === 'correct' ? 'bg-emerald-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              Chỉ Câu Làm Đúng
            </button>
          </div>
        </div>
      )}

      {/* Main Grid: Left Questions stream (8 cols) + Right Sticky Question Palette (4 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Questions stream */}
        <div className="lg:col-span-8 space-y-6">
          {/* PART I: 12 Multiple Choice Questions */}
          <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-700 pb-3 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Phần I
                </span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  12 Câu Trắc Nghiệm Nhiều Lựa Chọn (3.0 Điểm)
                </h4>
              </div>
              <span className="text-xs text-slate-400">Câu 1 - 12</span>
            </div>

            <div className="space-y-6">
              {exam.part1.map((q, idx) => {
                const qNum = idx + 1;
                const userChoice = part1Answers[q.id];
                const isRight = userChoice === q.correctKey;
                const isFlagged = !!flaggedQuestions[qNum];
                const scoreStatus = scoreMap[qNum];

                if (isSubmitted) {
                  if (reviewFilter === 'wrong' && scoreStatus === 'correct') return null;
                  if (reviewFilter === 'correct' && scoreStatus !== 'correct') return null;
                }

                return (
                  <div
                    key={q.id}
                    id={`practice-q-${qNum}`}
                    className="p-4 rounded-xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-700/60 transition-all"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold mb-2">
                      <span className="text-slate-500 font-bold">Câu {qNum}</span>
                      <div className="flex items-center gap-2">
                        {!isSubmitted && (
                          <button
                            type="button"
                            onClick={() => handleToggleFlag(qNum)}
                            className={`flex items-center gap-1 text-[11px] px-2 py-0.5 rounded cursor-pointer ${
                              isFlagged
                                ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300 font-bold'
                                : 'text-slate-400 hover:text-slate-600'
                            }`}
                          >
                            <Bookmark className="w-3 h-3" />
                            <span>{isFlagged ? 'Đã ghim' : 'Xem lại'}</span>
                          </button>
                        )}
                        {isSubmitted && (
                          <span className={isRight ? 'text-emerald-600 font-bold' : 'text-rose-500 font-bold'}>
                            {isRight ? 'Đúng (+0.25đ)' : `Sai (Đáp án: ${q.correctKey})`}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-3">
                      <FormattedMathText text={q.question} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {q.options.map((opt) => (
                        <button
                          key={opt.key}
                          disabled={isSubmitted}
                          onClick={() => setPart1Answers((p) => ({ ...p, [q.id]: opt.key }))}
                          className={`p-2.5 rounded-lg text-left text-xs flex items-center gap-2 border transition-colors cursor-pointer ${
                            userChoice === opt.key
                              ? isSubmitted
                                ? isRight
                                  ? 'bg-emerald-100 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200'
                                  : 'bg-rose-100 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200'
                                : 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-500 text-indigo-900 dark:text-indigo-200 font-bold'
                              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <span className="w-5 h-5 rounded font-bold flex items-center justify-center shrink-0 border border-current">
                            {opt.key}
                          </span>
                          <span>
                            <FormattedMathText text={opt.text} />
                          </span>
                        </button>
                      ))}
                    </div>

                    {isSubmitted && (
                      <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400">
                        <strong>Giải thích:</strong> <FormattedMathText text={q.explanation} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* PART II: 4 True/False Questions */}
          <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-700 pb-3 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Phần II
                </span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  4 Câu Trắc Nghiệm Đúng / Sai (4.0 Điểm)
                </h4>
              </div>
              <span className="text-xs text-slate-400">Câu 13 - 16</span>
            </div>

            <div className="space-y-6">
              {exam.part2.map((q, idx) => {
                const qNum = idx + 13;
                const choice = part2Answers[q.id] || {};
                const isFlagged = !!flaggedQuestions[qNum];
                const scoreStatus = scoreMap[qNum];

                if (isSubmitted) {
                  if (reviewFilter === 'wrong' && scoreStatus === 'correct') return null;
                  if (reviewFilter === 'correct' && scoreStatus !== 'correct') return null;
                }

                return (
                  <div
                    key={q.id}
                    id={`practice-q-${qNum}`}
                    className="p-4 rounded-xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-700/60"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold mb-2">
                      <span className="text-slate-500 font-bold">Câu {qNum}</span>
                      {!isSubmitted && (
                        <button
                          type="button"
                          onClick={() => handleToggleFlag(qNum)}
                          className={`flex items-center gap-1 text-[11px] px-2 py-0.5 rounded cursor-pointer ${
                            isFlagged
                              ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300 font-bold'
                              : 'text-slate-400 hover:text-slate-600'
                          }`}
                        >
                          <Bookmark className="w-3 h-3" />
                          <span>{isFlagged ? 'Đã ghim' : 'Xem lại'}</span>
                        </button>
                      )}
                    </div>

                    <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-4">
                      <FormattedMathText text={q.context} />
                    </div>

                    <div className="space-y-2">
                      {q.items.map((item) => (
                        <div
                          key={item.key}
                          className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                        >
                          <div className="flex-1">
                            <strong className="mr-1">{item.key})</strong>
                            <FormattedMathText text={item.text} />
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                            <button
                              disabled={isSubmitted}
                              onClick={() =>
                                setPart2Answers((p) => ({
                                  ...p,
                                  [q.id]: { ...(p[q.id] || {}), [item.key]: true },
                                }))
                              }
                              className={`px-2.5 py-1 rounded text-xs font-bold cursor-pointer ${
                                choice[item.key] === true
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              Đúng
                            </button>
                            <button
                              disabled={isSubmitted}
                              onClick={() =>
                                setPart2Answers((p) => ({
                                  ...p,
                                  [q.id]: { ...(p[q.id] || {}), [item.key]: false },
                                }))
                              }
                              className={`px-2.5 py-1 rounded text-xs font-bold cursor-pointer ${
                                choice[item.key] === false
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                              }`}
                            >
                              Sai
                            </button>
                            {isSubmitted && (
                              <span className="font-bold text-[11px] text-slate-400 ml-1">
                                (Đáp án: {item.isCorrect ? 'Đ' : 'S'})
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* PART III: 6 Short Answer Questions */}
          <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 space-y-6">
            <div className="border-b border-slate-200 dark:border-slate-700 pb-3 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                  Phần III
                </span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  6 Câu Trắc Nghiệm Trả Lời Ngắn (3.0 Điểm)
                </h4>
              </div>
              <span className="text-xs text-slate-400">Câu 17 - 22</span>
            </div>

            <div className="space-y-6">
              {exam.part3.map((q, idx) => {
                const qNum = idx + 17;
                const userVal = part3Answers[q.id] || '';
                const isRight =
                  userVal.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase();
                const isFlagged = !!flaggedQuestions[qNum];
                const scoreStatus = scoreMap[qNum];

                if (isSubmitted) {
                  if (reviewFilter === 'wrong' && scoreStatus === 'correct') return null;
                  if (reviewFilter === 'correct' && scoreStatus !== 'correct') return null;
                }

                return (
                  <div
                    key={q.id}
                    id={`practice-q-${qNum}`}
                    className="p-4 rounded-xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-700/60"
                  >
                    <div className="flex items-center justify-between text-xs font-semibold mb-2">
                      <span className="text-slate-500 font-bold">Câu {qNum}</span>
                      <div className="flex items-center gap-2">
                        {!isSubmitted && (
                          <button
                            type="button"
                            onClick={() => handleToggleFlag(qNum)}
                            className={`flex items-center gap-1 text-[11px] px-2 py-0.5 rounded cursor-pointer ${
                              isFlagged
                                ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/60 dark:text-amber-300 font-bold'
                                : 'text-slate-400 hover:text-slate-600'
                            }`}
                          >
                            <Bookmark className="w-3 h-3" />
                            <span>{isFlagged ? 'Đã ghim' : 'Xem lại'}</span>
                          </button>
                        )}
                        {isSubmitted && (
                          <span className={isRight ? 'text-emerald-600 font-bold' : 'text-rose-500 font-bold'}>
                            {isRight ? 'Đúng (+0.5đ)' : `Sai (Đáp án: ${q.correctAnswer})`}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-sm font-medium text-slate-900 dark:text-slate-100 mb-3">
                      <FormattedMathText text={q.question} />
                    </div>

                    <div className="flex items-center gap-2 max-w-sm">
                      <input
                        type="text"
                        disabled={isSubmitted}
                        value={userVal}
                        placeholder="Điền đáp số..."
                        onChange={(e) => setPart3Answers((p) => ({ ...p, [q.id]: e.target.value }))}
                        className="flex-1 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-1.5 text-xs font-mono"
                      />
                    </div>

                    {isSubmitted && (
                      <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400">
                        <strong>Giải thích:</strong> <FormattedMathText text={q.explanation} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Question Palette */}
        <div className="lg:col-span-4 sticky top-40">
          <QuestionPalette
            totalQuestions={22}
            answeredMap={answeredMap}
            flaggedMap={flaggedQuestions}
            onToggleFlag={handleToggleFlag}
            onScrollToQuestion={handleScrollToQuestion}
            scoreMap={scoreMap}
            isSubmitted={isSubmitted}
          />
        </div>
      </div>
    </div>
  );
};
