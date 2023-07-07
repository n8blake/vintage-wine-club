const mongoose = require("mongoose");
const WineNoteCategory = require('../models/WineNoteCategory');

module.exports = {
    find: function(req, res){
        WineNoteCategory.find(req.query, "-__v")
            .then((dbModel) => {
                res.json(dbModel)
            })
            .catch((error) => res.status(422).json(error))
    },
    create: function(req, res, next) {
        WineNoteCategory.create(req.body)
            .then(newItem => {
                res.json(newItem);
            })
            .catch((error) => {
                if (error.code == 11000) {
                  res.status(422).json("wine note category already exists");
                } else {
                  console.log(error);
                  res.status(422).json(error);
                }
              });
    },
    update: function (req, res) {
        console.log("updating");
        console.log(req.body)
        WineNoteCategory.findOneAndUpdate({ _id: req.params.id }, req.body)
          .then((dbModel) => {
            res.json(dbModel);
          })
          .catch((err) => res.status(422).json(err));
    },
    remove: function (req, res) {
        WineNoteCategory.findById({ _id: req.params._id })
            .then((dbModel) => dbModel.remove())
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
}