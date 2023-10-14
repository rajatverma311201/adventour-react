import { getMyDetails } from "@/services/apiUser";
import { getCurrentUserKey } from "@/utils/keys";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
    const {
        data: currentUser,
        isLoading: isLoadingCurrentUser,
        isFetching: isFetchingCurrentUser,
        error,
    } = useQuery({
        queryKey: getCurrentUserKey(),
        queryFn: getMyDetails,
    });

    return {
        currentUser,
        isFetchingCurrentUser,
        isLoadingCurrentUser,
        error,
    };
};
