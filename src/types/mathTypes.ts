export interface MultipleChoiceQuestion {
  id: string;
  question: string;
  options: {
    key: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctKey: 'A' | 'B' | 'C' | 'D';
  explanation: string;
}

export interface TrueFalseItem {
  key: 'a' | 'b' | 'c' | 'd';
  text: string;
  isCorrect: boolean; // true = Đúng, false = Sai
  explanation: string;
}

export interface TrueFalseQuestion {
  id: string;
  context: string;
  items: TrueFalseItem[];
  fullExplanation: string;
}

export interface ShortAnswerQuestion {
  id: string;
  question: string;
  correctAnswer: string; // e.g. "3", "-2.5", "1/2", "4"
  acceptedAnswers?: string[]; // Variations like ["0.5", "1/2"]
  unit?: string;
  explanation: string;
}

export interface TheorySection {
  title: string;
  summary: string[];
  keyFormulas: {
    name: string;
    formula: string;
    note?: string;
  }[];
  typicalMethods: {
    name: string;
    steps: string[];
    example?: string;
  }[];
  pitfalls: string[];
}

export interface ChapterPracticeExam {
  id: string;
  title: string;
  durationMinutes: number;
  part1: MultipleChoiceQuestion[]; // 12 questions
  part2: TrueFalseQuestion[]; // 4 questions
  part3: ShortAnswerQuestion[]; // 6 questions
}

export interface Chapter {
  id: number;
  slug: string;
  code: string;
  title: string;
  subtitle: string;
  semester: 1 | 2;
  icon: string;
  color: string;
  gradient: string;
  stats: {
    lessons: number;
    mcCount: number;
    tfCount: number;
    saCount: number;
  };
  theory: TheorySection;
  mcBank: MultipleChoiceQuestion[]; // Full pool (at least 15-20)
  tfBank: TrueFalseQuestion[]; // Full pool (at least 6-8)
  saBank: ShortAnswerQuestion[]; // Full pool (at least 6-8)
  chapterExam: ChapterPracticeExam;
}

export interface SemesterExam {
  id: string;
  code: string;
  title: string;
  semesterType: 'gk1' | 'ck1' | 'gk2' | 'ck2';
  durationMinutes: number; // 60
  banner: string;
  badge: string;
  description: string;
  part1: MultipleChoiceQuestion[]; // 12 questions
  part2: TrueFalseQuestion[]; // 4 questions
  part3: ShortAnswerQuestion[]; // 6 questions
}
