import { useGameCtx } from "@/contexts/GameCtx";
import { GameSelectProps } from "../page";
import GameSelectForm from "./GameSelectForm";

const GameSelect = ({ formShown, setFormShown }: GameSelectProps) => {
  const { amount, difficulty, ...rest } = useGameCtx();

  const handleSubmit = (amount: number, difficulty: string) => {
    console.log(amount);
    console.log(difficulty);
    setFormShown(false);
    console.log(formShown);
  };

  return (
    <div>
      <h2 className="text-center p-5">Select Difficulty</h2>
      <GameSelectForm onSubmit={() => handleSubmit(amount, difficulty)} />
    </div>
  );
};
export default GameSelect;
