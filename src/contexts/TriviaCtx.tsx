"use client";
import { Trivia } from "@/services/trivias";
import { createContext, useContext, useState } from "react";

interface TriviaCtxProps {
  trivias: Trivia[];
  setTrivias: (data: Trivia[]) => void;
}

const TriviaCtx = createContext<TriviaCtxProps>({
  trivias: [],
  setTrivias: () => {},
});

export const TriviaCtxProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [trivias, setTrivias] = useState<Trivia[]>([]);

  const values: TriviaCtxProps = {
    trivias,
    setTrivias,
  };

  return <TriviaCtx.Provider value={values}>{children}</TriviaCtx.Provider>;
};

export const useTriviaCtx = (): TriviaCtxProps => {
  const context = useContext(TriviaCtx);
  if (!context) {
    throw new Error("error");
  }
  console.log(context);
  return context;
};
