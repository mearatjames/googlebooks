# Google Books

A React application with google books api which let users easily search for books.

## Built With

* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [React](https://reactjs.org/) - Javascript library for UI
* [Express](https://expressjs.com/) - Backend web framework for Node.js
* [Mongoose](https://mongoosejs.com/) - MongoDB object modeling for Node.js
* [Material-UI](https://material-ui.com/) - React components that implement Google's Material Design
* [Socket.io](https://socket.io/) - Realtime, bi-directional communication between web clients and servers


## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm i
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
