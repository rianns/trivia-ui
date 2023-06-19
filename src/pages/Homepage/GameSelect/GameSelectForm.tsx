import { useGameCtx } from "@/contexts/GameCtx";
import { GetServerSideProps } from "next";
import { useRouter } from "next/navigation";

interface GameSelectFormProps {
  onSubmit: (amount: number, difficulty: string) => void;
}
const GameSelectForm = ({ onSubmit }: GameSelectFormProps) => {
  // future feature: allow users to change number of trivias
  const { amount, difficulty, setAmount, setDifficulty } = useGameCtx();

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(amount, difficulty);
    router.push("/Game");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col flex-auto">
      <div>
        <button
          className="border border-white p-5 m-2"
          onClick={() => setDifficulty("easy")}
          type="button"
        >
          Easy
        </button>
        <button
          className="border border-white p-5 m-2"
          onClick={() => setDifficulty("medium")}
          type="button"
        >
          Medium
        </button>
        <button
          className="border border-white p-5 m-2"
          onClick={() => setDifficulty("hard")}
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
