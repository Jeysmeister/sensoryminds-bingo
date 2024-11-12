import { neverHaveIEverQuestions } from "@/data/questions";

export default function Home() {
  const getRandomQuestions = (count: number) => {
    // Shuffle and slice to get a random selection of questions
    const shuffled = [...neverHaveIEverQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  return <div></div>;
}
