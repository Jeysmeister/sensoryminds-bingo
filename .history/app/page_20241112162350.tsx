import { neverHaveIEverQuestions } from "@/data/questions";

export default function Home() {
  const getRandomQuestions = (count: number) => {
    const shuffled = [...neverHaveIEverQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  const bingoGrid = getRandomQuestions(24);
  return <div></div>;
}
