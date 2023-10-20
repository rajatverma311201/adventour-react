import { getMyReviews } from "@/services/apiReview";
import { getReviewsKey } from "@/utils/keys";
import { useQuery } from "@tanstack/react-query";

export const useReviews = () => {
    const {
        data: reviews,
        isLoading: isReviewsLoading,
        error: reviewsError,
    } = useQuery({
        queryKey: getReviewsKey(),
        queryFn: getMyReviews,
    });
    return { reviews, isReviewsLoading, reviewsError };
};
