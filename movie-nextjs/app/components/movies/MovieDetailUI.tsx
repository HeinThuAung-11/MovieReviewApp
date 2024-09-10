import { MovieProps } from "@/lib/features/movies/moviesApi";
import { ReviewForm } from "../reviews/ReviewForm";
import { ReviewList } from "../reviews/ReviewList";

interface MovieDetailUIProps {
  movie: MovieProps;
  id: string;
}
export const MovieDetailUI = ({ movie, id }: MovieDetailUIProps) => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white p-6 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
            <div className="text-sm mb-4">
              <span className="m-4">⭐ {movie.rating} </span>
              <span className="m-4">{movie.genre.join(", ")} </span>
              <span className="m-4">{movie.duration} min </span>
              <span className="m-4">{new Date(movie.release_date).getFullYear()} </span>
              <span>{movie.age_rating} </span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
              Watch Trailer
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg">
              Add to Watchlist
            </button>
          </div>
        </div>
      </div>

      {/* Plot Summary */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Plot Summary</h2>
        <p className="text-gray-700">{movie.plot_summary}</p>
      </div>

      {/* Cast & Crew */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cast & Crew</h2>
        <div className="text-gray-700">
          <p>
            <span className="font-semibold">Director:</span> {movie.director}
          </p>
          <p>
            <span className="font-semibold">Cast:</span> {movie.cast.join(", ")}
          </p>
          <p>
            <span className="font-semibold">Screenplay Writer:</span> {movie.screenplay_writer}
          </p>
          <p>
            <span className="font-semibold">Music Composer:</span> {movie.music_composer}
          </p>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>
        <div className="text-gray-700">
          <p>
            <span className="font-semibold">Production Company:</span> {movie.production_company}
          </p>
          {movie.awards && (
            <p>
              <span className="font-semibold">Awards:</span> {movie.awards.join(", ")}
            </p>
          )}
          <p>
            <span className="font-semibold">Language:</span> {movie.language}
          </p>
        </div>
      </div>

      {/* Trailer */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Watch Trailer</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/your_trailer_link"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Movie Trailer"
            className="w-full h-full rounded-lg"></iframe>
        </div>
      </div>

      {/* Reviews */}
      <ReviewList movieId={id} />
      <ReviewForm movieId={id} />
      {/* Similar Movies */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Similar Movies</h2>
        {/* Render similar movies here */}
        <p className="text-gray-700">No similar movies available.</p>
      </div>
    </div>
  );
};
