var express = require("express");
var app = express();
var mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27107/test")
  .then(() => {
    console.log("connected db");
  })
  .catch(err => {
    console.log("not connected to db");
  });

app.get("/", (req, res) => {
  res.send("this is the home page");
});
app.get("/about", (req, res) => {
  res.send("this is the about page");
});

// listening for a request on port 3000
app.listen(3000, () => {
  console.log("server listening on port 3000");
});
