const mongoose = require("mongoose");
// const DbUrl = "mongodb://awaiskhan963:awaiskhanniazi@ac-ymeczwc-shard-00-00.jhki4ct.mongodb.net:27017,ac-ymeczwc-shard-00-01.jhki4ct.mongodb.net:27017,ac-ymeczwc-shard-00-02.jhki4ct.mongodb.net:27017/netflix?ssl=true&replicaSet=atlas-13au00-shard-0&authSource=admin&retryWrites=true&w=majority";
// const DbUrl = "mongodb+srv://akashmovies:3CEx07fwiQpZYnDO@cluster0.cdbkvld.mongodb.net/";
// const DbUrl = "mongodb+srv://akashmovies:3CEx07fwiQpZYnDO@cluster0.cdbkvld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const DbUrl = "mongodb+srv://akashmovies:3CEx07fwiQpZYnDO@cluster0.cdbkvld.mongodb.net:27017/test";
// const DbUrl = "mongodb+srv://akashmovies:3CEx07fwiQpZYnDO@cluster0.cdbkvld.mongodb.net:27017/netflix-clone?retryWrites=true&w=majority&appName=Cluster0";
const DbUrl = "mongodb+srv://akashmovies:3CEx07fwiQpZYnDO@cluster0.cdbkvld.mongodb.net:27017/netflix-clone?retryWrites=true&w=majority";


 exports.Database= function Database() {
    mongoose.set('strictQuery', false);
    mongoose
    .connect(DbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connetion Successfull");
    })
    .catch((err) => {
      console.log(err.message);
    });
}