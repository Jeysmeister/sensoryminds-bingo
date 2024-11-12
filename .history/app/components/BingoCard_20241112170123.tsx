"use client";

import { neverHaveIEverQuestions } from "@/data/questions";
import { useState } from "react";
import BingoItem from "./BingoItem";

const BingoCard = () => {
  const getRandomQuestions = (count: number) => {
    const shuffled = [...neverHaveIEverQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const questions = getRandomQuestions(24);
  const [marked, setMarked] = useState<number[]>([12]);

  const grid = [...questions.slice(0, 12), "FREE", ...questions.slice(12)];

  return (
    <div className="border border-gray-300 p-4 pt-0 rounded-xl">
      <div className="flex w-full justify-center items-center py-4 text-xl font-extrabold">NEVER HAVE I BINGO</div>
      <div className="max-w-[800px] max-h-[800px] grid grid-cols-5 gap-2">
        {grid.map((item, index) => (
          <BingoItem key={index} index={index} item={item} marked={marked} setMarked={setMarked} />
        ))}
      </div>
    </div>
  );
};

export default BingoCard;
