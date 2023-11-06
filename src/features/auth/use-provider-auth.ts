import { useMutation, useQueryClient } from "@tanstack/react-query";
import { providerAuth as apiProviderAuth } from "@/services/apiAuth";
import { toast } from "sonner";
import { AuthProvider, ErrorResp } from "types";
import { useModal } from "@/hooks/use-modal";
import { LS, MODAL } from "@/utils/constants";
import { getCurrentUserKey } from "@/utils/keys";

interface MutationFnArgs {
    token: string;
    provider: AuthProvider;
}

export const useProviderAuth = () => {
    const { openModal } = useModal(MODAL.AUTH);
    const queryClient = useQueryClient();

    const {
        mutate: providerAuth,
        isLoading,
        error,
    } = useMutation({
        mutationFn: ({ token, provider }: MutationFnArgs) => {
            return apiProviderAuth(token, provider);
        },
        onSuccess: (data) => {
            console.log(data);
            toast.success("Logged in Successfully");
            localStorage.setItem(
                LS.JWT_TOKEN_KEY,
                data[LS.JWT_TOKEN_KEY] as string,
            );
            localStorage.setItem(
                LS.JWT_TOKEN_EXPIRY_KEY,
                data[LS.JWT_TOKEN_EXPIRY_KEY] as string,
            );
            openModal(false);
            queryClient.invalidateQueries(getCurrentUserKey());
        },
        onError: (error: ErrorResp) => {
            console.log(error.message);
            toast.error(error.message);
        },
    });

    return {
        providerAuth,
        isLoading,
        error,
    };
};
