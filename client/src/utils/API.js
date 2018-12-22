import axios from "axios";
import openSocket from 'socket.io-client'

const socket = openSocket()


export default {
  // Search books
  searchBooks: function(query) {
    return axios.get("/api/", { params: { q: query } });
  },
  // Gets all books
  getBooks: function() {
    return axios.get("/api/saved/");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api", bookData);
  },
  // Socket emitting when user saved a book
  notification: function(savedBook) {
    socket.emit('notification', savedBook)
  }
  
};
