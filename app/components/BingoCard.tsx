"use client";

import { possibleWins } from "@/data/possibleWins";
import { useEffect, useState } from "react";
import BingoItem from "./BingoItem";
import { motion } from "framer-motion";
import WinnerDialog from "./WinnerDialog";
import JSConfetti from "js-confetti";

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
  const [markedQ, setMarkedQ] = useState<string[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const grid = [...questions.slice(0, 12), "FREE", ...questions.slice(12)];
  const [tempPossibleWins, setTempPosibleWins] = useState(possibleWins);
  const checkForWin = (markedBoxes: number[]) => {
    return tempPossibleWins.some((combination, index) => {
      const isWin = combination.every((index) => markedBoxes.includes(index));
      if (isWin) {
        setTempPosibleWins(tempPossibleWins.filter((_, idx) => idx !== index));
      }
      return isWin;
    });
  };
  const [bingoCounter, setBingoCounter] = useState(0);
  useEffect(() => {
    console.log(markedQ);
  }, [markedQ]);
  useEffect(() => {
    setMarked([12]);
    setMarkedQ([]);
    setTempPosibleWins(possibleWins);
    setBingoCounter(0);
  }, [questions]);
  useEffect(() => {
    const win = checkForWin(marked);
    if (win) {
      setBingoCounter(bingoCounter + 1);
    }
  }, [marked]);
  useEffect(() => {
    if (bingoCounter > 0) {
      setDialogOpen(true);
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti({
        emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸", "🎉"],
      });
    }
  }, [bingoCounter]);

  return (
    <>
      <motion.div variants={container} initial="hidden" animate="visible" className="md:border md:border-gray-300 p-4 pt-0 rounded-xl">
        <div className="flex w-full justify-center items-center py-4 text-xl font-extrabold">NEVER HAVE I BINGO</div>
        <div className="max-w-[800px] max-h-[800px] w-screen grid grid-cols-5 gap-1 xs:gap-2 sm:gap-4">
          {grid.map((item, index) => (
            <motion.div key={index} variants={child} className="flex justify-center">
              <BingoItem key={index} index={index} item={item} marked={marked} setMarked={setMarked} markedQ={markedQ} setMarkedQ={setMarkedQ} questions={questions} />
            </motion.div>
          ))}
        </div>
      </motion.div>
      <WinnerDialog open={dialogOpen} setOpen={setDialogOpen} questions={markedQ} />
    </>
  );
};

export default BingoCard;
