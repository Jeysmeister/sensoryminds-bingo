"use client";

import { getRandomQuestions } from "@/functions/getRandomQuestions";
import { easeInOut, motion } from "framer-motion";
import { useState } from "react";
import BingoCard from "./components/BingoCard";
import Header from "./components/Header";

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  const [questions, setQuestions] = useState(getRandomQuestions(24));

  const slideInVariant = {
    default: { x: 0, opacity: 1, width: "100%" },
    invisible: { x: "120%", opacity: 0, width: 0 },
    visible: { x: 0, opacity: 1, width: "100%", transition: { duration: 1, easeInOut } },
  };

  return (
    <div className="flex w-screen overflow-hidden bg-black">
      <motion.div
        className="w-screen h-screen flex justify-center items-center text-white bg-black flex-col gap-4 cursor-pointer"
        onClick={() => setActiveSection(1)}
        initial="default"
        animate={`${activeSection === 1 ? "invisible" : activeSection === 2 && "invisible"}`}
        variants={slideInVariant}
      >
        <div className="text-xl font-bold">Welcome to</div>
        <div className="text-2xl xs:text-4xl font-bold">NEVER HAVE I BINGO</div>
        <div className="text-sm" onClick={() => setActiveSection(1)}>
          (Click to continue...)
        </div>
      </motion.div>

      <motion.div
        className={`w-screen h-screen flex justify-center items-center text-white bg-black flex-col gap-4 cursor-pointer ${activeSection === 1 ? "px-4" : "px-0"}`}
        onClick={() => setActiveSection(2)}
        initial="invisible"
        animate={activeSection === 1 ? "visible" : activeSection === 2 && "invisible"}
        variants={slideInVariant}
      >
        <div className="text-xl sm:text-4xl font-extrabold">INSTRUCTIONS</div>
        <div className="flex flex-col text-xs sm:text-base font-bold text-left max-w-[800px] gap-2 ">
          <div>1. Players must decide on the consequence when a player loses (e.g. Drink a shot).</div>
          <div>2. Players must click on the boxes of the events they&apos;ve done or experienced.</div>
          <div>3. A player loses if they fill a row, column, or diagonal.</div>
          <div>4. All players who lost must do the consequence.</div>
          <div>5. The losing players must tell the other players what the list of things they&apos;ve experienced or have done.</div>
          <div>6. All players must click the &quot;Next Round&quot; button on the top right of the page.</div>
          <div>7. Have Fun!</div>
        </div>
        <div className="text-sm" onClick={() => setActiveSection(2)}>
          (Click to continue...)
        </div>
      </motion.div>

      <motion.div
        className="w-screen h-screen flex flex-col justify-center items-center relative bg-white"
        initial="invisible"
        animate={activeSection === 2 ? "visible" : activeSection === 1 && "invisible"}
        variants={slideInVariant}
      >
        <Header setActiveSection={setActiveSection} setQuestions={setQuestions} />
        <BingoCard questions={questions} />
      </motion.div>
    </div>
  );
}
