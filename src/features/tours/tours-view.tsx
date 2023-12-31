import { Spinner } from "@/components/spinner";
import { useTours } from "./use-tours";
import { Tour } from "types";
import { TourCard } from "./tour-card";

export const ToursView = () => {
    const { tours, isToursLoading, error } = useTours();

    if (isToursLoading) {
        return (
            <div className="flex h-full items-center justify-center gap-10 ">
                <Spinner />
            </div>
        );
    }

    if (error) {
        return <div>Something went wrong</div>;
    }

    return (
        // <div>
        <div className="flex flex-wrap items-center justify-center gap-10 pb-10 pt-14">
            {tours?.map((tour: Tour) => (
                <TourCard key={tour._id} tour={tour} />
            ))}
        </div>
        // </div>
    );
};
