import TriviaCard from "@/components/TriviaCard";
import TriviaList from "@/components/Answers";
import { useGameCtx } from "@/contexts/GameCtx";
import { Trivia, Trivias } from "@/services/trivias";
import { GetServerSideProps } from "next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import GameSubmit from "./GameSubmitForm";

interface CorrectAnswers {
  triviaId: number;
  correct_answer: string;
}

export interface SelectedAnswers {
  triviaId: number;
  selected_answer: string;
}

const Game = <T extends string>() => {
  const [loading, setLoading] = useState<boolean>(true);
  const [trivias, setTrivias] = useState<Trivia<T>[]>([]);
  const [score, setScore] = useState<number>(0);
  const [answers, setAnswers] = useState<SelectedAnswers[]>([]);
  // const [correct, setCorrect] = useState<correctAnswers[]>([]);

  const { amount, difficulty, ...rest } = useGameCtx();

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

  const correct: CorrectAnswers[] = [];

  trivias.map((trivia, i) => {
    const corr: CorrectAnswers = {
      triviaId: i,
      correct_answer: trivia.correct_answer,
    };
    correct.push(corr);
  });

  console.log(answers);

  console.log(correct);

  // compare selected answers to correct answers, if correct add to score

  // console.log(correct);

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
          <GameSubmit />
        </div>
      </div>
    )
  );
};
export default Game;

// export const getServerSideProps: GetServerSideProps = async () => {};
