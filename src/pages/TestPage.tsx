import { useState } from 'react';
import { mockQuestions } from '../mocks/mockQuestions';
import { QuestionFactory } from '../components/questions/questionFactory/QuestionFactory';
import { useQuestionAnswers } from '../hooks/useQuestionAnswers';

const TestPage = () => {
  const [currentStep, setCurrentStep] = useState(0); 
 const { answers, addSingleChoiceAnswer, addMultipleChoiceAnswer } = useQuestionAnswers();

  const handleSingleChoiceAnswer = (answer: string) => {
    addSingleChoiceAnswer(currentQuestion.id, answer);
    setCurrentStep(currentStep + 1);
  };
  
  const handleMultipleChoiceAnswer = (selectedOptions: string[]) => {
    addMultipleChoiceAnswer(currentQuestion.id, selectedOptions);
    setCurrentStep(currentStep + 1);
  };

  const currentQuestion = mockQuestions[currentStep];

  return (
    <>
      {currentQuestion && currentStep < mockQuestions.length ? (
        <div>
          {currentQuestion.options ? (
            <form>
              <QuestionFactory
                key={currentQuestion.id}
                question={currentQuestion.question}
                options={currentQuestion.options}
                type={currentQuestion.type}
                handleSingleChoiceAnswer={handleSingleChoiceAnswer}
                handleMultipleChoiceAnswer={handleMultipleChoiceAnswer}
              />
            </form>
          ) : (
            <form>
              <QuestionFactory
                key={currentQuestion.id}
                question={currentQuestion.question}
                type={currentQuestion.type}
                handleSingleChoiceAnswer={handleSingleChoiceAnswer}
              />
            </form>
          )}
        </div>
      ) : (
        <div>
          <h2>Спасибо за прохождение теста!</h2>
          <p className='answers'>
            Ваши ответы: 
            {answers.map(({ questionId, answer }) => {
              const questionText = mockQuestions.find(question => question.id === questionId)?.question || 'Вопрос не найден';
              return (
                <span key={questionId}>
                  {questionText}: {Array.isArray(answer) ? answer.join(', ') : answer}
                </span>
              );
            })}
          </p>
        </div>
      )}
    </>
  );
};

export default TestPage;



