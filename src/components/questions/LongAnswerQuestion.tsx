import { useState } from 'react';

interface LongAnswerQuestionProps {
  question: string;
}

const LongAnswerQuestion = ({ question }:LongAnswerQuestionProps) => {
  const [answer, setAnswer] = useState<string>('');

  const handleAnswerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(event.target.value);
  };

  return (
    <div>
      <h3>{question}</h3>
      <textarea value={answer} onChange={handleAnswerChange} />
      <p>Answer: {answer}</p>
    </div>
  );
};

export default LongAnswerQuestion;
