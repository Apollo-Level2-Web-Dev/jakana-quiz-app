// import { Question } from "./home/Question";
import { Question } from "./home/Question";
import { QuizSummary } from "./home/QuizSummary";
import { useAppSelector } from "./Redux/hooks";

const App = () => {
  const { quizComplete } = useAppSelector((state) => state.quiz);

  return (
    <div>
      <h1 className="text-center text-9xl my-12">Quiz App</h1>
      {!quizComplete ? <Question /> : <QuizSummary />}
      
    </div>
  );
};

export default App;
