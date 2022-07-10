module.exports = app => {
    const book = require("../controllers/book.controller.js");
  
    var router = require("express").Router();
    
    router.get("/:keyword", book.findOne);
  
    app.use('/api/book', router);
  };