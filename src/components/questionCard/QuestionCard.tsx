import { MouseEvent, useState } from "react";
import { QuestionState } from "../../hooks/useQuestions";
import "./QuestionCard.css";
import { SubmitBtn } from "../submitBtn/SubmitBtn";
interface Props {
  question: QuestionState;
  questionNum: number | undefined;
  curQuestion: number;
  onSubmit: (selectedAnswer: string | null) => void;
  // onSelectAnswer: (e: MouseEvent) => void;
}
export const QuestionCard = ({
  question,
  questionNum,
  curQuestion,
  onSubmit,
}: Props) => {
  const [selectedIndex, setIndex] = useState(-1);
  const [selectedAnswer, setAnswer] = useState<string | null>(null);
  const [isSubmitted, setSubmitClick] = useState(false);
  const bullets = Array.from(Array(questionNum).keys());
  const handleClickAnswer = (e: MouseEvent, index: number) => {
    setIndex(index);
    setAnswer(e.currentTarget.textContent);
  };
  const handleSubmit = () => {
    if (selectedAnswer) {
      onSubmit(selectedAnswer);
    } else {
      setSubmitClick(true);
    }
  };
  return (
    <div className="question-card">
      <nav>
        Questions: {curQuestion + 1}/{questionNum}
      </nav>
      <div className="question-area">
        <h3 className="question">{question.question}</h3>
      </div>
      <div className="anwers-area">
        {question.answers.map((answer, index) => (
          <div
            data-value={answer}
            key={answer}
            className={`answer ${selectedIndex === index ? "selected" : ""}`}
            onClick={(event) => handleClickAnswer(event, index)}
          >
            {answer}
          </div>
        ))}
      </div>
      <div className="pagination">
        {bullets.map((index) => {
          if (index === curQuestion)
            return <span key={index} className="active"></span>;
          return <span key={index}></span>;
        })}
      </div>
      <SubmitBtn handleSubmit={handleSubmit} selectedAnswer={selectedAnswer} />
      {!selectedAnswer && isSubmitted && (
        <p className="error-msg">Choose An Answer Please</p>
      )}
    </div>
  );
};
