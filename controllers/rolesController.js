const mongoose = require("mongoose");
const Role = require("../models/Role");

module.exports = {
    findAll: function(req, res){
        Role.find(req.query, "-__v")
            .then((dbModel) => {
                res.json(dbModel)
            })
            .catch((error) => res.status(422).json(error))
    },
    create: function(req, res, next) {
        Role.create(req.body)
            .then(newRole => {
                req.json(newRole);
            })
            .catch((error) => {
                if (error.code == 11000) {
                  console.log("role already exists");
                  res.status(422).json("role already exists");
                } else {
                  console.log(error);
                  res.status(422).json(error);
                }
              });
    },
    update: function (req, res) {
        console.log("Updating role...");
        Role.findOneAndUpdate({ _id: req.params.id }, req.body)
          .then((dbModel) => {
            res.json(dbModel);
          })
          .catch((err) => res.status(422).json(err));
    },
    remove: function (req, res) {
        Role.findById({ _id: req.params._id })
            .then((dbModel) => dbModel.remove())
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    reset: function(req, res) {
        // make sure to come back and protect this route!
        console.log('resetting roles...');
        const roles = [
            {
                _id: "649b485ce0c1bcc7b066d0fb",
                role:'member'
            }, 
            {
                _id: "649b485ce0c1bcc7b066d0fc",
                role:'reviewer'
            }, 
            {
                _id: "649b485ce0c1bcc7b066d0fd",
                role:'sommelier'
            }, 
            {
                _id: "649b485ce0c1bcc7b066d0fe",
                role:'admin'
            }];
        Role.insertMany(roles)
            .then(dbModel => {
                res.json(dbModel)
            })
            .catch(error => {
                if (error.code == 11000) {
                    console.log("role already exists");
                    res.status(422).json("role already exists");
                } else {
                     res.status(422).json(error)
                }
            })
    }
}