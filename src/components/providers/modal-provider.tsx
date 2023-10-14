import { ModalContext } from "@/contexts/modal-context";
import { useState } from "react";

interface ModalProviderProps {
    children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [type, setType] = useState("");

    const handleOpen = (type: string) => {
        setType(type);
        setOpen(true);
    };

    const handleClose = () => {
        setType("");
        setOpen(false);
    };

    return (
        <ModalContext.Provider
            value={{
                modalType: type,
                isOpen: open,
                openModal: handleOpen,
                closeModal: handleClose,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};
