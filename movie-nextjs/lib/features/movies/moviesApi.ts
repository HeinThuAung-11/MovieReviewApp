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
export interface DirectorProps {
  name: string;
  phoneNo: string;
  _id: string;
}

export const moviesApi = createApi({
  reducerPath: "movieApi",
  tagTypes: ["Movie"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
  endpoints: (builder) => ({
    getAllMovies: builder.query<MovieProps[], void>({
      query: () => `movies/`,
    }),
  }),
});

export const { useGetAllMoviesQuery } = moviesApi;
