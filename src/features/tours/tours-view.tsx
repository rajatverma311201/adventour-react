import { Spinner } from "@/components/spinner";
import { useTours } from "./use-tours";
import { Tour } from "types";
import { TourCard } from "./tour-card";

export const ToursView = () => {
    const { tours, isToursLoading, error } = useTours();

    if (isToursLoading) {
        return <Spinner />;
    }

    if (error) {
        return <div>Something went wrong</div>;
    }

    return (
        <div>
            <h1>ToursView</h1>
            <div className="flex flex-wrap items-center justify-center gap-10 px-2 py-10">
                {tours?.map((tour: Tour) => (
                    <TourCard key={tour._id} tour={tour} />
                ))}
            </div>
        </div>
    );
};
