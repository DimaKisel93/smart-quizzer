import { SingleChoiceQuestion, MultipleChoiceQuestion, ShortAnswerQuestion, LongAnswerQuestion} from './questions';

interface QuestionFactoryProps {
  type: string;
  question: string;
  options?: string[];
}

export const QuestionFactory = ({ type, question, options }:QuestionFactoryProps) => {
  switch (type) {
    case 'single_choice':
      return <SingleChoiceQuestion question={question} options={options || []} />;
    case 'multiple_choice':
      return <MultipleChoiceQuestion question={question} options={options || []} />;
    case 'short_answer':
      return <ShortAnswerQuestion question={question} />;
    case 'long_answer':
      return <LongAnswerQuestion question={question} />;
    default:
      throw new Error(`Unknown question type: ${type}`);
  }
};

