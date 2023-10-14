import Fetch from "@/utils/Fetch";

export const getMyDetails = async () => {
    const url = "api/v1/users/me";
    const data = await Fetch.GET(url);
    return data.data;
};
