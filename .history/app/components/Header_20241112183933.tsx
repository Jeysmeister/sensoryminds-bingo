import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="p-4 w-screen absolute top-0  flex justify-between items-center">
      <div className="text-xl">NEVER HAVE I BINGO</div>
      <div className="flex gap-2">
        <Button className="font-extrabold">Next Round</Button>
        <Button className="font-extrabold">Next Round</Button>
      </div>
    </div>
  );
};

export default Header;
