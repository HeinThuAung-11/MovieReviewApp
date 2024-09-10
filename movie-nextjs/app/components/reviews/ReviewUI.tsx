"use client";
import { ReviewProps } from "@/lib/features/reviews/reviewApi";

export const ReviewUI = ({ review }: { review: ReviewProps }) => {
  return (
    <li className="py-3 sm:py-4">
      <div className="flex items-start justify-between">
        <p className="flex-1 text-lg font-medium text-gray-900 dark:text-white break-words">{review.review}</p>
        <p className="w-16 text-lg font-medium text-gray-900 dark:text-white text-center">
          {review.rating.toString()} ⭐
        </p>
      </div>
    </li>
  );
};
