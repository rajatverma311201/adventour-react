import { Tour } from "types";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, Flag, LucideIcon, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const API_URL = import.meta.env.VITE_API_URL;
interface TourCardProps {
    tour: Tour;
}
export const TourCard: React.FC<TourCardProps> = ({ tour }) => {
    return (
        <>
            <Card className="w-[350px] overflow-hidden dark:text-yellow-50/75">
                <div className="relative">
                    <div
                        className="relative"
                        style={{
                            clipPath:
                                "polygon(0 0, 100% 0%, 100% 85%, 0% 100%)",
                        }}
                    >
                        {/* <CardHeader> */}
                        <img
                            className="h-56 w-full object-cover"
                            src={`${API_URL}/img/tours/${tour.imageCover}`}
                            alt={tour.name}
                        />
                    </div>
                    <h3 className="absolute bottom-0 right-2 z-10 w-9/12 text-right text-3xl font-medium leading-snug text-white">
                        <span className="bg-gradient-to-br from-primary/50 to-primary box-decoration-clone px-4 py-2 uppercase">
                            {tour.name}
                        </span>
                    </h3>
                </div>
                <CardContent className="space-y-4 pt-5 text-sm">
                    <p className="text-left text-sm font-bold uppercase text-primary">
                        {tour.difficulty} {tour.duration}-day tour
                    </p>
                    <p className="text-left text-base italic">{tour.summary}</p>

                    <FeatureGrid tour={tour} />

                    <hr className="border-primary" />
                </CardContent>

                <CardFooter className="text-sm">
                    <div className="flex w-full items-center justify-between">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-primary">
                                    ${tour.price}
                                </span>{" "}
                                per person
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-primary">
                                    {tour.ratingsAverage}
                                </span>{" "}
                                rating ({tour.ratingsQuantity})
                            </div>
                        </div>
                        <Button
                            className=" rounded-full text-xs font-semibold uppercase transition hover:-translate-y-1"
                            size={"lg"}
                        >
                            Details
                        </Button>
                    </div>
                </CardFooter>
            </Card>
        </>
    );
};
const FeatureGrid: React.FC<TourCardProps> = ({ tour }) => {
    return (
        <>
            <div className="grid grid-cols-2 gap-4 py-4">
                <FeatureGridItem
                    IconFeature={MapPin}
                    text={tour.startLocation.description}
                />
                <FeatureGridItem
                    IconFeature={Calendar}
                    text={new Date(tour.startDates[0])?.toLocaleDateString(
                        "en-US",
                        { year: "numeric", month: "long" },
                    )}
                />
                <FeatureGridItem
                    IconFeature={Flag}
                    text={`${tour.locations.length} stops`}
                />

                <FeatureGridItem
                    IconFeature={User}
                    text={tour.maxGroupSize.toString()}
                />
            </div>
        </>
    );
};
interface FeatureGridItemProps {
    IconFeature: LucideIcon;
    text: string;
}
const FeatureGridItem: React.FC<FeatureGridItemProps> = ({
    IconFeature,
    text,
}) => {
    return (
        <>
            <div className="flex items-center gap-2">
                <IconFeature className="aspect-square h-7 text-primary" />
                <span>{text}</span>
            </div>
        </>
    );
};
