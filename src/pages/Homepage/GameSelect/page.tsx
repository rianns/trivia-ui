import GameSelectForm from "./GameSelectForm";

const GameSelect = () => {
  const handleSubmit = (amount: number, difficulty: string) => {};

  return (
    <>
      <h2 className="text-center p-5">Select Difficulty</h2>
      <GameSelectForm onSubmit={handleSubmit} />
    </>
  );
};
export default GameSelect;
