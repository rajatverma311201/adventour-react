import { createContext } from "react";

export type Theme = "dark" | "light" | "system";

type ThemeCtx = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const initialState: ThemeCtx = {
    theme: "light",
    setTheme: () => null,
};
export const ThemeContext = createContext<ThemeCtx>(initialState);
