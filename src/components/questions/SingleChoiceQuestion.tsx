import { useState } from 'react';
import { Option } from '../../types/types';

interface SingleChoiceQuestionProps {
  question: string;
  options: Option[];
  handleSingleChoiceAnswer: (answer:string) => void;
}

export const SingleChoiceQuestion = ({ question, options, handleSingleChoiceAnswer }:SingleChoiceQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {options.map(({id, text}) => (
          <li key={id}>
            <input
              type="radio"
              id={text}
              name="singleChoice"
              value={text}
              checked={selectedOption === text}
              onChange={() => handleOptionSelect(text)}
            />
            <label htmlFor={text}>{text}</label>
          </li>
        ))}
      </ul>
      <p>Выбранный ответ: {selectedOption}</p>
      <button onClick={() => handleSingleChoiceAnswer(selectedOption)}>Ответить</button>
    </div>
  );
};
