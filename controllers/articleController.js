const mongoose = require("mongoose");
const db = require("../models");

module.exports = 
{
  findAll: function(req, res) 
  {
    console.log("Finding all!")
    db.Article
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {
    console.log(req.params.title)
    db.Article
      .remove({"_id": req.params.title})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
