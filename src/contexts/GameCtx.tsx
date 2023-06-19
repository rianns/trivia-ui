"use client";
import { createContext, useContext, useEffect, useState } from "react";

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

export const GameCtxProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [amount, setAmount] = useState<number>(10);
  const [difficulty, setDifficulty] = useState<string>("easy");

  useEffect(() => {
    const storedAmt = localStorage.getItem("amount");
    const storedDiff = localStorage.getItem("difficulty");
    if (storedAmt) {
      setAmount(parseInt(storedAmt));
    }
    if (storedDiff) {
      setDifficulty(storedDiff);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("amount", amount.toString());
    localStorage.setItem("difficulty", difficulty);
  }, [amount, difficulty]);

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
    throw new Error("Context has no content");
  }
  console.log(context);
  return context;
};
