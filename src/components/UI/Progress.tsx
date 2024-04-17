interface ProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

const Progress = ({ currentQuestion, totalQuestions }:ProgressProps) => {
  const progressPercentage = Math.ceil((currentQuestion / totalQuestions) * 100);

  return (
    <div>
      <p>Progress: {progressPercentage}%</p>
    </div>
  );
};

export default Progress;
