"use client";

import { useEffect, useState } from "react";
import GameSelect from "./GameSelect/page";
import Game from "./Game/page";

export interface GameSelectProps {
  formShown: boolean;
  setFormShown: (show: boolean) => void;
}

export interface GameProps {
  gameShown: boolean;
  setGameShown: (show: boolean) => void;
}

const Homepage = () => {
  const [gameShown, setGameShown] = useState<boolean>(false);
  const [formShown, setFormShown] = useState<boolean>(true);

  useEffect(() => {
    if (!formShown) {
      setGameShown(true);
    }
  }, [formShown]);

  return (
    <div>
      <div>
        {formShown && (
          <GameSelect setFormShown={setFormShown} formShown={formShown} />
        )}
      </div>
      <div>{gameShown && <Game />}</div>
    </div>
  );
};
export default Homepage;
