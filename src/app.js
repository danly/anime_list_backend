var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    session = require('express-session'),
    app = express(),
    db = require("./models"),
    port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
  secret: "foolycooly",
  resave: false,
  saveUninitialized: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Mashape-Key");
  next();
});

app.get("/", function(req, res) {
  res.send("Hello World!");
});

/**
GET all anime
*/
app.get("/anime-list", function(req, res) {
  db.AnimeList.find({}, function(err, list) {
    res.json(list);
  });
});

/**
GET 1 anime
*/
app.get("/anime-list/:id", function(req, res) {
  db.AnimeList.findById(req.params.id, function(err, anime) {
    if(err) {
      res.send(err);
    }
    res.status(200).send(anime);
  });
});

/**
  title: String
  watched: Boolean
  hum_id: Number
*/
app.post("/anime-list/new", function(req, res) {
  var newAnime = {};

  newAnime.title = req.body.title;
  newAnime.hum_id = req.body.hum_id;

  db.AnimeList.create(newAnime, function(err, list) {
    if(err) {
      res.send(err);
    }
    res.status(201).send(list);
  });
});

/**
Update 1 anime
*/
app.put("/anime-list/:id", function(req, res) {
  var watchedStatus = req.body.watched,
      query = {_id: req.params.id};
  db.AnimeList.update(query, {watched: watchedStatus}, function(err, anime) {
    if(err) {
      res.send(err);
    }
    res.status(200).send("Updated successfully");
  });
});

/**
Delete 1 anime
*/
app.delete("/anime-list/:id", function(req, res) {
  db.AnimeList.findById(req.params.id, function(err, anime) {
    if(err) {
      res.send(err);
    }
    anime.remove(function(err, anime) {
      if(err) {
        res.send(err);
      }
      res.status(200).send("Deleted successfully");
    });
  });
});

app.listen(port, function () {
  console.log("Server running on localhost:"+port);
});
