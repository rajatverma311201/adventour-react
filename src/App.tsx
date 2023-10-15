import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "@/components/layout/app-layout";
import { ToursView } from "@/features/tours/tours-view";
import { Toaster } from "sonner";
import { useTheme } from "@/hooks/use-theme";
import { AccountLayout } from "@/features/auth/account/account-layout";
import { PersonalInfo } from "./features/auth/account/personal-info";
import { ChangePassword } from "./features/auth/account/change-password";
import { MyReviews } from "./features/auth/account/my-reviews";
import { MyBookings } from "./features/auth/account/my-bookings";

function App() {
    const { theme } = useTheme();
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route path="/" element={<ToursView />} />
                        <Route path="tours/*" element={<ToursView />} />
                        <Route path="/account" element={<AccountLayout />}>
                            <Route
                                index
                                path="personal-info"
                                element={<PersonalInfo />}
                            />
                            <Route
                                path="change-password"
                                element={<ChangePassword />}
                            />
                            <Route path="my-reviews" element={<MyReviews />} />
                            <Route
                                path="my-bookings"
                                element={<MyBookings />}
                            />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>

            <Toaster position="top-center" richColors theme={theme} />
        </>
    );
}

export default App;
