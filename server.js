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
