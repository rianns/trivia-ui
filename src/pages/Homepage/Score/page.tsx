import { ScoreProps } from "../page";

const Score = <T,>({ trivias, score, setScoreShown }: ScoreProps<T>) => {
  return (
    <div>
      {/* Score */}
      <div>
        Score: {score}/{trivias.length}
      </div>
      {/* Play again button */}
      <button type="button" onClick={() => setScoreShown(false)}>
        Play again
      </button>
      {/* Show questions answered wrong */}
    </div>
  );
};
export default Score;
