import { neverHaveIEverQuestions } from "@/data/questions";
import BingoCard from "./components/BingoCard";
import Header from "./components/Header";

export default function Home() {
  const getRandomQuestions = (count: number) => {
    const shuffled = [...neverHaveIEverQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  const questions = getRandomQuestions(24);
  return (
    <div className="flex w-screen overflow-hidden">
      {/* <div className="cursor-pointer">
        <div className="w-screen h-screen flex justify-center items-center text-white bg-black flex-col gap-4">
          <div className="text-xl font-bold">Welcome to</div> <div className="text-4xl font-bold">NEVER HAVE I BINGO</div>
          <div className="text-sm">(Click to continue...)</div>
        </div>
      </div> */}
      <div className="cursor-pointer">
        <div className="w-screen h-screen flex text-left items-center text-white bg-black flex-col gap-4">
          <div className="text-4xl font-extrabold">RULES</div>
          <div className="text-xl font-bold">1. Players must decide on the consequence when a player loses.</div>
          <div className="text-xl font-bold">2. Players must click on the boxes they've done.</div>
          <div className="text-xl font-bold">3. A player loses if they fill a row, column, or diagonal.</div>
          <div className="text-xl font-bold">4. All players that loses must do the consequence.</div>
          <div className="text-xl font-bold">5. After doing the consequence, players must click the restart button on the top right of the page.</div>
          <div className="text-xl font-bold">6. Have Fun!.</div>
          <div className="text-sm">(Click to continue...)</div>
        </div>
      </div>
      {/* <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Header />
        <BingoCard questions={questions} />
      </div> */}
    </div>
  );
}