const mongoose = require("mongoose");
// const DbUrl = "mongodb+srv://akashmovies:3CEx07fwiQpZYnDO@cluster0.cdbkvld.mongodb.net/";
// const DbUrl = "mongodb+srv://akashmovies:3CEx07fwiQpZYnDO@cluster0.cdbkvld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const DbUrl = "mongodb+srv://akashmovies:3CEx07fwiQpZYnDO@cluster0.cdbkvld.mongodb.net:27017/test";
const DbUrl = "mongodb+srv://akashmovies:3CEx07fwiQpZYnDO@cluster0.cdbkvld.mongodb.net:27017/netflix-clone?retryWrites=true&w=majority&appName=Cluster0";


 exports.Database= function Database() {
    mongoose.set('strictQuery', false);
    mongoose
    .connect(DbUrl)
    .then(() => {
      console.log("DB Connetion Successfull");
    })
    .catch((err) => {
      console.log(err.message);
    });
}