import { Spinner } from "@/components/spinner";
import { useReviews } from "@/features/reviews/use-reviews";
import { User } from "types";

interface AccountReviewsListProps {}

export const AccountReviewsList: React.FC<AccountReviewsListProps> = ({}) => {
    const { reviews, isReviewsLoading, reviewsError } = useReviews();

    if (isReviewsLoading) {
        return <Spinner />;
    }

    if (reviewsError) {
        return <h1>Error</h1>;
    }

    if (!reviews) {
        return <h1>No reviews yet</h1>;
    }

    console.log(reviews);

    return (
        <div>
            <h1>AccountReviewsList</h1>

            <ul className="space-y-4">
                {reviews.map((review) => (
                    <li key={review._id}>
                        <span className="font-semibold text-primary">
                            {(review.user as User)?.name}
                        </span>{" "}
                        - {review.review}
                    </li>
                ))}
            </ul>
        </div>
    );
};
