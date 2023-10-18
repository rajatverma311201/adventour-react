import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/providers/theme-provider.tsx";
import { ModalProvider } from "@/components/providers/modal-provider.tsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 60,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider defaultTheme="light">
            <QueryClientProvider client={queryClient}>
                <ModalProvider>
                    <App />
                </ModalProvider>
            </QueryClientProvider>
        </ThemeProvider>
    </React.StrictMode>,
);
