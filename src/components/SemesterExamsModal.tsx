import React, { useState } from 'react';
import { SemesterExam } from '../types/mathTypes';
import { FormattedMathText } from '../utils/mathUtils';
import { QuestionPalette } from './QuestionPalette';
import { Clock, ArrowLeft, Play, Bookmark, Printer } from 'lucide-react';

interface SemesterExamsViewProps {
  exams: SemesterExam[];
  onBackToHome: () => void;
}

export const SemesterExamsView: React.FC<SemesterExamsViewProps> = ({ exams, onBackToHome }) => {
  const [selectedExamId, setSelectedExamId] = useState<string | null>(null);
  const [activeSemesterFilter, setActiveSemesterFilter] = useState<'all' | 'gk1' | 'ck1' | 'gk2' | 'ck2'>('all');

  const selectedExam = exams.find((e) => e.id === selectedExamId);

  const filteredExams = exams.filter((e) => {
    if (activeSemesterFilter === 'all') return true;
    return e.semesterType === activeSemesterFilter;
  });

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
        <button
          onClick={onBackToHome}
          className="hover:text-indigo-600 flex items-center gap-1 font-medium cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Trang Chủ</span>
        </button>
        <span>·</span>
        <span className="font-semibold text-slate-800 dark:text-slate-200">
          Bộ 10 Đề Ôn Thi Giữa Kỳ &amp; Cuối Kỳ (Slide 7 &amp; 8)
        </span>
      </div>

      {!selectedExam ? (
        /* Exams Catalog View */
        <div className="space-y-8 animate-fadeIn">
          {/* Header Banners Grid: Slide 7 (s7_giuaky1_01.jpg) & Slide 8 (s8_giuaky2_01.jpg) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Slide 7 Banner */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xs group">
              <img
                src="/assets/s7_giuaky1_01.jpg"
                alt="Banner Đề ôn thi Học kỳ I Toán 12"
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-1">
                  <img src="/assets/s7_giuaky1_02.svg" alt="Hoàn thành" className="w-5 h-5" />
                  <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">HỌC KỲ I</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  Bộ Đề Ôn Giữa Kỳ I &amp; Cuối Kỳ I
                </h3>
                <p className="text-xs text-slate-300 mt-1">Đề số 01 đến 05 · Thời gian 60 phút</p>
              </div>
            </div>

            {/* Slide 8 Banner */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xs group">
              <img
                src="/assets/s8_giuaky2_01.jpg"
                alt="Banner Đề ôn thi Học kỳ II Toán 12"
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 flex flex-col justify-end">
                <div className="flex items-center gap-2 mb-1">
                  <img src="/assets/s8_giuaky2_02.svg" alt="Đồng hồ đếm giờ 60p" className="w-5 h-5" />
                  <span className="text-xs font-bold text-teal-300 uppercase tracking-wider">HỌC KỲ II &amp; TỐT NGHIỆP</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                  Bộ Đề Ôn Giữa Kỳ II, Cuối Kỳ II &amp; Thi Thử 2025
                </h3>
                <p className="text-xs text-slate-300 mt-1">Đề số 06 đến 10 · Chuẩn cấu trúc ma trận mới</p>
              </div>
            </div>
          </div>

          {/* Filter segment */}
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Danh Sách 10 Đề Thi Bấm Giờ 60 Phút
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Mỗi đề gồm 22 câu chuẩn ma trận Bộ GD&amp;ĐT (12 Trắc nghiệm + 4 Đúng/Sai + 6 Trả lời ngắn)
              </p>
            </div>

            <div className="flex items-center gap-1 p-1 bg-slate-200/70 dark:bg-slate-800 rounded-lg text-xs">
              <button
                onClick={() => setActiveSemesterFilter('all')}
                className={`px-3 py-1.5 rounded-md font-medium cursor-pointer ${
                  activeSemesterFilter === 'all'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Tất Cả 10 Đề
              </button>
              <button
                onClick={() => setActiveSemesterFilter('gk1')}
                className={`px-3 py-1.5 rounded-md font-medium cursor-pointer ${
                  activeSemesterFilter === 'gk1'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Giữa Kì 1 (Đề 1-3)
              </button>
              <button
                onClick={() => setActiveSemesterFilter('ck1')}
                className={`px-3 py-1.5 rounded-md font-medium cursor-pointer ${
                  activeSemesterFilter === 'ck1'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Cuối Kì 1 (Đề 4-5)
              </button>
              <button
                onClick={() => setActiveSemesterFilter('gk2')}
                className={`px-3 py-1.5 rounded-md font-medium cursor-pointer ${
                  activeSemesterFilter === 'gk2'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Giữa Kì 2 (Đề 6-8)
              </button>
              <button
                onClick={() => setActiveSemesterFilter('ck2')}
                className={`px-3 py-1.5 rounded-md font-medium cursor-pointer ${
                  activeSemesterFilter === 'ck2'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                Cuối Kì 2 &amp; TN (Đề 9-10)
              </button>
            </div>
          </div>

          {/* 10 Exams Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredExams.map((exam) => (
              <div
                key={exam.id}
                className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 hover:border-indigo-500/50 transition-all shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 tracking-wider">
                      {exam.code}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500 font-mono">
                      <Clock className="w-3.5 h-3.5 text-amber-500" />
                      60 phút
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {exam.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                    {exam.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs">
                  <span className="text-slate-500">22 câu · Thang 10 điểm</span>
                  <button
                    onClick={() => setSelectedExamId(exam.id)}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Làm Đề Ngay</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Exam In-Progress Screen */
        <ActiveExamSession
          exam={selectedExam}
          onExitExam={() => setSelectedExamId(null)}
        />
      )}
    </div>
  );
};

interface ActiveExamSessionProps {
  exam: SemesterExam;
  onExitExam: () => void;
}

const ActiveExamSession: React.FC<ActiveExamSessionProps> = ({ exam, onExitExam }) => {
  const [timeLeft, setTimeLeft] = useState(exam.durationMinutes * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'correct'>('all');

  const [part1Answers, setPart1Answers] = useState<Record<string, 'A' | 'B' | 'C' | 'D'>>({});
  const [part2Answers, setPart2Answers] = useState<Record<string, Record<'a' | 'b' | 'c' | 'd', boolean | undefined>>>({});
  const [part3Answers, setPart3Answers] = useState<Record<string, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<number, boolean>>({});

  // Countdown timer
  React.useEffect(() => {
    if (timeLeft <= 0 || isSubmitted) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, isSubmitted]);

  const formatClock = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleToggleFlag = (qNum: number) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [qNum]: !prev[qNum],
    }));
  };

  const handleScrollToQuestion = (qNum: number) => {
    const el = document.getElementById(`exam-q-${qNum}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSubmit = () => {
    if (window.confirm('Bạn có chắc chắn muốn nộp bài để nhận bảng điểm và lời giải chi tiết?')) {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Build Answered Map for 22 Questions
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

  let p1Score = 0;
  exam.part1.forEach((q, idx) => {
    const isOk = part1Answers[q.id] === q.correctKey;
    if (isOk) p1Score += 0.25;
    scoreMap[idx + 1] = isOk ? 'correct' : 'wrong';
  });

  let p2Score = 0;
  exam.part2.forEach((q, idx) => {
    const choice = part2Answers[q.id] || {};
    let matched = 0;
    q.items.forEach((item) => {
      if (choice[item.key] === item.isCorrect) matched++;
    });
    if (matched === 1) p2Score += 0.1;
    else if (matched === 2) p2Score += 0.25;
    else if (matched === 3) p2Score += 0.5;
    else if (matched === 4) p2Score += 1.0;

    if (matched === 4) scoreMap[idx + 13] = 'correct';
    else if (matched > 0) scoreMap[idx + 13] = 'partial';
    else scoreMap[idx + 13] = 'wrong';
  });

  let p3Score = 0;
  exam.part3.forEach((q, idx) => {
    const userVal = (part3Answers[q.id] || '').trim().toLowerCase().replace(/\s+/g, '');
    const correctVal = q.correctAnswer.trim().toLowerCase().replace(/\s+/g, '');
    const isOk =
      userVal === correctVal ||
      (q.acceptedAnswers &&
        q.acceptedAnswers.some((a) => a.trim().toLowerCase().replace(/\s+/g, '') === userVal));
    if (isOk) p3Score += 0.5;
    scoreMap[idx + 17] = isOk ? 'correct' : 'wrong';
  });

  const totalScore = Math.min(10, Number((p1Score + p2Score + p3Score).toFixed(2)));

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Sticky Top Status Bar */}
      <div className="sticky top-20 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md flex items-center justify-between gap-4">
        <button
          onClick={onExitExam}
          className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Thoát Đề Thi</span>
        </button>

        {/* 60-Minute Stopwatch Clock with Icon: s8_giuaky2_02.svg */}
        <div className="flex items-center gap-2">
          <img
            src="/assets/s8_giuaky2_02.svg"
            alt="Đồng hồ đếm giờ 60p"
            className="w-7 h-7 shrink-0"
          />
          <div className="text-right">
            <div className="text-[10px] text-slate-400 uppercase font-semibold">Thời gian còn lại</div>
            <div className={`text-xl font-mono font-extrabold tabular-nums ${timeLeft < 300 ? 'text-rose-500 animate-pulse' : 'text-slate-900 dark:text-white'}`}>
              {formatClock(timeLeft)}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
            title="In đề thi / Xuất file PDF"
          >
            <Printer className="w-4 h-4" />
          </button>

          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer"
            >
              Nộp Bài Thi
            </button>
          ) : (
            <div className="text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
              Điểm: {totalScore.toFixed(2)} / 10.00
            </div>
          )}
        </div>
      </div>

      {/* Results Header when submitted */}
      {isSubmitted && (
        <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-indigo-500/10 p-6 rounded-2xl border border-emerald-300 dark:border-emerald-800 text-center space-y-3">
          <img
            src="/assets/s7_giuaky1_02.svg"
            alt="Icon hoàn thành bài thi"
            className="w-12 h-12 mx-auto"
          />
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
            Tổng Kết Kết Quả Bài Thi 60 Phút
          </h3>
          <div className="text-4xl font-extrabold text-emerald-600 dark:text-emerald-400 tabular-nums">
            {totalScore.toFixed(2)} <span className="text-base font-normal text-slate-500">/ 10.00 điểm</span>
          </div>
          <div className="flex justify-center gap-6 text-xs text-slate-600 dark:text-slate-300 font-mono">
            <span>Phần I: <strong>{p1Score.toFixed(2)}/3.0đ</strong></span>
            <span>·</span>
            <span>Phần II: <strong>{p2Score.toFixed(2)}/4.0đ</strong></span>
            <span>·</span>
            <span>Phần III: <strong>{p3Score.toFixed(2)}/3.0đ</strong></span>
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
          {/* Part 1 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 space-y-4">
            <h4 className="font-bold text-slate-900 dark:text-white text-base border-b pb-2 flex items-center justify-between">
              <span>Phần I: 12 Câu Trắc Nghiệm Nhiều Lựa Chọn (3.0 Điểm)</span>
              <span className="text-xs text-slate-400 font-normal">Câu 1 - 12</span>
            </h4>
            {exam.part1.map((q, idx) => {
              const qNum = idx + 1;
              const isFlagged = !!flaggedQuestions[qNum];
              const scoreStatus = scoreMap[qNum];

              if (isSubmitted) {
                if (reviewFilter === 'wrong' && scoreStatus === 'correct') return null;
                if (reviewFilter === 'correct' && scoreStatus !== 'correct') return null;
              }

              return (
                <div
                  key={q.id}
                  id={`exam-q-${qNum}`}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-700/60 text-xs transition-all"
                >
                  <div className="flex items-center justify-between font-semibold mb-2">
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
                        <span className={scoreStatus === 'correct' ? 'text-emerald-600 font-bold' : 'text-rose-500 font-bold'}>
                          {scoreStatus === 'correct' ? 'Đúng (+0.25đ)' : `Sai (Đáp án: ${q.correctKey})`}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-sm font-medium mb-3 text-slate-900 dark:text-slate-100">
                    <FormattedMathText text={q.question} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map((opt) => (
                      <button
                        key={opt.key}
                        disabled={isSubmitted}
                        onClick={() => setPart1Answers((p) => ({ ...p, [q.id]: opt.key }))}
                        className={`p-2 rounded-lg text-left border flex items-center gap-2 cursor-pointer ${
                          part1Answers[q.id] === opt.key
                            ? 'bg-indigo-600 text-white font-bold'
                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className="font-bold">{opt.key}.</span>
                        <FormattedMathText text={opt.text} />
                      </button>
                    ))}
                  </div>

                  {isSubmitted && (
                    <div className="mt-2 pt-2 border-t text-slate-600 dark:text-slate-400">
                      <strong>Đáp án: {q.correctKey}</strong>. <FormattedMathText text={q.explanation} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Part 2 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 space-y-4">
            <h4 className="font-bold text-slate-900 dark:text-white text-base border-b pb-2 flex items-center justify-between">
              <span>Phần II: 4 Câu Trắc Nghiệm Đúng / Sai (4.0 Điểm)</span>
              <span className="text-xs text-slate-400 font-normal">Câu 13 - 16</span>
            </h4>
            {exam.part2.map((q, idx) => {
              const qNum = idx + 13;
              const isFlagged = !!flaggedQuestions[qNum];
              const scoreStatus = scoreMap[qNum];

              if (isSubmitted) {
                if (reviewFilter === 'wrong' && scoreStatus === 'correct') return null;
                if (reviewFilter === 'correct' && scoreStatus !== 'correct') return null;
              }

              return (
                <div
                  key={q.id}
                  id={`exam-q-${qNum}`}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-700/60 text-xs"
                >
                  <div className="flex items-center justify-between font-semibold mb-2">
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

                  <div className="text-sm font-medium mb-3 text-slate-900 dark:text-slate-100">
                    <FormattedMathText text={q.context} />
                  </div>

                  <div className="space-y-1.5">
                    {q.items.map((it) => (
                      <div key={it.key} className="p-2 bg-white dark:bg-slate-800 rounded border flex items-center justify-between">
                        <div><strong>{it.key})</strong> <FormattedMathText text={it.text} /></div>
                        <div className="flex items-center gap-1">
                          <button
                            disabled={isSubmitted}
                            onClick={() => setPart2Answers((p) => ({ ...p, [q.id]: { ...(p[q.id] || {}), [it.key]: true } }))}
                            className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                              part2Answers[q.id]?.[it.key] === true ? 'bg-emerald-600 text-white' : 'bg-slate-200 dark:bg-slate-700'
                            }`}
                          >
                            Đúng
                          </button>
                          <button
                            disabled={isSubmitted}
                            onClick={() => setPart2Answers((p) => ({ ...p, [q.id]: { ...(p[q.id] || {}), [it.key]: false } }))}
                            className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                              part2Answers[q.id]?.[it.key] === false ? 'bg-emerald-600 text-white' : 'bg-slate-200 dark:bg-slate-700'
                            }`}
                          >
                            Sai
                          </button>
                          {isSubmitted && (
                            <span className="font-bold text-[11px] text-slate-400 ml-1">
                              (Đáp án: {it.isCorrect ? 'Đ' : 'S'})
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

          {/* Part 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 space-y-4">
            <h4 className="font-bold text-slate-900 dark:text-white text-base border-b pb-2 flex items-center justify-between">
              <span>Phần III: 6 Câu Trả Lời Ngắn (3.0 Điểm)</span>
              <span className="text-xs text-slate-400 font-normal">Câu 17 - 22</span>
            </h4>
            {exam.part3.map((q, idx) => {
              const qNum = idx + 17;
              const isFlagged = !!flaggedQuestions[qNum];
              const scoreStatus = scoreMap[qNum];

              if (isSubmitted) {
                if (reviewFilter === 'wrong' && scoreStatus === 'correct') return null;
                if (reviewFilter === 'correct' && scoreStatus !== 'correct') return null;
              }

              return (
                <div
                  key={q.id}
                  id={`exam-q-${qNum}`}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-700/60 text-xs"
                >
                  <div className="flex items-center justify-between font-semibold mb-2">
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
                        <span className={scoreStatus === 'correct' ? 'text-emerald-600 font-bold' : 'text-rose-500 font-bold'}>
                          {scoreStatus === 'correct' ? 'Đúng (+0.5đ)' : `Sai (Đáp án: ${q.correctAnswer})`}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-sm font-medium mb-3 text-slate-900 dark:text-slate-100">
                    <FormattedMathText text={q.question} />
                  </div>

                  <input
                    type="text"
                    disabled={isSubmitted}
                    value={part3Answers[q.id] || ''}
                    placeholder="Nhập kết quả..."
                    onChange={(e) => setPart3Answers((p) => ({ ...p, [q.id]: e.target.value }))}
                    className="bg-white dark:bg-slate-800 border rounded px-3 py-1.5 text-xs font-mono max-w-xs w-full"
                  />

                  {isSubmitted && (
                    <div className="mt-2 text-slate-500">
                      Đáp án: <strong>{q.correctAnswer}</strong>. <FormattedMathText text={q.explanation} />
                    </div>
                  )}
                </div>
              );
            })}
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
