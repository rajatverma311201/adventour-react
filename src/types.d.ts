declare module "types" {
    export interface User {
        _id: string;
        name: string;
        email: string;
        photo: string;
        role: "user" | "guide" | "lead-guide" | "admin";
        password: string;
        passwordConfirm: string;
        passwordChangedAt: Date;
        passwordResetToken: string;
        passwordResetExpires: Date;
        active: boolean;
    }

    export interface Tour {
        _id: string;
        name: string;
        slug: string;
        duration: number;
        maxGroupSize: number;
        difficulty: string;
        ratingsAverage: number;
        ratingsQuantity: number;
        price: number;
        priceDiscount: number;
        summary: string;
        description: string;
        imageCover: string;
        images: string[];
        createdAt: Date;
        startDates: Date[];
        secretTour: boolean;
        startLocation: Location;
        locations: Location[];
        guides: string[] | User[];
    }

    export interface Location {
        type: string;
        coordinates: number[];
        address: string;
        description: string;
        day: number;
    }

    export interface RequestBody {
        [key: string]: unknown;
    }

    export interface RequestContent {
        method: RequestMethod;
        headers: { [key: string]: string };
        body?: string;
        credentials: "include" | "omit" | "same-origin";
    }

    export type RequestMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

    export interface ErrorResp {
        status: string;
        message: string;
    }

    export type ModalType = "authModal";
}
