"use client";

import { possibleWins } from "@/data/possibleWins";
import { useEffect, useState } from "react";
import BingoItem from "./BingoItem";
import { motion } from "framer-motion";
import WinnerDialog from "./WinnerDialog";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const BingoCard = ({ questions }: { questions: string[] }) => {
  const [marked, setMarked] = useState<number[]>([12]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const grid = [...questions.slice(0, 12), "FREE", ...questions.slice(12)];
  const checkForWin = (markedBoxes: number[]) => {
    return possibleWins.some((combination) => combination.every((index) => markedBoxes.includes(index)));
  };
  useEffect(() => {
    setMarked([12]);
  }, [questions]);
  useEffect(() => {
    console.log(marked);
    const win = checkForWin(marked);
    if (win) {
      setDialogOpen(true);
    }
  }, [marked]);

  return (
    <>
      <motion.div variants={container} initial="hidden" animate="visible" className="border border-gray-300 p-4 pt-0 rounded-xl">
        <div className="flex w-full justify-center items-center py-4 text-xl font-extrabold">NEVER HAVE I BINGO</div>
        <div className="max-w-[800px] max-h-[800px] w-screen grid grid-cols-5 gap-1 xs:gap-2">
          {grid.map((item, index) => (
            <motion.div variants={child}>
              <BingoItem key={index} index={index} item={item} marked={marked} setMarked={setMarked} questions={questions} />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <WinnerDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        questions={marked.map((value: number) => {
          return questions[value];
        })}
      />
    </>
  );
};

export default BingoCard;
