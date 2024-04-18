import { useState } from 'react'

interface LongAnswerQuestionProps {
  question: string
  handleSingleChoiceAnswer: (answer: string) => void
}

export const LongAnswerQuestion = ({
  question,
  handleSingleChoiceAnswer,
}: LongAnswerQuestionProps) => {
  const [answer, setAnswer] = useState<string>('')

  const handleAnswerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(event.target.value)
  }

  return (
    <div>
      <h3>{question}</h3>
      <textarea value={answer} onChange={handleAnswerChange} />
      <p>Ответ: {answer}</p>
      <button onClick={() => handleSingleChoiceAnswer(answer)}>Ответить</button>
    </div>
  )
}
