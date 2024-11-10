const express = require("express");
const expressApp = express();

expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(express.static("src/public"));
expressApp.set("view engine", "ejs");
expressApp.set("views", "src/views");
expressApp.get("/", (req, res) => {
  res.render("index");
});

module.exports = expressApp;
