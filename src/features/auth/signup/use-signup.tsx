import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signup as apiSignup } from "@/services/apiAuth";
import { toast } from "sonner";
import { ErrorResp } from "types";
import { useModal } from "@/hooks/use-modal";
import { LS, MODAL } from "@/utils/constants";
import { getCurrentUserKey } from "@/utils/keys";

interface MutationFnArgs {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

export const useSignup = () => {
    const { openModal } = useModal(MODAL.AUTH);
    const queryClient = useQueryClient();

    const {
        mutate: signup,
        isLoading,
        error,
    } = useMutation({
        mutationFn: ({
            name,
            email,
            password,
            passwordConfirm,
        }: MutationFnArgs) => {
            return apiSignup(name, email, password, passwordConfirm);
        },
        onSuccess: (data) => {
            console.log(data);
            localStorage.setItem(
                LS.JWT_TOKEN_KEY,
                data[LS.JWT_TOKEN_KEY] as string,
            );
            localStorage.setItem(
                LS.JWT_TOKEN_EXPIRY_KEY,
                data[LS.JWT_TOKEN_EXPIRY_KEY] as string,
            );
            toast.success("Logged in Successfully");
            queryClient.invalidateQueries(getCurrentUserKey());
            openModal(false);
        },
        onError: (error: ErrorResp) => {
            console.log(error.message);
            toast.error(error.message);
        },
    });

    return {
        signup,
        isLoading,
        error,
    };
};
