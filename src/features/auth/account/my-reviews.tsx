import { AccountReviewsList } from "@/features/reviews/account-reviews-list";

export const MyReviews = () => {
    return (
        <div className="text-center">
            <h1 className="mb-8 text-4xl font-semibold text-primary">
                My Reviews
            </h1>
            <AccountReviewsList />
        </div>
    );
};
