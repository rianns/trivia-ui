import TriviaList from "@/components/TriviaList";
import { useGameCtx } from "@/contexts/GameCtx";
import { Trivia, Trivias } from "@/services/trivias";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Game = () => {
  const [trivias, setTrivias] = useState<Trivia[]>([]);
  const { amount, difficulty, ...rest } = useGameCtx();

  console.log(amount);
  console.log(difficulty);

  //   useEffect(() => {
  //     const getData = async () => {
  //       const data = await Trivias.get(amount, difficulty);
  //       setTrivias(data);
  //     };
  //     getData();
  //   }, [amount, difficulty]);

  // console.log(trivias);

  return (
    <div>
      <TriviaList />
    </div>
  );
};
export default Game;
