import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export const ModeToggle = () => {
    const { theme, setTheme } = useTheme();

    const handleChangeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <>
            <Button
                data-testid="mode-toggle"
                onClick={handleChangeTheme}
                variant="outline"
                size="icon"
                className="h-auto w-auto border border-primary p-[0.4rem] text-primary hover:text-primary"
            >
                <Sun
                    id="icon-sun-mode-toggle"
                    className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                />
                <Moon
                    id="icon-moon-mode-toggle"
                    className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                />
            </Button>
        </>
    );
};
