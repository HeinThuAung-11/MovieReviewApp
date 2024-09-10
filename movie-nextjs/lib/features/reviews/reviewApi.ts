import { moviesApi } from "../movies/moviesApi";

export interface ReviewProps {
  _id: string;
  movie: string;
  review: string;
  rating: Number;
  __v: number;
}

const reviewApi = moviesApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllReviewsByMovieId: builder.query<ReviewProps[], string>({
      query: (movieId) => `/reviews/movie/${movieId}`,
      providesTags: (result, error, movieId) =>
        result
          ? [...result.map(({ _id }) => ({ type: "Review" as const, _id })), { type: "Review" as const, id: "LIST" }]
          : [{ type: "Review" as const, id: "LIST" }],
    }),
    addReview: builder.mutation<ReviewProps, Partial<ReviewProps>>({
      query: (review) => ({
        url: `/reviews`,
        method: "POST",
        body: review,
      }),
      invalidatesTags: [{ type: "Review", id: "LIST" }],
    }),
  }),
  overrideExisting: false,
});

// const reviewApi = moviesApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getAllReviewsByMovieId: builder.query<ReviewProps[], string>({
//       query: (movieId) => `/reviews/movie/${movieId}`,
//     }),
//     addReview: builder.mutation<ReviewProps, Partial<ReviewProps>>({
//       query: (review) => ({
//         url: `/reviews`,
//         method: "POST",
//         body: review,
//       }),
//       // invalidatesTags: ["Review"],
//       async onQueryStarted(review: ReviewProps, { queryFulfilled, dispatch }) {
//         try {
//           const { data: savedReview } = await queryFulfilled;
//           const patchResult = dispatch(
//             reviewApi.util.updateQueryData("getAllReviewsByMovieId", review.movie, (draft) => {
//               draft.push(savedReview);
//             })
//           );
//         } catch (error) {
//           {
//             console.log(error);
//           }
//         }
//       },
//     }),
//   }),
//   overrideExisting: false,
// });

export const { useGetAllReviewsByMovieIdQuery, useAddReviewMutation } = reviewApi;
