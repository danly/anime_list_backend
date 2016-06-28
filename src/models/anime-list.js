var mongoose = require("mongoose");

var animeListSchema = new mongoose.Schema({
  title: String,
  watched: {type: Boolean, default: false},
  hum_id: Number,
  status: String,
  episode_length: Number,
  cover_image: String,
  synopsis: String,
});

var AnimeList = mongoose.model("AnimeList", animeListSchema)

module.exports = AnimeList;
