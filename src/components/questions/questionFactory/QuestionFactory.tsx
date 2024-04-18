import {
  SingleChoiceQuestion,
  MultipleChoiceQuestion,
  ShortAnswerQuestion,
  LongAnswerQuestion,
} from '../'
import { Option } from '../../../types/types'

interface QuestionFactoryProps {
  type: string
  question: string
  options?: Option[]
  handleSingleChoiceAnswer: (answer: string) => void
  handleMultipleChoiceAnswer?: (answers: string[]) => void
}

export const QuestionFactory = ({
  type,
  question,
  options,
  handleSingleChoiceAnswer,
  handleMultipleChoiceAnswer,
}: QuestionFactoryProps) => {
  switch (type) {
    case 'single_choice':
      return (
        <SingleChoiceQuestion
          question={question}
          options={options || []}
          handleSingleChoiceAnswer={handleSingleChoiceAnswer}
        />
      )
    case 'multiple_choice':
      return (
        <MultipleChoiceQuestion
          question={question}
          options={options || []}
          handleMultipleChoiceAnswer={handleMultipleChoiceAnswer || (() => {})}
        />
      )
    case 'short_answer':
      return (
        <ShortAnswerQuestion
          question={question}
          handleSingleChoiceAnswer={handleSingleChoiceAnswer}
        />
      )
    case 'long_answer':
      return (
        <LongAnswerQuestion
          question={question}
          handleSingleChoiceAnswer={handleSingleChoiceAnswer}
        />
      )
    default:
      throw new Error(`Unknown question type: ${type}`)
  }
}
