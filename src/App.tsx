import QuestionCard from "./components/questionCard";
import useQuestions from "./hooks/useQuestions";
import "./App.css";
import { useState } from "react";
import { QuizResult } from "./components/quizResult/QuizResult";
function App() {
  const [currentQuestion, setQuestionNum] = useState(0);
  const [rightAnswers, setRightAnswers] = useState(0);
  const { data: response, questions } = useQuestions();
  const handleSubmit = (selectedAnswer: string | null) => {
    setQuestionNum((prev) => prev + 1);
    if (
      response?.data.results[currentQuestion].correct_answer == selectedAnswer
    ) {
      setRightAnswers(rightAnswers + 1);
    }
  };
  return (
    <>
      {questions?.map((question, index) => {
        if (currentQuestion === index)
          return (
            <QuestionCard
              key={index}
              questionNum={response?.data.results.length}
              question={question}
              curQuestion={currentQuestion}
              onSubmit={(selectedAnswer: string | null) =>
                handleSubmit(selectedAnswer)
              }
            />
          );
      })}
      <div>right answers : {rightAnswers}</div>
      {currentQuestion === 10 && <QuizResult count={rightAnswers} />}
    </>
  );
}

export default App;
