import { neverHaveIEverQuestions } from "@/data/questions";

const BingoCard = () => {
  const getRandomQuestions = (count: number) => {
    const shuffled = [...neverHaveIEverQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  const questions = getRandomQuestions(24);

  // Split questions into a 5x5 grid
  const grid = [...questions.slice(0, 12), { number: "Free", question: "Free Space" }, ...questions.slice(12)];

  return (
    <div className="grid grid-cols-5 gap-2 p-4 border border-gray-300">
      {grid.map((item, index) => (
        <div key={index} className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded">
          <p className="text-center text-sm">{item.question}</p>
        </div>
      ))}
    </div>
  );
};

export default BingoCard;
