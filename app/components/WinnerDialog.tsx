import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const WinnerDialog = ({ open, setOpen, questions }: { open: boolean; setOpen: (value: boolean) => void; questions: string[] }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle>I HAVE ...</DialogTitle>
        <div className="flex flex-col gap-4">
          {questions.map((question: string, index: number) => {
            return <div key={index}>{`${index + 1}. ${question}`}</div>;
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WinnerDialog;
