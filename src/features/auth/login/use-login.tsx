import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as apiLogin } from "@/services/apiAuth";
import { toast } from "sonner";
import { ErrorResp } from "types";
import { useModal } from "@/hooks/use-modal";
import { MODAL } from "@/utils/constants";
import { getCurrentUserKey } from "@/utils/keys";

interface MutationFnArgs {
    email: string;
    password: string;
}

export const useLogin = () => {
    const { openModal } = useModal(MODAL.AUTH);
    const queryClient = useQueryClient();

    const {
        mutate: login,
        isLoading,
        error,
    } = useMutation({
        mutationFn: ({ email, password }: MutationFnArgs) => {
            return apiLogin(email, password);
        },
        onSuccess: (data) => {
            console.log(data);
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
        login,
        isLoading,
        error,
    };
};
