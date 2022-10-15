let mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Movies")
.then(() => console.log("connected"))
.catch((err) => console.log(err));

// mongoose.connect(process.env.MONGO_URL);

let MovieSchema = mongoose.Schema({
  titleText: String,
  release: String,
  image: String,
  rate: Number,
  comment: Object,

});

let Movies = mongoose.model("Movies", MovieSchema);

let saveMovie = (obj) => {
  let movies = new Movies({
    titleText: obj.titleText.text,
    release: obj.releaseYear.year,
    image:obj.primaryImage.url,
    rate:0,
    comment:{users:{user:'test'}}
    
  });
  
    movies.save().then((res) => console.log("succes"));

 
   
};

module.exports.save = saveMovie;
module.exports.movies = Movies;
