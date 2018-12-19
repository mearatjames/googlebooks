const router = require("express").Router();
const axios = require("axios");
// Book routes
router.get("/", (req, res) => {
    console.log(req.query.q)
    axios
      .get("https://www.googleapis.com/books/v1/volumes", {params: {q: req.query.q}})
      .then(response => {
        res.send(response.data.items)
      })
      .catch(err => console.log(err));
  });

module.exports = router;
