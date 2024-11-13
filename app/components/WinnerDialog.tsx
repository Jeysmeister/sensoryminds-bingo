import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const WinnerDialog = ({ open, setOpen, questions }: { open: boolean; setOpen: (value: boolean) => void; questions: string[] }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[90%] overflow-y-scroll">
        <DialogTitle>I HAVE ...</DialogTitle>
        <div className="flex flex-col gap-4">
          {questions.map((question: string, index: number) => {
            if (question) {
              return <div key={index}>{`${index + 1}. ${question}`}</div>;
            }
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WinnerDialog;
