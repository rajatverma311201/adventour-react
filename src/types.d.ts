declare module "types" {
    export type User = {
        id: string;
        name: string;
        email: string;
        password: string;
    };
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
        guides: string[];
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
    }

    export type RequestMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
}
