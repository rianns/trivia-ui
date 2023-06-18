"use client";
import { createContext, useContext, useState } from "react";

interface GameCtxProps {
  amount: number;
  difficulty: string;
  setAmount: (amt: number) => void;
  setDifficulty: (diff: string) => void;
}

const GameCtx = createContext<GameCtxProps>({
  amount: 10,
  difficulty: "easy",
  setAmount: () => {},
  setDifficulty: () => {},
});

export const GameCtxProvider = ({ children }) => {
  const [amount, setAmount] = useState<number>(10);
  const [difficulty, setDifficulty] = useState<string>("easy");

  const values: GameCtxProps = {
    amount,
    difficulty,
    setAmount,
    setDifficulty,
  };

  return <GameCtx.Provider value={values}>{children}</GameCtx.Provider>;
};

export const useGameCtx = (): GameCtxProps => {
  const context = useContext(GameCtx);
  if (!context) {
    throw new Error("error");
  }
  console.log(context);
  return context;
};
