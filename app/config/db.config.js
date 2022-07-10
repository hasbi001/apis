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

const mongodb = require("mongodb").MongoClient;

mongodb.connect('mongodb://localhost:27017/book', function (err, db) {
  if (err) throw err;
  console.log("Database connected!");
});