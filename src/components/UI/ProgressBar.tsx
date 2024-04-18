interface ProgressProps {
  totalQuestions: number;
  currentQuestion: number;
  questionsStatus: boolean[];
  handleStepClick: (id: number) => void;
}

const TestProgressBar = ({ totalQuestions, currentQuestion, handleStepClick, questionsStatus }:ProgressProps) => {
  const progressBars = Array.from({ length: totalQuestions }, (_, i) => {
    const isActive = i === currentQuestion;
    const isCompleted = questionsStatus[i];
    const progressClassName = `progress-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
    return (
      <div
        key={i}
        className={progressClassName}
        onClick={() => handleStepClick(i)}
      />
    );
  });

  return (
    <div className="progress-bar">
      {progressBars}
    </div>
  );
};

export default TestProgressBar;
