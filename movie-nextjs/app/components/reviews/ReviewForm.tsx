import { useAddReviewMutation } from "@/lib/features/reviews/reviewApi";
import { useForm } from "react-hook-form";

interface reviewFormProps {
  movie: string;
  review: string;
  rating: Number;
}
export const ReviewForm = ({ movieId }: { movieId: string }) => {
  const [addReviewApi, addReviewApiResult] = useAddReviewMutation();
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<reviewFormProps>({
    defaultValues: {},
  });

  const onSubmit = (data: Partial<reviewFormProps>) => {
    let review = {
      movie: movieId,
      ...data,
    };
    addReviewApi(review).then(() => {
      reset();
    });
  };
  return (
    <form className="w-full p-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label htmlFor="review" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Review
        </label>
        <input
          type="text"
          id="review"
          {...register("review", { required: "Review is required" })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Movie review"
        />
        {errors.review && <span className="text-red-600">{errors.review.message}</span>}
      </div>
      <div className="mb-5">
        <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Rating
        </label>
        <input
          type="number"
          id="rating"
          step={0.5}
          {...register("rating", {
            required: "Rating is required",
            min: { value: 1, message: "Number must be at least 1" },
            max: { value: 10, message: "Number must be at most 10" },
          })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Movie rating"
        />
        {errors.rating && <span className="text-red-600">{errors.rating.message}</span>}
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="text-white w-[300px] bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-1/2 px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Submit
        </button>
      </div>
    </form>
  );
};
