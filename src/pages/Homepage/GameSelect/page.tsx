import GameSelectForm from "./GameSelectForm";

const GameSelect = () => {
  const handleSubmit = (amount: number, difficulty: string) => {
    console.log("Amount:", amount);
    console.log("Difficulty:", difficulty);
  };

  return (
    <>
      <h2 className="text-center p-5">Select Difficulty</h2>
      <GameSelectForm onSubmit={handleSubmit} />
    </>
  );
};
export default GameSelect;
