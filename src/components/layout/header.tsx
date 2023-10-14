import { Button } from "../ui/button";
import { ModeToggle } from "../mode-toggle";
import { AuthDialog } from "@/features/auth/auth-dialog";
import { useState } from "react";

export const Header = () => {
    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState("login");

    return (
        <header className="fixed left-0 right-0 top-0 z-50 flex flex-1 items-center justify-between border-b-2 bg-accent px-4 py-3">
            <h1>Header</h1>
            <div className="flex items-center gap-5">
                <Button
                    className="text-xs"
                    onClick={() => {
                        setTab("login");
                        setOpen(true);
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
                        setOpen(true);
                    }}
                    size={"sm"}
                >
                    Sign Up
                </Button>
                <ModeToggle />
                <AuthDialog defaultTab={tab} open={open} setOpen={setOpen} />
            </div>
        </header>
    );
};
