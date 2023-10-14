import Fetch from "@/utils/Fetch";
import { Tour } from "types";

// export const getTours = async (): Promise<Tour[]> => {
//     const resp = await fetch(`${API_URL}/api/v1/tours`);
//     const data = await resp.json();

//     if (!resp.ok || resp.status >= 400) {
//         throw new Error(data.message || "Something went wrong");
//     }

//     console.log(data.data);

//     return data.data;
// };

export const getTours = async (): Promise<Tour[]> => {
    const data = await Fetch.GET("api/v1/tours");
    return data.data;
};
