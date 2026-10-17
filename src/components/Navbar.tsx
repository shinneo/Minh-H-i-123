import React from 'react';
import { BookOpen, Moon, Sun, Award, Clock } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  activeView: 'home' | 'chapter' | 'exams';
  onGoHome: () => void;
  onOpenExams: () => void;
  onSelectChapterId: (id: number) => void;
  onOpenHandbook: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onGoHome,
  onOpenExams,
  onSelectChapterId,
  onOpenHandbook,
}) => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title wordmark */}
        <button
          onClick={onGoHome}
          className="flex items-center gap-2.5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-sm shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white whitespace-nowrap block leading-tight">
              Toán 12 • <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-extrabold">Kaisa</span>
            </span>
            <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 whitespace-nowrap block">
              Học với Kaisa
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <button
            onClick={onGoHome}
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap py-1 cursor-pointer"
          >
            Trang Chủ
          </button>

          {/* Quick Chapters Dropdown / Direct Link */}
          <div className="relative group py-1">
            <span className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1">
              Chương Học (1 - 6)
            </span>
            <div className="absolute left-0 top-full hidden group-hover:block w-72 pt-2 z-50">
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-2 text-xs">
                <button
                  onClick={() => onSelectChapterId(1)}
                  className="w-full text-left px-3 py-2 hover:bg-indigo-50 dark:hover:bg-slate-700/50 block text-slate-800 dark:text-slate-200 font-medium"
                >
                  Chương 1: Ứng dụng đạo hàm
                </button>
                <button
                  onClick={() => onSelectChapterId(2)}
                  className="w-full text-left px-3 py-2 hover:bg-indigo-50 dark:hover:bg-slate-700/50 block text-slate-800 dark:text-slate-200 font-medium"
                >
                  Chương 2: Tọa độ vectơ Oxyz
                </button>
                <button
                  onClick={() => onSelectChapterId(3)}
                  className="w-full text-left px-3 py-2 hover:bg-indigo-50 dark:hover:bg-slate-700/50 block text-slate-800 dark:text-slate-200 font-medium"
                >
                  Chương 3: Số đặc trưng đo độ phân tán
                </button>
                <button
                  onClick={() => onSelectChapterId(4)}
                  className="w-full text-left px-3 py-2 hover:bg-indigo-50 dark:hover:bg-slate-700/50 block text-slate-800 dark:text-slate-200 font-medium"
                >
                  Chương 4: Nguyên hàm & Tích phân
                </button>
                <button
                  onClick={() => onSelectChapterId(5)}
                  className="w-full text-left px-3 py-2 hover:bg-indigo-50 dark:hover:bg-slate-700/50 block text-slate-800 dark:text-slate-200 font-medium"
                >
                  Chương 5: Phương pháp tọa độ Oxyz
                </button>
                <button
                  onClick={() => onSelectChapterId(6)}
                  className="w-full text-left px-3 py-2 hover:bg-indigo-50 dark:hover:bg-slate-700/50 block text-slate-800 dark:text-slate-200 font-medium"
                >
                  Chương 6: Xác suất có điều kiện
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={onOpenHandbook}
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap py-1 cursor-pointer flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4 text-indigo-500" />
            Sổ Tay Công Thức
          </button>

          <button
            onClick={onOpenExams}
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap py-1 cursor-pointer flex items-center gap-1.5"
          >
            <Clock className="w-4 h-4 text-amber-500" />
            10 Đề Thi 60 Phút
          </button>

          <a
            href="#thang-diem"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('thang-diem')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap py-1 cursor-pointer flex items-center gap-1"
          >
            <Award className="w-4 h-4 text-emerald-500" />
            Quy Tắc Điểm 2025
          </a>
        </nav>

        {/* Zone 3: 1 primary action + Theme toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title={darkMode ? 'Chuyển sang Giao diện Sáng' : 'Chuyển sang Giao diện Tối'}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button
            onClick={onOpenExams}
            className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 transition-all rounded-lg shadow-sm shadow-indigo-600/20 whitespace-nowrap cursor-pointer flex items-center gap-1.5"
          >
            <Clock className="w-4 h-4" />
            <span>Thi Thử 60P</span>
          </button>
        </div>
      </div>
    </header>
  );
};
