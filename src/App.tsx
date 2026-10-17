import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ChapterGrid } from './components/ChapterGrid';
import { ChapterDetail } from './components/ChapterDetail';
import { SemesterExamsView } from './components/SemesterExamsModal';
import { FormulaHandbookModal } from './components/FormulaHandbookModal';
import { Footer } from './components/Footer';
import { allChapters, semesterExamsList } from './data';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('toan12_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [activeView, setActiveView] = useState<'home' | 'chapter' | 'exams'>('home');
  const [selectedChapterId, setSelectedChapterId] = useState<number>(1);
  const [isHandbookOpen, setIsHandbookOpen] = useState<boolean>(false);

  // Sync dark class on <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('toan12_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('toan12_theme', 'light');
    }
  }, [darkMode]);

  const handleSelectChapter = (id: number) => {
    setSelectedChapterId(id);
    setActiveView('chapter');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setActiveView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenExams = () => {
    setActiveView('exams');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentChapter =
    allChapters.find((c) => c.id === selectedChapterId) || allChapters[0];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Top Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeView={activeView}
        onGoHome={handleGoHome}
        onOpenExams={handleOpenExams}
        onSelectChapterId={handleSelectChapter}
        onOpenHandbook={() => setIsHandbookOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            <HeroSection
              onSelectChapter={handleSelectChapter}
              onOpenExams={handleOpenExams}
            />
            <ChapterGrid
              chapters={allChapters}
              onSelectChapter={handleSelectChapter}
            />
          </>
        )}

        {activeView === 'chapter' && (
          <ChapterDetail
            chapter={currentChapter}
            chapters={allChapters}
            onBackToHome={handleGoHome}
            onSelectChapter={handleSelectChapter}
          />
        )}

        {activeView === 'exams' && (
          <SemesterExamsView
            exams={semesterExamsList}
            onBackToHome={handleGoHome}
          />
        )}
      </main>

      {/* Formula Handbook Modal */}
      <FormulaHandbookModal
        isOpen={isHandbookOpen}
        onClose={() => setIsHandbookOpen(false)}
      />

      {/* Footer (Slide 9) */}
      <Footer />
    </div>
  );
}
