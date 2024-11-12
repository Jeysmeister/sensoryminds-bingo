"use client";

import { neverHaveIEverQuestions } from "@/data/questions";
import { useState } from "react";

const BingoCard = () => {
  const getRandomQuestions = (count: number) => {
    const shuffled = [...neverHaveIEverQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const questions = getRandomQuestions(24);
  const [marked, setMarked] = useState<number[]>([13]);

  const grid = [...questions.slice(0, 12), "FREE", ...questions.slice(13)];

  const handleClick = (index: number) => {};

  return (
    <div className="border border-gray-300 p-4 pt-0 rounded-xl">
      <div className="flex w-full justify-center items-center py-4 text-xl font-extrabold">NEVER HAVE I BINGO</div>
      <div className="max-w-[800px] max-h-[800px] grid grid-cols-5 gap-2">
        {grid.map((item, index) => (
          <div
            key={index}
            className={`relative flex items-center justify-center p-2 h-[130px] w-[130px] bg-white border border-gray-200 rounded ${
              marked.includes(index) ? "bg-black text-white" : "bg-white text-black"
            }`}
            onClick={() => handleClick(index)}
          >
            <p className="text-center text-sm font-extrabold capitalize">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BingoCard;