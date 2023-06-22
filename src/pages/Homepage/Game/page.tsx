import TriviaCard from "@/components/TriviaCard";
import TriviaList from "@/components/Answers";
import { useGameCtx } from "@/contexts/GameCtx";
import { Trivia, Trivias } from "@/services/trivias";
import { GetServerSideProps } from "next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import GameSubmit from "./GameSubmitForm";
import { checkAnswer } from "@/utils/checkAnswer";
import { GameProps } from "../page";

// looks similar to selected, possible refactor to be the same interface??
export interface CorrectAnswers {
  triviaId: number;
  correct_answer: string;
}

export interface SelectedAnswers {
  triviaId: number;
  selected_answer: string;
}

const Game = <T extends string>({
  trivias,
  setTrivias,
  setScore,
  setGameShown,
}: GameProps<T>) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [answers, setAnswers] = useState<SelectedAnswers[]>([]);

  const { amount, difficulty, ...rest } = useGameCtx();

  const correct: CorrectAnswers[] = [];

  useEffect(() => {
    const getData = async () => {
      const data: Trivia<T>[] = await Trivias.get(amount, difficulty);
      setTrivias(data);
    };
    getData();
  }, [amount, difficulty]);

  console.log(trivias);

  useEffect(() => {
    if (trivias.length === 0) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [trivias]);

  // assign correct answer to a key value pair for checking

  trivias.map((trivia, i) => {
    const corr: CorrectAnswers = {
      triviaId: i,
      correct_answer: trivia.correct_answer,
    };
    correct.push(corr);
  });

  // compare selected answers to correct answers, if correct add to score

  const handleSubmit = () => {
    const add = checkAnswer(answers, correct);
    setGameShown(false);
    setScore(add);
  };

  return (
    !loading && (
      <div>
        <div className="p-1 border border-black">
          {trivias.map((trivia: Trivia<T>, index) => (
            <TriviaCard
              key={index}
              triviaId={index}
              trivia={trivia as unknown as Trivia<string[]>}
              answers={answers}
              setAnswers={setAnswers}
            />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <GameSubmit onSubmit={handleSubmit} />
        </div>
      </div>
    )
  );
};
export default Game;

// export const getServerSideProps: GetServerSideProps = async () => {};
