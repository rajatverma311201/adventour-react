import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { AuthTabs } from "./auth-tabs";

interface AuthDialogProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    defaultTab?: string;
}

export const AuthDialog: React.FC<AuthDialogProps> = ({
    open,
    setOpen,
    defaultTab,
}) => {
    return (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-[95vw] rounded-md sm:max-w-lg">
                    <DialogHeader></DialogHeader>
                    <AuthTabs defaultTab={defaultTab} />
                </DialogContent>
            </Dialog>
        </>
    );
};
