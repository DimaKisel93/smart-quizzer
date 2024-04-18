import { useState } from 'react'
import { Option } from '../../types/types'

interface MultipleChoiceQuestionProps {
  question: string
  options: Option[]
  handleMultipleChoiceAnswer: (answers: string[]) => void
}

export const MultipleChoiceQuestion = ({
  question,
  options,
  handleMultipleChoiceAnswer,
}: MultipleChoiceQuestionProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const handleOptionToggle = (option: string) => {
    const isSelected = selectedOptions.includes(option)
    if (isSelected) {
      setSelectedOptions(selectedOptions.filter((selectedOption) => selectedOption !== option))
    } else {
      setSelectedOptions([...selectedOptions, option])
    }
  }

  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {options.map(({ id, text }) => (
          <li key={id}>
            <input
              type="checkbox"
              id={text}
              value={text}
              checked={selectedOptions.includes(text)}
              onChange={() => handleOptionToggle(text)}
            />
            <label htmlFor={text}>{text}</label>
          </li>
        ))}
      </ul>
      <p>Выбранные ответы: {selectedOptions.join(', ')}</p>
      <button onClick={() => handleMultipleChoiceAnswer(selectedOptions)}>Ответить</button>
    </div>
  )
}
