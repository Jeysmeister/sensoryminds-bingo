"use client";

import { neverHaveIEverQuestions } from "@/data/questions";
import BingoCard from "./components/BingoCard";
import Header from "./components/Header";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  const getRandomQuestions = (count: number) => {
    const shuffled = [...neverHaveIEverQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  const questions = getRandomQuestions(24);

  // Define animation variants for sliding
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%", // Enter from left or right based on direction
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%", // Exit to left or right based on direction
      opacity: 0,
    }),
  };

  const sections = [
    <motion.div
      key="welcome"
      className="w-screen h-screen flex justify-center items-center text-white bg-black flex-col gap-4 cursor-pointer"
      onClick={() => setActiveSection(1)}
      custom={1}
      initial="enter"
      animate="center"
      exit="exit"
      variants={slideVariants}
      transition={{ duration: 0.6 }}
    >
      <div className="text-xl font-bold">Welcome to</div>
      <div className="text-4xl font-bold">NEVER HAVE I BINGO</div>
      <div className="text-sm">(Click to continue...)</div>
    </motion.div>,

    <motion.div
      key="rules"
      className="w-screen h-screen flex justify-center items-center text-white bg-black flex-col gap-4 cursor-pointer"
      onClick={() => setActiveSection(2)}
      custom={1}
      initial="enter"
      animate="center"
      exit="exit"
      variants={slideVariants}
      transition={{ duration: 0.6 }}
    >
      <div className="text-4xl font-extrabold">RULES</div>
      <div className="flex flex-col text-xl font-bold text-left w-[800px]">
        <div>1. Players must decide on the consequence when a player loses.</div>
        <div>2. Players must click on the boxes they&apos;ve done.</div>
        <div>3. A player loses if they fill a row, column, or diagonal.</div>
        <div>4. All players that lose must do the consequence.</div>
        <div>5. After doing the consequence, players must click the restart button on the top right of the page.</div>
        <div>6. Have Fun!</div>
      </div>
      <div className="text-sm">(Click to continue...)</div>
    </motion.div>,

    <motion.div
      key="game"
      className="w-screen h-screen flex flex-col justify-center items-center relative"
      custom={1}
      initial="enter"
      animate="center"
      exit="exit"
      variants={slideVariants}
      transition={{ duration: 0.6 }}
    >
      <Header />
      <BingoCard questions={questions} />
    </motion.div>,
  ];

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <motion.div
        className="absolute flex w-full h-full"
        animate={{ x: `-${activeSection * 100}%` }} // Slide left/right based on activeSection
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {sections}
      </motion.div>
    </div>
  );
}
