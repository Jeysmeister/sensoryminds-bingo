import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const WinnerDialog = ({ open, setOpen, questions }: { open: boolean; setOpen: (value: boolean) => void; questions: string[] }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle>I HAVE ...</DialogTitle>
        <div className="flex flex-col">
          {questions.map((question: string) => {
            return <div>{question}</div>;
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WinnerDialog;
