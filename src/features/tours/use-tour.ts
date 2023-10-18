import { getTourBySlug } from "@/services/apiTour";
import { getTourBySlugKey } from "@/utils/keys";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useTour = () => {
    const { slug } = useParams();

    const {
        data: tour,
        isLoading: isTourLoading,
        error,
    } = useQuery({
        queryKey: getTourBySlugKey(slug!),
        queryFn: () => getTourBySlug(slug!),
    });
    return { tour, isTourLoading, error };
};
