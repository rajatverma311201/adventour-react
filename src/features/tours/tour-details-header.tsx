import { Spinner } from "@/components/spinner";
import { useTour } from "@/features/tours/use-tour";

export const TourDetailsHeader = () => {
    const { tour, isTourLoading, error } = useTour();

    if (isTourLoading) {
        return (
            <div className="flex h-full items-center justify-center gap-10 ">
                <Spinner />
            </div>
        );
    }

    console.log(tour);

    if (error) {
        return <div>Something went wrong</div>;
    }

    return (
        <div className="grid h-full place-content-center">
            <h1 className="text-5xl font-bold text-primary">{tour?.name}</h1>
        </div>
    );
};
