import { useGetAllMoviesQuery } from "@/lib/features/movies/moviesApi";
import { MovieUI } from "./MovieUI";

export const MovieListUI = () => {
  const { data: movies, isLoading, isError } = useGetAllMoviesQuery();
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Something went wrong. Please try again later.</p>;
  }
  if (movies) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <MovieUI movie={movie} key={movie._id} />
        ))}
      </div>
    );
  }
};
