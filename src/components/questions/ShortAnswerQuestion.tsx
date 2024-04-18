import React, { useState } from 'react'

interface ShortAnswerQuestionProps {
  question: string
  handleSingleChoiceAnswer: (answer: string) => void
}

export const ShortAnswerQuestion = ({
  question,
  handleSingleChoiceAnswer,
}: ShortAnswerQuestionProps) => {
  const [answer, setAnswer] = useState<string>('')

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value)
  }

  return (
    <div>
      <h3>{question}</h3>
      <input type="text" value={answer} onChange={handleAnswerChange} />
      <p>Ответ: {answer}</p>
      <button onClick={() => handleSingleChoiceAnswer(answer)}>Ответить</button>
    </div>
  )
}
