const mongoose = require("mongoose");
const WineNote = require('../models/WineNote');

module.exports = {
    find: function(req, res){
        WineNote.find(req.query, "-__v")
            .populate(
                { 
                  path:'category', 
                  select: '-__v'
                }
            )
            .then((dbModel) => {
                res.json(dbModel)
            })
            .catch((error) => res.status(422).json(error))
    },
    create: function(req, res, next) {
        WineNote.create(req.body)
            .then(newItem => {
                req.json(newItem);
            })
            .catch((error) => {
                if (error.code == 11000) {
                  res.status(422).json("wine note already exists");
                } else {
                  console.log(error);
                  res.status(422).json(error);
                }
              });
    },
    update: function (req, res) {
        WineNote.findOneAndUpdate({ _id: req.params.id }, req.body)
          .then((dbModel) => {
            res.json(dbModel);
          })
          .catch((err) => res.status(422).json(err));
    },
    remove: function (req, res) {
        WineNote.findById({ _id: req.params._id })
            .then((dbModel) => dbModel.remove())
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
}