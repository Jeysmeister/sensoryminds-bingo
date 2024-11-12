import { neverHaveIEverQuestions } from "@/data/questions";

export const getRandomQuestions = (count: number) => {
  const shuffled = [...neverHaveIEverQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
