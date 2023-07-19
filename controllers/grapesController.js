const mongoose = require('mongoose');
const GrapeVarietal = require('../models/GrapeVarietal');

module.exports = {
  find: function (req, res) {
    GrapeVarietal.find(req.query, "-__v")
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((error) => res.status(422).json(error));
  },
  findById: function (req, res) {
    GrapeVarietal.findById(req.params.id, "-__v")
      .then((grape) => {
        if (!grape || !grape._id) {
          res.status(404).send();
        } else {
          res.json(grape);
        }
      })
      .catch((error) => res.status(404).json(error));
  },
  create: function (req, res, next) {
    GrapeVarietal.create(req.body)
      .then((newRole) => {
        res.json(newRole);
      })
      .catch((error) => {
        if (error.code == 11000) {
          console.log("grape already exists");
          res.status(422).json("grape already exists");
        } else {
          console.log(error);
          res.status(422).json(error);
        }
      });
  },
  update: function (req, res) {
    GrapeVarietal.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    GrapeVarietal.findById({ _id: req.params._id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};