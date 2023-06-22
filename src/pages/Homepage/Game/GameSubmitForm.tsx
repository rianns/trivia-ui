interface GameSubmitProps {
  onSubmit: () => void;
}

const GameSubmit = ({ onSubmit }: GameSubmitProps) => {
  const handleClear = () => {
    // reset answers to be empty, maybe change to parent???
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form onSubmit={handleSubmit}>
      <button
        type="button"
        onClick={handleClear}
        disabled //enable when handleClear is set
        className="border border-white p-4 mr-2"
      >
        Clear
      </button>
      <button type="submit" className="border border-white p-4">
        Check answers
      </button>
    </form>
  );
};
export default GameSubmit;
