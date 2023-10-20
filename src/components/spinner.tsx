import { cn } from "@/lib/utils";
import { HtmlHTMLAttributes } from "react";

interface SpinnerProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export const Spinner: React.FC<SpinnerProps> = ({ className }) => {
    return (
        <div
            data-testid="spinner"
            className={cn(
                "mx-auto aspect-square h-14 animate-spin rounded-full border-[5px] border-r-primary border-t-primary",
                className,
            )}
        />
    );
};
