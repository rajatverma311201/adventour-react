import { getMyDetails } from "@/services/apiUser";
import { getCurrentUserKey } from "@/utils/keys";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
    const {
        data: currentUser,
        isLoading: isLoadingCurrentUser,
        error,
    } = useQuery({
        queryKey: getCurrentUserKey(),
        queryFn: getMyDetails,
    });

    return {
        currentUser,
        isLoadingCurrentUser,
        error,
    };
};
