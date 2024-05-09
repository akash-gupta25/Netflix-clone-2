const mongoose = require("mongoose");

 exports.Database= function Database() {
    mongoose.set('strictQuery', false);
    MONGO_URI=mongodb+srv://akashmovies:3CEx07fwiQpZYnDO@cluster0.cdbkvld.mongodb.net/


      .then(() => {
        console.log("DB Connetion Successfull");
      })
      .catch((err) => {
        console.log(err.message);
      });
}
 
