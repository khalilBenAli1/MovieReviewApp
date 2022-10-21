const express = require("express");
const axios = require("axios");
const { saveMovie, findMovies } = require("../database/index.js");
const movies = require("../movieFetcher/movies");
let app = express();
let cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.json());


app.get("/movies", (req, res) => {
  movies.movie()
    .then(({ data }) =>
      saveMovie(
        data.results.map((movie) => {
          return {
            titleText: movie.titleText.text,
            release: movie.releaseYear.year,
            image: movie.primaryImage?.url,
            rate: 0,
            comment: { users: { user: "test" } },
          };
        })
      )
    )
    .then((data) => res.status(201).json(data))
    .catch((err) => {
      if (err.code === 11000) {
        findMovies().then((data) => res.send(data));
      } else {
        res.status(500).send("connection error");
      }
    });
});


let port = 3001;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
