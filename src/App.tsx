import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/app-layout";
import { ToursView } from "./features/tours/tours-view";
import { Toaster } from "sonner";
import { useTheme } from "@/hooks/use-theme";

function App() {
    const { theme } = useTheme();
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route path="/" element={<ToursView />} />
                    </Route>
                </Routes>
            </BrowserRouter>

            <Toaster position="top-center" richColors theme={theme} />
        </>
    );
}

export default App;
