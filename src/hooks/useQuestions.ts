import { useQuery } from "react-query";
import apiClient from "../services/api-client";
import { randomizeAnswers } from "../services/random-answers";
export type Question = {
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  type: string;
  difficulty: string;
};
export type QuestionState = Question & { answers: string[] };
type FetchResponse = {
  data: { response_code: number; results: Question[] };
};
const fetchData = (amount: number, type: string) =>
  apiClient.get(`?amount=${amount}&type=${type}`);
const useQuestions = () => {
  const { data } = useQuery<FetchResponse, Error>(
    "questions",
    () => fetchData(10, "multiple"),
    { refetchOnWindowFocus: false, refetchOnMount: false }
  );
  let questions = data?.data.results.map((question: Question) => {
    return {
      ...question,
      answers: randomizeAnswers([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    };
  });
  // queryClient.setQueryData("questions", () => );
  return { data, questions };
};
export default useQuestions;
