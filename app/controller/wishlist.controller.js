const db = require("../models");
const Identitas = db.identitases;
const Op = db.Sequelize.Op;

// Create and Save a new Identitas
exports.create = (req, res) => {
  // Validate request
  if (!req.body.full_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Identitas
  const identitas = {
    full_name: req.body.full_name,
    alamat: req.body.alamat,
    no_hp: req.body.no_hp,
    email: req.body.email,
    umur: req.body.umur
  };

  // Save Identitas in the database
  Identitas.create(identitas)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Identitas."
      });
    });
};

// Retrieve all Identitas from the database.
exports.findAll = (req, res) => {
  const full_name = req.query.full_name;
  var condition = full_name ? { full_name: { [Op.like]: `%${full_name}%` } } : null;

  Identitas.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving identitas."
      });
    });
};

// Find a single Identitas with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Identitas.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Identitas with id=" + id
      });
    });
};

// Update a Identitas by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Identitas.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Identitas was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Identitas with id=${id}. Maybe Identitas was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Identitas with id=" + id
      });
    });
};

// Delete a Identitas with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Identitas.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Identitas was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Identitas with id=${id}. Maybe Identitas was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Identitas with id=" + id
      });
    });
};

// Delete all Identitass from the database.
exports.deleteAll = (req, res) => {
  Identitas.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Identitas were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all identitas."
      });
    });
};

// 