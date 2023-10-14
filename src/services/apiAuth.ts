import Fetch from "@/utils/Fetch";
import { User } from "types";

interface AuthResponse {
    user: User;
    token: string;
    expiresIn: number;
}

export const login = async (
    email: string,
    password: string,
): Promise<AuthResponse> => {
    const url = "api/v1/users/login";
    const data = await Fetch.POST(url, { email, password });
    return data.data;
};

export const signup = async (
    name: string,
    email: string,
    password: string,
    passwordConfirm: string,
): Promise<AuthResponse> => {
    const url = "api/v1/users/signup";
    const data = await Fetch.POST(url, {
        name,
        email,
        password,
        passwordConfirm,
    });
    return data.data;
};