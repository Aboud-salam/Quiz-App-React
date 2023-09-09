import "./QuizResult.css";
interface Props {
  count: number;
}
export const QuizResult = ({ count }: Props) => {
  const answersCount =
    count < 5 ? "bad" : count >= 5 && count < 10 ? "Good" : "Perfect";
  return (
    <div className="result">
      <p>Right Answers : {count}</p>
      <p>{answersCount}</p>
    </div>
  );
};
