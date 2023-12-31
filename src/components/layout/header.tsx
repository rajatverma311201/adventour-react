import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { AuthDialog } from "@/features/auth/auth-dialog";
import { useState } from "react";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useModal } from "@/hooks/use-modal";
import { MODAL } from "@/utils/constants";
import { HomeIcon, User } from "lucide-react";
import { AuthUserPopver } from "@/features/auth/auth-user-popover";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Header = () => {
    const [tab, setTab] = useState("login");

    const { modalType, isOpen, openModal } = useModal(MODAL.AUTH);

    const { currentUser, isFetchingCurrentUser } = useCurrentUser();

    const [authPopoverOpen, setAuthPopoverOpen] = useState(false);

    const location = useLocation();

    return (
        <header
            className={cn(
                "fixed left-0 right-0 top-0 z-50 flex flex-1 items-center justify-between border-b-2 bg-accent px-4 py-3",
                location.pathname === "/" ? "justify-end" : "",
            )}
        >
            {/* <h1>Header</h1> */}
            {location.pathname !== "/" && (
                <Link to="/">
                    <HomeIcon className="h-[1.75rem] w-[1.75rem] text-primary" />
                </Link>
            )}
            <div className="flex items-center gap-5">
                {!isFetchingCurrentUser && !currentUser && (
                    <>
                        <Button
                            className="text-xs hover:bg-card"
                            onClick={() => {
                                setTab("login");
                                openModal(true);
                            }}
                            variant={"outline"}
                            size={"sm"}
                        >
                            Login
                        </Button>
                        <Button
                            className="text-xs"
                            onClick={() => {
                                setTab("signup");
                                openModal(true);
                            }}
                            size={"sm"}
                        >
                            Sign Up
                        </Button>
                    </>
                )}
                {!isFetchingCurrentUser && currentUser && (
                    <>
                        <AuthUserPopver
                            open={authPopoverOpen}
                            setOpen={setAuthPopoverOpen}
                        >
                            <Button size={"icon"} className="h-9 w-9 p-2">
                                <User className="h-full w-full" />
                            </Button>
                        </AuthUserPopver>
                    </>
                )}
                <ModeToggle />

                <AuthDialog
                    defaultTab={tab}
                    open={isOpen && modalType === MODAL.AUTH}
                    setOpen={openModal}
                />
            </div>
        </header>
    );
};
