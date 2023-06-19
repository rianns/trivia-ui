import TriviaCard from "@/components/TriviaCard";
import TriviaList from "@/components/Answers";
import { useGameCtx } from "@/contexts/GameCtx";
import { Trivia, Trivias } from "@/services/trivias";
import { GetServerSideProps } from "next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Game = () => {
  const [trivias, setTrivias] = useState<Trivia[]>([]);
  const { amount, difficulty, ...rest } = useGameCtx();

  console.log(amount);
  console.log(difficulty);

  useEffect(() => {
    const getData = async () => {
      const data = await Trivias.get(amount, difficulty);
      setTrivias(data);
    };
    getData();
  }, [amount, difficulty]);

  console.log(trivias);

  return (
    <div>
      {trivias.map((trivia, i) => (
        <TriviaCard key={i} trivia={trivia} />
      ))}
    </div>
  );
};
export default Game;

// export const getServerSideProps: GetServerSideProps = async () => {};
