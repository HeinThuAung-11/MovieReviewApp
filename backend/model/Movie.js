//Filename: Posts.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
  title: { type: String, required: true },
  release_date: { type: Date, required: true },
  genre: { type: [String], required: true },
  director: { type: String, required: true },
  cast: { type: [String], required: true }, // List of actor names
  plot_summary: { type: String, required: true },
  duration: { type: Number, required: true },
  language: { type: String, required: true },
  rating: { type: Number, required: true },
  production_company: { type: String, required: true },
  screenplay_writer: { type: String, required: true },
  music_composer: { type: String, required: true },
  awards: { type: [String], required: false },
  age_rating: { type: String, required: true },
});
module.exports = mongoose.model("Movies", MovieSchema);
