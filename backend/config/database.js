const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex:true
    })
    .then((con) => {
      console.log(
        `MongoDb Database connected with Host: ${con.connection.host}`
      );
    });
};

module.exports = connectDatabase;
