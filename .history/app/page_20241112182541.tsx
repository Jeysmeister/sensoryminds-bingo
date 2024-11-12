"use client";

import { neverHaveIEverQuestions } from "@/data/questions";
import { motion } from "framer-motion";
import { useState } from "react";
import BingoCard from "./components/BingoCard";
import Header from "./components/Header";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  const getRandomQuestions = (count: number) => {
    const shuffled = [...neverHaveIEverQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  const questions = getRandomQuestions(24);

  // Updated animation variants with sliding transitions
  const slideLeftVariant = {
    initial: { x: 0, opacity: 1 },
    slideOut: { x: "-100%", opacity: 0, transition: { duration: 1 } },
  };

  const slideInVariant = {
    initial: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="flex w-screen overflow-hidden">
      <motion.div
        className="w-screen h-screen flex justify-center items-center text-white bg-black flex-col gap-4 cursor-pointer"
        onClick={() => setActiveSection(1)}
        initial="initial"
        animate={`${(activeSection === 1 || activeSection === 2) && "slideOut"}`}
        exit="slideOut"
        variants={slideInVariant}
      >
        <div className="text-xl font-bold">Welcome to</div>
        <div className="text-4xl font-bold">NEVER HAVE I BINGO</div>
        <div className="text-sm">(Click to continue...)</div>
      </motion.div>

      <motion.div
        className="w-screen h-screen flex justify-center items-center text-white bg-black flex-col gap-4 cursor-pointer"
        onClick={() => setActiveSection(2)}
        initial="initial"
        animate={activeSection === 1 ? "visible" : activeSection === 2 && "slideOut"}
        exit="slideOut"
        variants={slideInVariant}
      >
        <div className="text-4xl font-extrabold">RULES</div>
        <div className="flex flex-col text-xl font-bold text-left w-[800px]">
          <div>1. Players must decide on the consequence when a player loses.</div>
          <div>2. Players must click on the boxes they've done.</div>
          <div>3. A player loses if they fill a row, column, or diagonal.</div>
          <div>4. All players that lose must do the consequence.</div>
          <div>5. After doing the consequence, players must click the restart button on the top right of the page.</div>
          <div>6. Have Fun!</div>
        </div>
        <div className="text-sm">(Click to continue...)</div>
      </motion.div>

      <motion.div
        className="w-screen h-screen flex flex-col justify-center items-center relative"
        initial="initial"
        animate={activeSection === 2 && "visible"}
        exit="slideOut"
        variants={slideInVariant}
      >
        <Header />
        <BingoCard questions={questions} />
      </motion.div>
    </div>
  );
}