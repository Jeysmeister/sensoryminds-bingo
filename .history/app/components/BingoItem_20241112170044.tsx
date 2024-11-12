import { useState } from "react";

const BingoItem = ({ index, item, marked, setMarked }: { index: number; item: string; marked: number[]; setMarked: (value: number[]) => void }) => {
  const [active, setActive] = useState();
  const handleClick = (index: number) => {
    setMarked([...marked, index]);
  };
  return (
    <div
      key={index}
      className={`relative flex items-center justify-center p-2 h-[130px] w-[130px] border border-gray-200 rounded ${active ? "bg-black text-white" : "bg-white text-black"}`}
      onClick={() => handleClick(index)}
    >
      <p className="text-center text-sm font-extrabold capitalize">{item}</p>
    </div>
  );
};

export default BingoItem;
