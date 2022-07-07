/*module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "apis",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };*/

require("dotenv").config();

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_PROD_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));