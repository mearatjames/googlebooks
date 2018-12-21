import axios from "axios";

export default {
  // Search books
  searchBooks: function(query) {
    return axios.get("/api/", { params: { q: query } });
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/saved/");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api", bookData);
  }
};
