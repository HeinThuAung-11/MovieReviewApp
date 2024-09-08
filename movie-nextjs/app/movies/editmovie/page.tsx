"use client";
import { FormValues } from "@/app/components/movies/AddMovie";
import EditMovieForm from "@/app/components/movies/EditMovie";
import { getMovie } from "@/lib/features/movies/moviesSlice";
import { useAppSelector } from "@/lib/hooks";
export default function EditMovie() {
  const movieData = useAppSelector(getMovie);
  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return <EditMovieForm movie={movieData} onSubmit={onSubmit} />;
}
