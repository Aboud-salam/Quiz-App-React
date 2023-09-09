export const randomizeAnswers = (answers: string[]) => {
  //   let length = answers.length;
  //   let randomNum;
  //   while (length > 0) {
  //     randomNum = Math.floor(Math.random() * length);
  //     length--;
  //     [answers[length], answers[randomNum]] = [
  //       answers[randomNum],
  //       answers[length],
  //     ];
  //   }
  return [...answers].sort(() => Math.random() - 0.5);
};
