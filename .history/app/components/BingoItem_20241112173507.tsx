"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const BingoItem = ({ index, item, marked, setMarked }: { index: number; item: string; marked: number[]; setMarked: (value: number[]) => void }) => {
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
  return (
    <motion.div
      initial={{ backgroundColor: "#ffffff" }}
      animate={{
        backgroundColor: active ? "#000000" : "#ffffff",
      }}
      transition={{ duration: 0.5 }}
      key={index}
      className={`relative flex items-center justify-center p-2 h-[130px] w-[130px] border border-gray-200 rounded ${active ? "bg-black text-white" : "bg-white text-black"}`}
      onClick={() => handleClick(index)}
    >
      <p className="text-center text-sm font-extrabold capitalize">{item}</p>
    </motion.div>
  );
};

export default BingoItem;
