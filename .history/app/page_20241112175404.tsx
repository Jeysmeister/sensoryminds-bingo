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
    <div className="w-screen h-screen flex justify-center items-center">
      <Header />
      <BingoCard questions={questions} />
    </div>
  );
}
