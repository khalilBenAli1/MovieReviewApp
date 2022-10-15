const express = require("express");
const axios = require("axios");
const save=require("../database/index.js")

let app = express();
let cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.json());

const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    params: {limit: '50', page: '1', titleType: 'movie', genre: 'Action', year: '2022'},
    headers: {
      'X-RapidAPI-Key': '8cbadf3088mshc806face7e42d28p1541b4jsna04c6a3b8b39',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    response.data.results.forEach(e => {
      console.log(e.titleText)
        save.save(e);
      });    
  }).catch(function (error) {
      console.error(error);
  });

  app.get("/movies", function (req, res) {
    save.movies.find({},function (err,data){
      res.send(data)
    })
  });


let port = 3001;
 
app.listen(port, function () {
  console.log(`listening on port ${port}`);
});