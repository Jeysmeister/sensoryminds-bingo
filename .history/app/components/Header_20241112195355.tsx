import { Button } from "@/components/ui/button";
import { getRandomQuestions } from "@/functions/getRandomQuestions";

const Header = ({ setActiveSection, setQuestions }: { setActiveSection: (value: number) => void; setQuestions: (value: string[]) => void }) => {
  const nextRoundHandler = () => {
    setQuestions(getRandomQuestions(24));
  };
  return (
    <div className="p-4 w-screen absolute top-0  flex justify-between items-center">
      <div className="text-xl">NEVER HAVE I BINGO</div>
      <div className="flex flex-col gap-2">
        <Button className="font-extrabold" onClick={nextRoundHandler}>
          Next Round
        </Button>
        <Button
          className="font-extrabold"
          onClick={() => {
            setActiveSection(1);
          }}
        >
          Rules
        </Button>
      </div>
    </div>
  );
};

export default Header;
