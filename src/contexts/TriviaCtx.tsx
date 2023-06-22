"use client";
import { Trivia } from "@/services/trivias";
import { createContext, useContext, useState } from "react";

interface TriviaCtxProps<T> {
  trivias: Trivia<T>[];
  setTrivias: (data: Trivia<T>[]) => void;
}

const TriviaCtx = createContext<TriviaCtxProps<any>>({
  trivias: [],
  setTrivias: () => {},
});

export const TriviaCtxProvider = <T,>({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [trivias, setTrivias] = useState<Trivia<T>[]>([]);

  const values: TriviaCtxProps<T> = {
    trivias,
    setTrivias,
  };

  return <TriviaCtx.Provider value={values}>{children}</TriviaCtx.Provider>;
};

export const useTriviaCtx = <T,>(): TriviaCtxProps<T> => {
  const context = useContext(TriviaCtx);
  if (!context) {
    throw new Error("error");
  }
  console.log(context);
  return context;
};
