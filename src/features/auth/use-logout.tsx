import { LS } from "@/utils/constants";
import { getCurrentUserKey } from "@/utils/keys";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useLogout = (onSuccess?: () => void) => {
    const queryClient = useQueryClient();

    const logout = () => {
        localStorage.removeItem(LS.JWT_TOKEN_KEY);
        localStorage.removeItem(LS.JWT_TOKEN_EXPIRY_KEY);
        queryClient.invalidateQueries(getCurrentUserKey());
        toast.success("Logged out Successfully");
        onSuccess?.();
    };

    return { logout };
};
