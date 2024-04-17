import { useState } from 'react';

interface SingleChoiceQuestionProps {
  question: string;
  options: string[];
}

const SingleChoiceQuestion = ({ question, options }:SingleChoiceQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              id={option}
              name="singleChoice"
              value={option}
              checked={selectedOption === option}
              onChange={() => handleOptionSelect(option)}
            />
            <label htmlFor={option}>{option}</label>
          </li>
        ))}
      </ul>
      <p>Selected Option: {selectedOption}</p>
    </div>
  );
};

export default SingleChoiceQuestion;
