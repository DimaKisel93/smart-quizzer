import { useState } from 'react'
import { mockQuestions } from '../mocks/mockQuestions'
import { QuestionFactory } from '../components/questions/questionFactory/QuestionFactory'
import { useQuestionAnswers } from '../hooks/useQuestionAnswers'
import { TestProgressBar } from '../components/UI/ProgressBar'
import { Timer } from '../components/UI/Timer'
import { TestResult } from '../components/UI/TestResult'

const TestPage = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [questionsStatus, setQuestionsStatus] = useState(() =>
    new Array(mockQuestions.length).fill(false),
  )
  const { answers, addSingleChoiceAnswer, addMultipleChoiceAnswer } = useQuestionAnswers()
  const [isTimeEnd, setIsTimeEnd] = useState(false)

  const handleSingleChoiceAnswer = (answer: string, questionId: number) => {
    addSingleChoiceAnswer(questionId, answer)
    handleQuestionCompletion(questionId - 1)
    setCurrentStep(currentStep + 1)
  }

  const handleMultipleChoiceAnswer = (selectedOptions: string[], questionId: number) => {
    addMultipleChoiceAnswer(questionId, selectedOptions)
    handleQuestionCompletion(questionId - 1)
    setCurrentStep(currentStep + 1)
  }

  const handleQuestionCompletion = (questionId: number) => {
    setQuestionsStatus((prevStatus) => {
      const updatedStatus = [...prevStatus]
      updatedStatus[questionId] = true
      return updatedStatus
    })
  }

  const handleStepClick = (step: number) => {
    setCurrentStep(step)
  }

  const handleTimerEnd = () => {
    setIsTimeEnd(true)
  }

  const currentQuestion = mockQuestions[currentStep]

  return (
    <>
      <Timer duration={150} handleTimerEnd={handleTimerEnd} />
      <TestProgressBar
        totalQuestions={mockQuestions.length}
        currentQuestion={currentStep}
        handleStepClick={handleStepClick}
        questionsStatus={questionsStatus}
      />
      {!isTimeEnd && currentQuestion && currentStep < mockQuestions.length ? (
        <form>
          {currentQuestion.options ? (
            <QuestionFactory
              key={currentQuestion.id}
              question={currentQuestion.question}
              options={currentQuestion.options}
              type={currentQuestion.type}
              handleSingleChoiceAnswer={(answer) =>
                handleSingleChoiceAnswer(answer, currentQuestion.id)
              }
              handleMultipleChoiceAnswer={(answers) =>
                handleMultipleChoiceAnswer(answers, currentQuestion.id)
              }
            />
          ) : (
            <QuestionFactory
              key={currentQuestion.id}
              question={currentQuestion.question}
              type={currentQuestion.type}
              handleSingleChoiceAnswer={(answer) =>
                handleSingleChoiceAnswer(answer, currentQuestion.id)
              }
            />
          )}
        </form>
      ) : (
        <TestResult answers={answers} mockQuestions={mockQuestions} />
      )}
    </>
  )
}

export default TestPage
