const routes = require('express').Router();
const db = require("../models");

// Defining methods for the booksController

module.exports = {
  findAll: function(req, res) {
    db.Grocery
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
    create: function(req, res) {
    db.Grocery
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

}

