const db = require("../models");
const Wishlist = db.wishlist;

// Create and Save a new Wishlist
exports.create = (req, res) => {
  // Validate request
  if (!req.body.article_id) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Wishlist
  const wishlist = new Wishlist({
    article_id: req.body.article_id
  });

  // Save Wishlist in the database
  wishlist.save(wishlist)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Wishlist."
      });
    });
};

// Retrieve all Wishlist from the database.
exports.findAll = (req, res) => {
  const wishlist = req.query.article_id;
  var condition = article_id ? { article_id: { $regex: new RegExp(article_id), $options: "i" } } : {};

  Wishlist.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving wishlist."
      });
    });
};

// Find a single Wishlist with an article_id
exports.findOne = (req, res) => {
  const id = req.params.article_id;

  Wishlist.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Wishlist with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Wishlist with Article_id=" + id
      });
    });
};

// Update a Wishlist by the article_id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.article_id;
  
  Wishlist.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Wishlist with id=${id}. Maybe Wishlist was not found!`
        });
      } else res.send({ message: "Wishlist was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Wishlist with article_id=" + id
      });
    });
};

// Delete a Wishlist with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.article_id;

  Wishlist.findByIdAndRemove({
    where: { article_id: id }
  })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Wishlist with id=${id}. Maybe Wishlist was not found!`
        });
      } else {
        res.send({
          message: "Wishlist was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Wishlist with article_id=" + id
      });
    });
};

// Delete all Wishlist from the database.
exports.deleteAll = (req, res) => {
  Wishlist.deleteMany({})
    .then(data => {
      res.send({ message: `${data.deletedCount} Wishlist were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Wishlist."
      });
    });
};

// 