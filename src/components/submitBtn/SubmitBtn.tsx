import "./SubmitBtn.css";
interface Props {
  handleSubmit: () => void;
  selectedAnswer: string | null;
}
export const SubmitBtn = ({ handleSubmit }: Props) => {
  return (
    <div>
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};
