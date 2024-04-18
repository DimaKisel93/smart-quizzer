export type QuestionType = 'single_choice' | 'multiple_choice' | 'short_answer' | 'long_answer';

export interface Question {
  id: number;
  type: QuestionType;
  question: string;
  options?: Option[];
}

export interface Answer {
  questionId: number; 
  answer: string | string[]
} 

export interface Option {
  id: number, 
  text: string
}