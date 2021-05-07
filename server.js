const express = require("express");
const fs = require('fs');
const path = require('path');

//This tells node that we want to create an express server.
const app = express();
//Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080; 
//// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





app.use(express.static("public"));
//This is a route to the index.html. Where the user goes initially. 
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})
//This is a route to the notes.html. 
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
})









//This code starts our server ~
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
  