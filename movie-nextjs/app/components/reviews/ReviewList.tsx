import { useGetAllReviewsByMovieIdQuery } from "@/lib/features/reviews/reviewApi";
import { ReviewUI } from "./ReviewUI";

export const ReviewList = ({ movieId }: { movieId: string }) => {
  const { data: reviews, isError, isLoading } = useGetAllReviewsByMovieIdQuery(movieId);
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong. Please try again later.</p>;
  }
  if (!reviews || reviews.length === 0) {
    return <p>No reviews available for this movie.</p>;
  }

  return (
    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Reviews</h5>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {reviews.map((review) => (
            <ReviewUI review={review} key={review._id} />
          ))}
        </ul>
      </div>
    </div>
  );
};
