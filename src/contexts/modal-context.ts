import { createContext } from "react";

interface ModalCtx {
    modalType: string;
    isOpen: boolean;
    openModal: (type: string) => void;
    closeModal: () => void;
}

export const ModalContext = createContext<ModalCtx>({
    modalType: "",
    isOpen: false,
    openModal: () => {},
    closeModal: () => {},
});
