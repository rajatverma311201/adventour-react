import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useCurrentUser } from "@/hooks/use-current-user";
import { AuthUserAvatar } from "@/features/auth/auth-user-avatar";
import { LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLogout } from "./use-logout";
import { useNavigate } from "react-router-dom";

interface AuthUserPopoverProps {
    open: boolean;
    setOpen: (b: boolean) => void;
    children: React.ReactNode;
}
export const AuthUserPopver: React.FC<AuthUserPopoverProps> = ({
    open,
    setOpen,
    children,
}) => {
    const navigate = useNavigate();

    const { logout, isLoading } = useLogout(() => {
        setOpen(false);
    });
    const { currentUser } = useCurrentUser();
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>{children}</PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="flex items-center justify-between">
                    <AuthUserAvatar name={currentUser?.name as string} />
                    <div className="flex flex-col  text-sm">
                        <p className="font-semibold uppercase text-primary">
                            {currentUser?.name}
                        </p>
                        <p className=" text-gray-500">{currentUser?.email}</p>
                    </div>
                    <Button
                        size={"icon"}
                        variant={"outline"}
                        className="text-primary hover:text-primary/90"
                        onClick={() => {
                            navigate("/account");
                            setOpen(false);
                        }}
                    >
                        <Settings className="aspect-square h-[1.25rem]" />
                    </Button>
                    <Button
                        onClick={() => logout()}
                        disabled={isLoading}
                        size={"icon"}
                        variant={"outline"}
                        className="text-primary hover:text-primary/90"
                    >
                        <LogOut className="aspect-square h-[1.25rem]" />
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
};
