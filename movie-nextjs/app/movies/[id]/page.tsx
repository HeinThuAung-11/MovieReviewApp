"use client";
import GoBackLink from "@/app/components/common/GoBackLink";
import { MovieDetailUI } from "@/app/components/movies/MovieDetailUI";
import { useGetAllMoviesQuery } from "@/lib/features/movies/moviesApi";
import { setMovie } from "@/lib/features/movies/moviesSlice";
import { ReviewProps } from "@/lib/features/reviews/reviewApi";
import { useAppDispatch } from "@/lib/hooks";
import { useRouter } from "next/navigation";

// let movie: MovieProps = {
//   _id: "66d48e791ee13f66b4698139",
//   title: "The Lord of the Rings: The Fellowship of the Ring",
//   release_date: "2001-12-19T00:00:00.000Z",
//   genre: ["Adventure", "Drama", "Fantasy"],
//   director: "Peter Jackson",
//   cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
//   plot_summary:
//     "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
//   duration: 178,
//   language: "English",
//   rating: 8.8,
//   production_company: "New Line Cinema",
//   screenplay_writer: "Fran Walsh, Philippa Boyens, Peter Jackson",
//   music_composer: "Howard Shore",
//   awards: ["Oscar for Best Cinematography", "Oscar for Best Makeup"],
//   age_rating: "PG-13",
//   __v: 0,
// };

let reviews: ReviewProps[] = [
  {
    _id: "66d4a8507c338d4fdf61946c",
    movie: "66d48e1b1ee13f66b4698127",
    rating: 9,
    review:
      "An iconic masterpiece that redefined the gangster genre. Excellent direction, storytelling, and memorable performances.",
    __v: 0,
  },
  {
    _id: "66d4a8907c338d4fdf61946f",
    movie: "66d48e1b1ee13f66b4698127",
    rating: 10,
    review:
      "A cinematic masterpiece that blends crime drama with complex characters and rich storytelling. Marlon Brando's performance is iconic and unforgettable.",
    __v: 0,
  },
];

export default function MovieDetail({ params }: { params: { id: string } }) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { movie } = useGetAllMoviesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      movie: data?.find((movie) => movie._id === params.id),
    }),
  });
  if (!movie) {
    return <div>Movie not found</div>;
  }
  const handleEditClick = () => {
    // console.log("Edit clicked", movie);
    dispatch(setMovie(movie));
    router.push("/movies/editmovie");
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <GoBackLink />
        <button
          onClick={handleEditClick}
          className="inline-flex items-center px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors duration-300">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 17h2m-1-2v2m-3 0h3m3 0h3m-6 0h-3m0 0h-3m-6 0h3m0 0h3m3 0h3m0 0h3M5.243 5.757l1.415-1.414a1 1 0 011.415 0l9.9 9.9a1 1 0 010 1.415l-1.414 1.415a1 1 0 01-1.415 0l-9.9-9.9a1 1 0 010-1.415z"
            />
          </svg>
          Edit
        </button>
      </div>
      <MovieDetailUI movie={movie} id={params.id} />
    </>
  );
}
