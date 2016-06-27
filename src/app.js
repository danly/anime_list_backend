var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    session = require('express-session'),
    app = express(),
    port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended:true}));

app.use(session({
  secret: "foolycooly",
  resave: false,
  saveUninitialized: true
}));

app.get("/", function (req, res) {
  res.send("Hello World!");
});



app.listen(port, function () {
  console.log("Server running on localhost:"+port);
});
