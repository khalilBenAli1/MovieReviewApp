
const axios = require("axios");

const getMovies =()=>{
    const options = {
        method: 'GET',
        url: 'https://moviesdatabase.p.rapidapi.com/titles',
        params: {limit: '50', page: '1', titleType: 'movie', genre: 'Action', year: '2022'},
        headers: {
          'X-RapidAPI-Key': '8cbadf3088mshc806face7e42d28p1541b4jsna04c6a3b8b39',
          'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        }
      };
     return axios(options)
}

module.exports.movie = getMovies;