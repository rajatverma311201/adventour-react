import Fetch from "@/utils/Fetch";
import { User } from "types";

interface AuthResponse {
    user: User;
    jwtToken: string;
    jwtTokenExpiry: number;
    [key: string]: unknown;
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

export const logout = async () => {
    const url = "api/v1/users/logout";
    return await Fetch.GET(url);
};

export const providerAuth = async (
    token: string,
    provider: "google" | "github",
) => {
    const url = `api/v1/auth/provider?name=${provider}`;
    const { data } = await Fetch.POST(url, { token });
    return data;
};
