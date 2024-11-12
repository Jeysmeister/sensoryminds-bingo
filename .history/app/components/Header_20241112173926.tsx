import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="h-10 p-4  absolute top-0 w-screen flex justify-between">
      <div className="text-xl">NEVER HAVE I BINGO</div>
      <Button>Next Round</Button>
    </div>
  );
};

export default Header;
