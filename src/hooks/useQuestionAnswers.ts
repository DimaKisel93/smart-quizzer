import { useState } from 'react';

export const useQuestionAnswers = () => {
  const [answers, setAnswers] = useState<{ questionId: number; answer: string | string[] }[]>([]);

  const addSingleChoiceAnswer = (questionId: number, answer: string) => {
    setAnswers(prevAnswers => [
      ...prevAnswers,
      { questionId, answer }
    ]);
  };

  const addMultipleChoiceAnswer = (questionId: number, answers: string[]) => {
    setAnswers(prevAnswers => [
      ...prevAnswers,
      { questionId, answer: answers }
    ]);
  };

  return {
    answers,
    addSingleChoiceAnswer,
    addMultipleChoiceAnswer,
  };
};
