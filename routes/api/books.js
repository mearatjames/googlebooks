// const router = require("express").Router();
// const booksController = require("../../controllers/booksController");
// const axios = require("axios");

// // Matches with "/api/books"
// // router.route("/")
// //   .post(booksController.create);

// // Matches with "/api/books/:id"
// // router
// //   .route("/:id")
// //   .get(booksController.findById)
// //   .put(booksController.update)
// //   .delete(booksController.remove);

//   router.get("/", (req, res) => {
//     console.log('here')
//     axios
//       .get("https://www.googleapis.com/books/v1/volumes?q=", { params: req.query })
//       .then(({ data: { results } }) => res.json(results))
//       .catch(err => res.status(422).json(err));
//   });
  

// module.exports = router;
