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

module.exports = {
  saveMovie : (arr) => {
      return Movies.insertMany(arr)
      },
  findMovies :()=>{
    return Movies.find({})
  }
};

