import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface MovieProps {
  _id: string;
  title: string;
  release_date: string;
  genre: string[];
  director: string;
  cast: string[];
  plot_summary: string;
  duration: number;
  language: string;
  rating: number;
  production_company: string;
  screenplay_writer: string;
  music_composer: string;
  awards: string[];
  age_rating: string;
  __v: number;
}

export const moviesApi = createApi({
  reducerPath: "movieApi",
  tagTypes: ["Movie", "Review"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api/",
    prepareHeaders: (headers, { getState }) => {
      const auth = getState()?.auth;
      const token = auth?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getAllMovies: builder.query<MovieProps[], void>({
      query: () => `movies/`,
      providesTags: ["Movie"],
    }),
    addMovie: builder.mutation<MovieProps, Partial<MovieProps>>({
      query: (movie: Partial<MovieProps>) => ({
        url: `movies/`,
        method: "POST",
        body: movie,
      }),
      invalidatesTags: ["Movie"],
      // async onQueryStarted(movie: MovieProps, { dispatch, queryFulfilled }) {
      //   console.log("On query started", movie);
      //   try {
      //     const { data: AddedMovie } = await queryFulfilled;
      //     const patchResult = dispatch(
      //       moviesApi.util.updateQueryData("getAllMovies", undefined, (draft: MovieProps[]) => {
      //         // Update the draft with the added movie
      //         draft.push(AddedMovie);
      //       })
      //     );
      //   } catch (error) {
      //     console.error("Error updating cache after mutation", error);
      //   }
      // },
    }),
    updateMovie: builder.mutation<MovieProps, Partial<MovieProps>>({
      query: (movie: Partial<MovieProps>) => ({
        url: `movies/${movie._id}`,
        method: "PUT",
        body: movie,
      }),
      invalidatesTags: ["Movie"],
      // async onQueryStarted(movie: MovieProps, { dispatch, queryFulfilled }) {
      //   console.log("On query started", movie);
      //   try {
      //     const { data: UpdatedMovie } = await queryFulfilled;
      //     const patchResult = dispatch(
      //       moviesApi.util.updateQueryData("getAllMovies", undefined, (draft: MovieProps[]) => {
      //         // Update the draft with the added movie
      //         const index = draft.findIndex((m) => m._id === UpdatedMovie._id);
      //         draft[index] = UpdatedMovie;
      //       })
      //     );
      //   } catch (error) {
      //     console.error("Error updating cache after mutation", error);
      //   }
      // },
    }),
    deleteMovie: builder.mutation<MovieProps, string>({
      query: (id: string) => ({
        url: `movies/${id}`,
        method: "DELETE",
      }),

      async onQueryStarted(id: string, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          moviesApi.util.updateQueryData("getAllMovies", undefined, (draft) => {
            const index = draft.findIndex((movie) => movie._id === id);
            if (index !== -1) {
              draft.splice(index, 1);
            }
          })
        );
        try {
          console.log("onquerydelete", id);
          const { data: deleteMovie } = await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const { useGetAllMoviesQuery, useAddMovieMutation, useUpdateMovieMutation, useDeleteMovieMutation } = moviesApi;
