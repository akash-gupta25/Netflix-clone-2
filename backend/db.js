const mongoose = require("mongoose");
// const DbUrl = "mongodb://awaiskhan963:awaiskhanniazi@ac-ymeczwc-shard-00-00.jhki4ct.mongodb.net:27017,ac-ymeczwc-shard-00-01.jhki4ct.mongodb.net:27017,ac-ymeczwc-shard-00-02.jhki4ct.mongodb.net:27017/netflix?ssl=true&replicaSet=atlas-13au00-shard-0&authSource=admin&retryWrites=true&w=majority";
// const DbUrl = "mongodb+srv://akashmovies:3CEx07fwiQpZYnDO@cluster0.cdbkvld.mongodb.net/";
// const DbUrl = "mongodb+srv://akashmovies:3CEx07fwiQpZYnDO@cluster0.cdbkvld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const DbUrl = "mongodb+srv://akashmovies:3CEx07fwiQpZYnDO@cluster0.cdbkvld.mongodb.net:27017/test";
// const DbUrl = "mongodb+srv://akashmovies:3CEx07fwiQpZYnDO@cluster0.cdbkvld.mongodb.net:27017/netflix-clone?retryWrites=true&w=majority&appName=Cluster0";
// const DbUrl = "mongodb+srv://akashmovies:3CEx07fwiQpZYnDO@cluster0.cdbkvld.mongodb.net:27017/netflix-clone?retryWrites=true&w=majority";
const uri = "mongodb+srv://akashmovies:3CEx07fwiQpZYnDO@cluster0.cdbkvld.mongodb.net/netflix-clone?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };


 exports.Database= function Database() {
    // mongoose.set('strictQuery', false);
    try {
    mongoose.connect(DbUrl,clientOptions)
    .then(() => {
      console.log("DB Connetion Successfull");
    })
    .catch((err) => {
      console.log(err.message);
    });
    mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch(error){
    console.dir(error);
  }
  finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}