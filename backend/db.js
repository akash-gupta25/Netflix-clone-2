const mongoose = require("mongoose");

 exports.Database= function Database() {
    mongoose.set('strictQuery', false);
    mongoose
      .connect("mongodb+srv://akashmovies:3CEx07fwiQpZYnDO@cluster0.cdbkvld.mongodb.net", {
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
 
