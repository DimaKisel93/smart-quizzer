import { mockQuestions } from '../../mocks/mockQuestions'
import { Answer, Question } from '../../types/types'

interface TestResultProps {
  answers: Answer[]
  mockQuestions: Question[]
}

export const TestResult = ({ answers }: TestResultProps) => {
  return (
    <div>
      <h2>Спасибо за прохождение теста!</h2>
      <p className="answers">
        Ваши ответы:
        {answers.map(({ questionId, answer }) => {
          const questionText =
            mockQuestions.find((question) => question.id === questionId)?.question ||
            'Вопрос не найден'
          return (
            <span key={questionId}>
              {questionText}: {Array.isArray(answer) ? answer.join(', ') : answer}
            </span>
          )
        })}
      </p>
    </div>
  )
}
