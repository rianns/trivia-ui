"use client";

import { useEffect, useState } from "react";
import GameSelect from "./GameSelect/page";
import Game from "./Game/page";
import Score from "./Score/page";
import { Trivia } from "@/services/trivias";

export interface GameSelectProps {
  setSelectShown: (show: boolean) => void;
}

export interface GameProps<T extends string> {
  setGameShown: (show: boolean) => void;
  setScore: (score: number) => void;
  setTrivias: (data: Trivia<T>[]) => void;
  trivias: Trivia<T>[];
}

export interface ScoreProps<T> {
  setScoreShown: (show: boolean) => void;
  score: number;
  trivias: Trivia<T>[];
}

const Homepage = <T extends string>() => {
  const [gameShown, setGameShown] = useState<boolean>(false);
  const [selectShown, setSelectShown] = useState<boolean>(true);
  const [scoreShown, setScoreShown] = useState<boolean>(false);
  const [trivias, setTrivias] = useState<Trivia<T>[]>([]);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    if (selectShown === false) {
      setGameShown(true);
    }
  }, [selectShown]);

  useEffect(() => {
    if (gameShown === false && selectShown === false) {
      setScoreShown(true);
    }
  }, [gameShown, selectShown]);

  useEffect(() => {
    if (scoreShown === false) setSelectShown(true);
  }, [scoreShown]);

  return (
    <div>
      <div>
        {gameShown && (
          <Game
            trivias={trivias}
            setTrivias={setTrivias}
            setScore={setScore}
            setGameShown={setGameShown}
          />
        )}
      </div>
      <div>
        {scoreShown && !gameShown && (
          <Score
            score={score}
            setScoreShown={setScoreShown}
            trivias={trivias}
          />
        )}
      </div>
      <div>{selectShown && <GameSelect setSelectShown={setSelectShown} />}</div>
    </div>
  );
};
export default Homepage;
