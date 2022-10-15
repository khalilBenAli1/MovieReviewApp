let mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Movies")
.then(() => console.log("connected"))
.catch((err) => console.log(err));

// mongoose.connect(process.env.MONGO_URL);

let MovieSchema = mongoose.Schema({
  titleText: {type:String,unique:true},
  release: String,
  image: String,
  rate: Number,
  comment: [{ body: String, img:String , userName:String ,rate:Number}],

});

let Movies = mongoose.model("Movies", MovieSchema);

let saveMovie = (obj) => {
  let movies = new Movies({
    titleText: obj.titleText.text,
    release: obj.releaseYear.year,
    image:obj.primaryImage?.url,
    rate:0,
    comment:{users:{user:'test'}}
    
  });
  
    movies.save().then((res) => console.log("succes"));

 
   
};

module.exports.save = saveMovie;
module.exports.movies = Movies;
