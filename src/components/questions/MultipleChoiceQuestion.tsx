import { useState } from 'react';

interface MultipleChoiceQuestionProps {
  question: string;
  options: string[];
}

export const MultipleChoiceQuestion = ({ question, options }:MultipleChoiceQuestionProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionToggle = (option: string) => {
    const isSelected = selectedOptions.includes(option);
    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <input
              type="checkbox"
              id={option}
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionToggle(option)}
            />
            <label htmlFor={option}>{option}</label>
          </li>
        ))}
      </ul>
      <p>Selected Options: {selectedOptions.join(', ')}</p>
    </div>
  );
};
