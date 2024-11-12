import { Button } from "@/components/ui/button";

const Header = ({ setActiveSection }: { setActiveSection: (value: number) => void }) => {
  return (
    <div className="p-4 w-screen absolute top-0  flex justify-between items-center">
      <div className="text-xl">NEVER HAVE I BINGO</div>
      <div className="flex gap-2">
        <Button className="font-extrabold">Next Round</Button>
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