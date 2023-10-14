import Fetch from "@/utils/Fetch";
import { User } from "types";

export const getMyDetails = async (): Promise<User> => {
    const url = "api/v1/users/get-current";
    const data = await Fetch.GET(url);
    return data.data;
};
