import { Trivia } from "@/services/trivias";
import Answers from "../Answers";
import { useEffect, useState } from "react";
import { addOrUpdateAnswer } from "@/utils/saveAnswer";
import { SelectedAnswers } from "@/pages/Homepage/Game/page";

interface TriviaCardProps<T> {
  trivia: Trivia<T>;
  answers: SelectedAnswers[];
  setAnswers: (answers: SelectedAnswers[]) => void;
  triviaId: number;
}

const TriviaCard = <T extends string[]>({
  trivia,
  answers,
  setAnswers,
  triviaId,
}: TriviaCardProps<T>) => {
  const [selected, setSelected] = useState<string>("");

  const { incorrect_answers, correct_answer, ...rest } = trivia;
  const choices: T[] = Object.values<T>({
    ...incorrect_answers,
    correct_answer,
  });

  useEffect(() => {
    addOrUpdateAnswer(triviaId, selected, answers);
    setAnswers([...answers]);
  }, [triviaId, selected]);

  return (
    <div className="p-4 border border-white m-5">
      <div className="flex p-20 justify-center items-center">
        {trivia.question}
      </div>
      <div className="flex w-full">
        <Answers
          choices={choices}
          selected={selected}
          onChange={(e) => setSelected(e.target.value)}
        />
      </div>
    </div>
  );
};
export default TriviaCard;
