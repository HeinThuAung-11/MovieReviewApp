"use client";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

export type FormValues = {
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
};

const AddMovieForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      genre: [],
      cast: [],
      awards: [],
    },
  });

  const {
    fields: genreFields,
    append: appendGenre,
    remove: removeGenre,
  } = useFieldArray({
    control,
    name: "genre",
  });

  const {
    fields: castFields,
    append: appendCast,
    remove: removeCast,
  } = useFieldArray({
    control,
    name: "cast",
  });

  const {
    fields: awardsFields,
    append: appendAwards,
    remove: removeAwards,
  } = useFieldArray({
    control,
    name: "awards",
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form className="max-w-4xl mx-auto w-full p-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5">
        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Title
        </label>
        <input
          type="text"
          id="title"
          {...register("title", { required: "Title is required" })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Movie Title"
        />
        {errors.title && <span className="text-red-600">{errors.title.message}</span>}
      </div>

      <div className="mb-5">
        <label htmlFor="release_date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Release Date
        </label>
        <input
          type="date"
          id="release_date"
          {...register("release_date", { required: "Release Date is required" })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        />
        {errors.release_date && <span className="text-red-600">{errors.release_date.message}</span>}
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Genres</label>
        {genreFields.map((item, index) => (
          <div key={item.id} className="flex mb-2">
            <input
              type="text"
              {...register(`genre.${index}`, { required: "Genre is required" })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Genre"
            />
            <button
              type="button"
              onClick={() => removeGenre(index)}
              className="ml-2 bg-red-500 text-white rounded-lg px-3 py-1 text-sm">
              Remove
            </button>
          </div>
        ))}
        <button type="button" className="text-blue-500" onClick={() => appendGenre("")}>
          Add Genre
        </button>
      </div>

      {/* Casts */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cast</label>
        {castFields.map((item, index) => (
          <div key={item.id} className="flex mb-2">
            <input
              type="text"
              {...register(`cast.${index}`, { required: "At least one cast member is required" })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Cast Member"
            />
            <button
              type="button"
              onClick={() => removeCast(index)}
              className="ml-2 bg-red-500 text-white rounded-lg px-3 py-1 text-sm">
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => appendCast("")} className="text-blue-500">
          Add Cast
        </button>
        {errors.cast && <span className="text-red-600">{errors.cast.message}</span>}
      </div>

      {/* Awards */}
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Awards</label>
        {awardsFields.map((item, index) => (
          <div key={item.id} className="flex mb-2">
            <input
              type="text"
              {...register(`awards.${index}`, { required: "At least one award is required" })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Award"
            />
            <button
              type="button"
              onClick={() => removeAwards(index)}
              className="ml-2 bg-red-500 text-white rounded-lg px-3 py-1 text-sm">
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={() => appendAwards("")} className="text-blue-500">
          Add Award
        </button>
        {errors.awards && <span className="text-red-600">{errors.awards.message}</span>}
      </div>

      <div className="mb-5">
        <label htmlFor="director" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Director
        </label>
        <input
          type="text"
          id="director"
          {...register("director", { required: "Director is required" })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Director"
        />
        {errors.director && <span className="text-red-600">{errors.director.message}</span>}
      </div>

      {/* Plot Summary Input */}
      <div className="mb-5">
        <label htmlFor="plot_summary" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Plot Summary
        </label>
        <textarea
          id="plot_summary"
          {...register("plot_summary", { required: "Plot summary is required" })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Brief summary of the plot"
        />
        {errors.plot_summary && <span className="text-red-600">{errors.plot_summary.message}</span>}
      </div>

      {/* Duration Input */}
      <div className="mb-5">
        <label htmlFor="duration" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Duration (in minutes)
        </label>
        <input
          type="number"
          id="duration"
          {...register("duration", { required: "Duration is required", valueAsNumber: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="e.g., 148"
        />
        {errors.duration && <span className="text-red-600">{errors.duration.message}</span>}
      </div>

      {/* Language Input */}
      <div className="mb-5">
        <label htmlFor="language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Language
        </label>
        <input
          type="text"
          id="language"
          {...register("language", { required: "Language is required" })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="e.g., English"
        />
        {errors.language && <span className="text-red-600">{errors.language.message}</span>}
      </div>

      {/* Rating Input */}
      <div className="mb-5">
        <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Rating
        </label>
        <input
          type="number"
          step="0.1"
          id="rating"
          {...register("rating", { required: "Rating is required", valueAsNumber: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="e.g., 8.8"
        />
        {errors.rating && <span className="text-red-600">{errors.rating.message}</span>}
      </div>

      {/* Production Company Input */}
      <div className="mb-5">
        <label htmlFor="production_company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Production Company
        </label>
        <input
          type="text"
          id="production_company"
          {...register("production_company", { required: "Production company is required" })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="e.g., Warner Bros."
        />
        {errors.production_company && <span className="text-red-600">{errors.production_company.message}</span>}
      </div>

      {/* Screenplay Writer Input */}
      <div className="mb-5">
        <label htmlFor="screenplay_writer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Screenplay Writer
        </label>
        <input
          type="text"
          id="screenplay_writer"
          {...register("screenplay_writer", { required: "Screenplay writer is required" })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="e.g., Christopher Nolan"
        />
        {errors.screenplay_writer && <span className="text-red-600">{errors.screenplay_writer.message}</span>}
      </div>

      {/* Music Composer Input */}
      <div className="mb-5">
        <label htmlFor="music_composer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Music Composer
        </label>
        <input
          type="text"
          id="music_composer"
          {...register("music_composer", { required: "Music composer is required" })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="e.g., Hans Zimmer"
        />
        {errors.music_composer && <span className="text-red-600">{errors.music_composer.message}</span>}
      </div>

      {/* Age Rating Input */}
      <div className="mb-5">
        <label htmlFor="age_rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Age Rating
        </label>
        <input
          type="text"
          id="age_rating"
          {...register("age_rating", { required: "Age rating is required" })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="e.g., PG-13"
        />
        {errors.age_rating && <span className="text-red-600">{errors.age_rating.message}</span>}
      </div>
      <button
        type="submit"
        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Submit
      </button>
    </form>
  );
};

export default AddMovieForm;
