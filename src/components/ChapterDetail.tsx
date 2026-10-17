import React, { useState } from 'react';
import { Chapter } from '../types/mathTypes';
import { TheoryTab } from './chapter-tabs/TheoryTab';
import { MultipleChoiceTab } from './chapter-tabs/MultipleChoiceTab';
import { TrueFalseTab } from './chapter-tabs/TrueFalseTab';
import { ShortAnswerTab } from './chapter-tabs/ShortAnswerTab';
import { PracticeExamTab } from './chapter-tabs/PracticeExamTab';
import { ArrowLeft, BookOpen, CheckCircle, HelpCircle, Edit3, FileText, ChevronRight } from 'lucide-react';

interface ChapterDetailProps {
  chapter: Chapter;
  chapters: Chapter[];
  onBackToHome: () => void;
  onSelectChapter: (id: number) => void;
}

export type TabKey = 'theory' | 'multiple-choice' | 'true-false' | 'short-answer' | 'exam';

export const ChapterDetail: React.FC<ChapterDetailProps> = ({
  chapter,
  chapters,
  onBackToHome,
  onSelectChapter,
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>('theory');

  const tabList = [
    {
      key: 'theory' as TabKey,
      label: 'Củng Cố Kiến Thức',
      icon: BookOpen,
      badge: 'Lý thuyết & CT',
    },
    {
      key: 'multiple-choice' as TabKey,
      label: 'Trắc Nghiệm 4 Đáp Án',
      icon: CheckCircle,
      badge: '15 Câu check tức thì',
    },
    {
      key: 'true-false' as TabKey,
      label: 'Bài Tập Đúng / Sai',
      icon: HelpCircle,
      badge: '5 Câu (4 ý/câu)',
    },
    {
      key: 'short-answer' as TabKey,
      label: 'Trả Lời Ngắn',
      icon: Edit3,
      badge: '5 Câu điền số',
    },
    {
      key: 'exam' as TabKey,
      label: 'Đề Ôn Tập Chương',
      icon: FileText,
      badge: '22 Câu · 10 Điểm',
    },
  ];

  return (
    <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb & Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <button
            onClick={onBackToHome}
            className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1 font-medium cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Trang Chủ</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />
          <span className="font-medium text-slate-700 dark:text-slate-300">
            {chapter.code}
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />
          <span className="text-indigo-600 dark:text-indigo-400 font-semibold truncate max-w-xs">
            {chapter.title}
          </span>
        </div>

        {/* Quick Chapter Switcher */}
        <div className="flex items-center gap-1 text-xs">
          <span className="text-slate-400 mr-1 hidden sm:inline">Chuyển chương:</span>
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => onSelectChapter(ch.id)}
              className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                ch.id === chapter.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {ch.id}
            </button>
          ))}
        </div>
      </div>

      {/* Chapter Hero Title Block */}
      <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700/80 shadow-xs mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                {chapter.code} · HỌC KỲ {chapter.semester}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {chapter.title}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
              {chapter.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* 5-Tabs Navigation Segmented Control */}
      <div className="mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200 dark:border-slate-800">
          {tabList.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;

            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`group flex items-center gap-2.5 px-4 py-3 text-xs sm:text-sm font-semibold whitespace-nowrap rounded-xl transition-all cursor-pointer shrink-0 border ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm shadow-indigo-600/20'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'}`} />
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-md font-normal ${
                    isActive
                      ? 'bg-indigo-700/60 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                  }`}
                >
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Tab Content Area */}
      <div>
        {activeTab === 'theory' && <TheoryTab chapter={chapter} />}
        {activeTab === 'multiple-choice' && (
          <MultipleChoiceTab questions={chapter.mcBank} />
        )}
        {activeTab === 'true-false' && (
          <TrueFalseTab questions={chapter.tfBank} />
        )}
        {activeTab === 'short-answer' && (
          <ShortAnswerTab questions={chapter.saBank} />
        )}
        {activeTab === 'exam' && <PracticeExamTab exam={chapter.chapterExam} />}
      </div>
    </div>
  );
};
