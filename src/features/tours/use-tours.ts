import { getTours } from "@/services/apiTour";
import { getToursKey } from "@/utils/keys";
import { useQuery } from "@tanstack/react-query";

export const useTours = () => {
    const {
        data: tours,
        isLoading: isToursLoading,
        error,
    } = useQuery({
        queryKey: getToursKey(),
        queryFn: getTours,
    });
    return { tours, isToursLoading, error };
};
