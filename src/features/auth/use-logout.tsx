import { logout as apiLogout } from "@/services/apiAuth";
import { getCurrentUserKey } from "@/utils/keys";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useLogout = (onSuccess?: () => void, onError?: () => void) => {
    const queryClient = useQueryClient();

    const { mutate: logout, isLoading } = useMutation({
        mutationFn: () => apiLogout(),
        onSuccess: () => {
            console.log("Logged out Successfully");
            queryClient.invalidateQueries(getCurrentUserKey());
            toast.success("Logged out Successfully");
            onSuccess?.();
        },
        onError: () => {
            console.log("Error logging out");
            onError?.();
        },
    });

    return {
        logout,
        isLoading,
    };
};
