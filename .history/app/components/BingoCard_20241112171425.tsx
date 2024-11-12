"use client";

import { possibleWins } from "@/data/possibleWins";
import { useEffect, useState } from "react";
import BingoItem from "./BingoItem";

const BingoCard = ({ questions }: { questions: string[] }) => {
  const [marked, setMarked] = useState<number[]>([12]);
  const grid = [...questions.slice(0, 12), "FREE", ...questions.slice(12)];
  const checkForWin = (markedBoxes: number[]) => {
    return possibleWins.some((combination) => combination.every((index) => markedBoxes.includes(index)));
  };
  useEffect(() => {
    console.log(marked);
    const win = checkForWin(marked);
    if (win) {
      console.log("WINNER");
    }
  }, [marked]);

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
