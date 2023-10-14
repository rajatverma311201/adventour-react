import { useMutation } from "@tanstack/react-query";
import { login as apiLogin } from "@/services/apiAuth";
import { toast } from "sonner";
import { ErrorResp } from "types";

interface MutationFnArgs {
    email: string;
    password: string;
}

export const useLogin = () => {
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
            // refresh();
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
