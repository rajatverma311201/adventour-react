import { useMutation } from "@tanstack/react-query";
import { signup as apiSignup } from "@/services/apiAuth";
import { toast } from "sonner";
import { ErrorResp } from "types";

interface MutationFnArgs {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

export const useSignup = () => {
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
            toast.success("Logged in Successfully");
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
