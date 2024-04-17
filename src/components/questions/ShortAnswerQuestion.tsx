import React, { useState } from 'react';

interface ShortAnswerQuestionProps {
  question: string;
}

export const ShortAnswerQuestion = ({ question }:ShortAnswerQuestionProps) => {
  const [answer, setAnswer] = useState<string>('');

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  return (
    <div>
      <h3>{question}</h3>
      <input type="text" value={answer} onChange={handleAnswerChange} />
      <p>Answer: {answer}</p>
    </div>
  );
};