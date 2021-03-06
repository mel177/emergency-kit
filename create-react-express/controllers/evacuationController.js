const db = require("../models");

// Defining methods for the evacuationController
module.exports = {
  findAll: function(req, res) {
    //console.log("INSIDE CONTROLLER FINDALL FUNCTION -------------------------")
    db.Evacuation
      .find(req.query)
      .then(dbModel => {
        console.log("Inside QUERY RESPONSE -------")
        console.log("DATA BACK: ",dbModel)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Evacuation
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Evacuation
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Evacuation
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Evacuation
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
