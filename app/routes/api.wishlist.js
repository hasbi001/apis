module.exports = app => {
    const wishlist = require("../controllers/wishlist.controller.js");
  
    var router = require("express").Router();
  
    // Create a new wishlist
    router.post("/", wishlist.create);
  
    // Retrieve all wishlist
    router.get("/", wishlist.findAll);
  
    // Retrieve a single wishlist with id
    router.get("/:id", wishlist.findOne);
  
    // Update a wishlist with id
    router.put("/:id", wishlist.update);
  
    // Delete a wishlist with id
    router.delete("/:id", wishlist.delete);
  
    // Delete all wishlist
    router.delete("/", wishlist.deleteAll);
  
    app.use('/api/wishlist', router);
  };