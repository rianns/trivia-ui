import { useGameCtx } from "@/contexts/GameCtx";
import { GameSelectProps } from "../page";
import GameSelectForm from "./GameSelectForm";

const GameSelect = ({ setSelectShown }: GameSelectProps) => {
  return (
    <div>
      <h2 className="text-center p-5">Select Difficulty</h2>
      <GameSelectForm onSubmit={() => setSelectShown(false)} />
    </div>
  );
};
export default GameSelect;
