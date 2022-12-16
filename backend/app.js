const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const {Post, UserProfile} = require('./models')
const ejs = require('ejs')
require('dotenv').config(); // allow us to access the secure env file


app = express(); // initialise the express framework

app.listen(3000) // listen for requests on post 3000
app.set('view engine', 'ejs')
app.use(express.static('/Users/mac1/Node.JS/My-Coding-Blog/public'))


let databaseURI = process.env.DBURI
mongoose.set('strictQuery', false)
mongoose.connect(databaseURI, { useUnifiedTopology: true, useNewUrlParser: true });
const database = mongoose.connection
database.on("error", console.error.bind(console, "mongo connection error")); 

// const  newPost = new Post({ THIS IS THE SCHEMA FOR BLOG POSTS
//     blogTitle: 'mrguitar',
//     blogBody: 'this is the blog body'
// })
// newPost.save()

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/posts', (req,res) => {
    res.json({
        post1: 'test1',
        post2: 'test2',
        post3: 'test3'
    })
})

