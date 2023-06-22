const GameSubmit = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <button type="button" className="border border-white p-4 mr-2">
        Clear
      </button>
      <button
        type="submit"
        onSubmit={handleSubmit}
        className="border border-white p-4"
      >
        Check answers
      </button>
    </div>
  );
};
export default GameSubmit;
