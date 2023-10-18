import { Outlet } from "react-router-dom";
import { Header } from "./header";

export const AppLayout = () => {
    return (
        <div className="flex h-full flex-col items-stretch">
            <Header />
            <main className="flex h-full flex-1 flex-col items-stretch pt-14">
                <Outlet />
            </main>
        </div>
    );
};
