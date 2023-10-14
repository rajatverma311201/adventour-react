import { ModalContext } from "@/contexts/modal-context";
import { useContext } from "react";

export const useModal = (modalName: string) => {
    const { modalType, isOpen, openModal, closeModal } =
        useContext(ModalContext);

    const handleOpenModal = (op: boolean) => {
        console.log("handleOpenModal", op);
        op ? openModal(modalName) : closeModal();
    };

    return {
        modalType,
        isOpen,
        openModal: handleOpenModal,
    };
};
