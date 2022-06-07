module.exports = {
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
  };
  
  /*var Sequelize = require('sequelize');
  
  var sequelize = new Sequelize('mycv', 'root', '', {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
      },
  });
  
  var db = {};
  
  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  
  module.exports = db;*/