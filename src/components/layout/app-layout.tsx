import { Outlet } from "react-router-dom";
import { Header } from "./header";

export const AppLayout = () => {
    return (
        <div className="flex flex-col items-stretch">
            <Header />
            <main className="flex-1 py-28">
                <Outlet />
            </main>
        </div>
    );
};
