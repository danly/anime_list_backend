var mongoose = require("mongoose");

var animeListSchema = new mongoose.Schema({
  title: String,
  watched: {type: Boolean, default: false},
  hum_id: Number,
});

var AnimeList = mongoose.model("AnimeList", animeListSchema)

module.exports = AnimeList;
