const mongoose = require("mongoose");

 exports.Database= function Database() {
    mongoose.set('strictQuery', false);
    mongoose
      // .connect("mongodb+srv://akashmovies:3CEx07fwiQpZYnDO@cluster0.cdbkvld.mongodb.net/")
      .connect("mongodb+srv://akashmovies:3CEx07fwiQpZYnDO@ac-djfb2od-shard-00-02.cdbkvld.mongodb.net:27017/netflix-clone?retryWrites=true&w=majority&appName=Cluster0")
      .then(() => {
        console.log("DB Connetion Successfull");
      })
      .catch((err) => {
        console.log(err.message);
      });
}
 
