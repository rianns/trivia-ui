"use client";
import { Trivia, Trivias } from "@/services/trivias";
import { useRouter } from "next/navigation";
import Link from `next/link`;
import { useEffect, useState } from "react";

const HomePage = () => {
  const [difficulty, setDifficulty] = useState<string>("easy");
//   const router = useRouter();

  const handleClick = (d: string) => {
    setDifficulty(d);
    router.push(`/Game`);
  };

  console.log(trivias);

  return (
    <div className="p-5 border border-white flex flex-col justify-center content-center">
      <h1 className="flex justify-center">Select Difficulty</h1>
      <div>
        <button
          className="border border-white p-4 m-2"
          onClick={() => {
            handleClick("easy");
          }}
        >
          Easy
        </button>
        <button
          className="border border-white p-4 m-2"
          onClick={() => {
            handleClick("medium");
          }}
        >
          Medium
        </button>
        <button
          className="border border-white p-4 m-2"
          onClick={() => {
            handleClick("hard");
          }}
        >
          Hard
        </button>
      </div>
      <button className="border border-white p-4 m-2" type="submit">
        Start Game
      </button>
    </div>
  );
};

export default HomePage;
