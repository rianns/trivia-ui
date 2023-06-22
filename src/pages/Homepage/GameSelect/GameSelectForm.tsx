import { useGameCtx } from "@/contexts/GameCtx";
import { GetServerSideProps } from "next";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface GameSelectFormProps {
  onSubmit: (amount: number, difficulty: string) => void;
}
const GameSelectForm = ({ onSubmit }: GameSelectFormProps) => {
  const [activeBtn, setActiveBtn] = useState<boolean>(false);

  // future feature: allow users to change number of trivias
  const { amount, difficulty, setAmount, setDifficulty } = useGameCtx();

  const handleClick = (diff: string) => {
    setDifficulty(diff);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(amount, difficulty);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col flex-auto">
      <div className="flex justify-center">
        <button
          className={`border border-white p-5 m-2 ${
            difficulty === "easy"
              ? "bg-white text-black"
              : "bg-black text-white"
          }`}
          onClick={() => handleClick("easy")}
          type="button"
        >
          Easy
        </button>
        <button
          className={`border border-white p-5 m-2 ${
            difficulty === "medium"
              ? "bg-white text-black"
              : "bg-black text-white"
          }`}
          onClick={() => handleClick("medium")}
          type="button"
        >
          Medium
        </button>
        <button
          className={`border border-white p-5 m-2 ${
            difficulty === "hard"
              ? "bg-white text-black"
              : "bg-black text-white"
          }`}
          onClick={() => handleClick("hard")}
          type="button"
        >
          Hard
        </button>
      </div>
      <button type="submit" className="border border-white p-5 m-2">
        Start Game
      </button>
    </form>
  );
};

export default GameSelectForm;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { amount, difficulty } = useGameCtx();

//   return {
//     props: {
//       amount,
//       difficulty,
//     },
//   };
// };
