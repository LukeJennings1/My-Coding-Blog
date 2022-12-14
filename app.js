const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
require('dotenv').config(); // allow us to access the secure env file

app = express(); // initialise the express framework

app.listen(3000) // listen for requests on post 3000

let databaseURI = process.env.DBURI
mongoose.set('strictQuery', false)
mongoose.connect(databaseURI, { useUnifiedTopology: true, useNewUrlParser: true });
const database = mongoose.connection
database.on("error", console.error.bind(console, "mongo connection error")); 