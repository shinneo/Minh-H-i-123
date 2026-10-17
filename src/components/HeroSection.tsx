import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, BookOpen, Clock, Target } from 'lucide-react';

interface HeroSectionProps {
  onSelectChapter: (id: number) => void;
  onOpenExams: () => void;
}

const TARGET_PHRASE = 'Học với Kaisa';

export const HeroSection: React.FC<HeroSectionProps> = ({ onSelectChapter, onOpenExams }) => {
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic for "Học với Kaisa"
  useEffect(() => {
    // Finished typing full phrase, wait 3.5s before deleting
    if (subIndex === TARGET_PHRASE.length && !isDeleting) {
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, 3500);
      return () => clearTimeout(pauseTimeout);
    }

    // Finished deleting, start typing again
    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      return;
    }

    // Typing speed: 90ms forward, 45ms deleting
    const typingSpeed = isDeleting ? 45 : 90;
    const typingTimeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [subIndex, isDeleting]);

  // Current substring
  const currentText = TARGET_PHRASE.substring(0, subIndex);

  // Helper to highlight "Kaisa" with gradient
  const renderTextWithHighlight = (text: string) => {
    const prefix = 'Học với ';
    if (text.startsWith(prefix)) {
      const rest = text.slice(prefix.length);
      return (
        <span>
          {prefix}
          {rest && (
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-sm font-black">
              {rest}
            </span>
          )}
        </span>
      );
    }
    return <span>{text}</span>;
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-12 lg:pt-14 lg:pb-16 border-b border-slate-200 dark:border-slate-800">
      {/* Background Hero Asset: s1_trangmo_01.png */}
      <div className="absolute inset-0 z-0 opacity-15 dark:opacity-25 pointer-events-none">
        <img
          src="/assets/s1_trangmo_01.png"
          alt="Không gian tọa độ 3D và đồ thị giải tích Toán 12"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/80 to-slate-50 dark:via-slate-950/80 dark:to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Unboxed natural kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-4 tracking-wide uppercase">
            <span>Chương Trình GDPT Mới</span>
            <span aria-hidden="true">·</span>
            <span>Bộ GD&amp;ĐT 2025</span>
            <span aria-hidden="true">·</span>
            <span>Học Kỳ I &amp; II</span>
          </div>

          {/* Primary Title with Typing Animation (Slide 1 Blueprint & Focus Mode Target) */}
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4 min-h-[3rem] sm:min-h-[3.75rem] lg:min-h-[4.5rem] flex items-center justify-center"
            style={{ textWrap: 'balance' }}
          >
            <span>{renderTextWithHighlight(currentText)}</span>
            <span
              aria-hidden="true"
              className="inline-block w-1 sm:w-1.5 h-7 sm:h-9 lg:h-11 bg-indigo-600 dark:bg-indigo-400 ml-1.5 rounded-full animate-pulse align-middle"
            />
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Hệ thống củng cố lý thuyết trọng tâm, bài tập trắc nghiệm 4 đáp án kiểm tra tức thì, trắc nghiệm Đúng/Sai 4 ý, trả lời ngắn và bộ 10 đề thi 60 phút bấm giờ chấm thang 10.
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <button
              onClick={() => onSelectChapter(1)}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-medium text-sm rounded-lg shadow-sm shadow-indigo-600/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Bắt Đầu Với Chương 1</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenExams}
              className="px-5 py-2.5 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-medium text-sm rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <Clock className="w-4 h-4 text-amber-500" />
              <span>Bộ 10 Đề Thi 60 Phút</span>
            </button>
          </div>

          {/* 4 Feature Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left pt-6 border-t border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-start gap-2.5 p-2 rounded-lg">
              <Sparkles className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Củng cố lý thuyết</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Công thức KaTeX &amp; bẫy sai lầm</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Trắc nghiệm 4 đáp án</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Chọn đến đâu xem giải thích tới đó</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2 rounded-lg">
              <Target className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Đúng / Sai 4 ý</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Thang điểm lũy tiến Bộ GD 2025</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-2 rounded-lg">
              <Clock className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Đề kiểm tra 60P</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Chấm tự động trên thang điểm 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
