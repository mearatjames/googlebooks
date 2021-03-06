const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book.create(req.body, function(err, data) {
      if (err) return err
      res.json(data)
    })
  },
  remove: function(req, res) {
    db.Book
      .findOneAndDelete({ _id: req.params.id }, function(err, data) {
        if (err) console.log(err)
        res.json(data)
      })
  }
};
