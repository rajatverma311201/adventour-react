import Fetch from "@/utils/Fetch";
import { Review } from "types";

export const getAllReviews = async (): Promise<Review[]> => {
    const data = await Fetch.GET(`api/v1/reviews`);
    return data.data;
};
export const getMyReviews = async (): Promise<Review[]> => {
    const data = await Fetch.GET(`api/v1/reviews`);
    return data.data;
};
