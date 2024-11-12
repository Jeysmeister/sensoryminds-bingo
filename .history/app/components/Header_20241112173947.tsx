import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="p-4  absolute top-0 w-screen flex justify-between items-center">
      <div className="text-xl">NEVER HAVE I BINGO</div>
      <Button className="font-extrabold">Next Round</Button>
    </div>
  );
};

export default Header;
