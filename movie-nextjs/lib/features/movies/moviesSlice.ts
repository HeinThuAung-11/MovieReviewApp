import { createAppSlice } from "@/lib/createAppSlice";
import { MovieProps } from "@/lib/features/movies/moviesApi";
import { PayloadAction } from "@reduxjs/toolkit";

interface MovieState {
  movie: MovieProps | null;
}

const initialState: MovieState = {
  movie: null,
};

export const moviesSlice = createAppSlice({
  name: "movie",
  initialState,
  reducers: (create) => ({
    setMovie: create.reducer((state, action: PayloadAction<MovieProps>) => {
      console.log("actionpayload", action.payload);
      state.movie = action.payload;
    }),
  }),
  selectors: {
    getMovie: (state) => state.movie,
  },
});

export const { setMovie } = moviesSlice.actions;
export const { getMovie } = moviesSlice.selectors;
