import { RequestMethod } from "types";

export const REQUEST: { [key: string]: RequestMethod } = {
    POST: "POST",
    GET: "GET",
    DELETE: "DELETE",
    PUT: "PUT",
    PATCH: "PATCH",
};

export const MODAL = {
    AUTH: "authModal",
};

export const LS = {
    JWT_TOKEN_KEY: "jwtToken",
    JWT_TOKEN_EXPIRY_KEY: "jwtTokenExpiry",
};
