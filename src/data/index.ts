import { chapter1Data } from './chapter1Data';
import { chapter2Data } from './chapters2to6Data';
import { chapter3Data } from './chaptersRestData';
import { chapter4Data } from './chaptersSemester2Data';
import { chapter5Data, chapter6Data } from './chapter5and6Data';
import { semesterExamsList } from './semesterExamsData';
import { Chapter } from '../types/mathTypes';

export const allChapters: Chapter[] = [
  chapter1Data,
  chapter2Data,
  chapter3Data,
  chapter4Data,
  chapter5Data,
  chapter6Data,
];

export {
  chapter1Data,
  chapter2Data,
  chapter3Data,
  chapter4Data,
  chapter5Data,
  chapter6Data,
  semesterExamsList,
};
