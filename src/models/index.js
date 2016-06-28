var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/anime_list_backend");

module.exports.AnimeList = require("./anime-list");
