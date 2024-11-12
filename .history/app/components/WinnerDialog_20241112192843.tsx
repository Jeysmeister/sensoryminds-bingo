import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

const WinnerDialog = ({ open, setOpen, questions }: { open: boolean; setOpen: (value: boolean) => void; questions: string[] }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle>I HAVE ...</DialogTitle>
      </DialogContent>
    </Dialog>
  );
};

export default WinnerDialog;
