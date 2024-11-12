"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BingoItem = ({ index, item, marked, setMarked, questions }: { index: number; item: string; marked: number[]; setMarked: (value: number[]) => void; questions: string[] }) => {
  const [active, setActive] = useState(item === "FREE" ? true : false);
  const handleClick = (index: number) => {
    if (item !== "FREE") {
      const newActive = !active;
      if (newActive) {
        setActive(newActive);
        setMarked([...marked, index]);
      } else {
        setActive(newActive);
        const indexOfItem = marked.indexOf(index);
        setMarked([...marked.splice(0, indexOfItem), ...marked.splice(indexOfItem)]);
      }
    }
  };
  useEffect(() => {
    if (item !== "FREE") {
      setActive(false);
    }
  }, [questions]);
  return (
    <motion.div
      initial={{ backgroundColor: "#ffffff" }}
      animate={{
        backgroundColor: active ? "#000000" : "#ffffff",
      }}
      transition={{ duration: 0.5 }}
      key={index}
      className={`relative flex items-center justify-center p-2 h-[80px] w-[80px] border border-gray-200 rounded ${active ? "bg-black text-white" : "bg-white text-black"} cursor-pointer`}
      onClick={() => handleClick(index)}
    >
      <p className="text-center text-xs font-extrabold capitalize">{item}</p>
    </motion.div>
  );
};

export default BingoItem;
