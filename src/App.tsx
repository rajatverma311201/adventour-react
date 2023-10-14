import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout/app-layout";
import { ToursView } from "./features/tours/tours-view";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route path="/" element={<ToursView />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
