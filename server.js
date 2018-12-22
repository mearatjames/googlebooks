const express = require("express");
const socket = require('socket.io')
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Start the API server
let server = app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

let io = socket(server)

io.on('connection', socket => {
  console.log('Made socket connection')
  socket.on('notification', function(msg) {
    io.emit('notification', msg)
  })
  socket.on('disconnet', function() {
    console.log('User disconnected')
  })
})