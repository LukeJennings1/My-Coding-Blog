const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const {Post, UserProfile} = require('./models')
const ejs = require('ejs')
require('dotenv').config(); // allow us to access the secure env file


app = express(); // initialise the express framework

app.listen(3001) // listen for requests on post 3001
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

// The purpose of this project is to simply produce apis that will be consumed by the react websites. Of which, one
// site will consume only the api and the other will have the ability to perform crud actions on the api. 

app.get('/', (req,res) => {
    // res.render('index')
}) 
app.get('/posts', (req,res) => {
    res.set('Access-Control-Allow-Origin', '*'); // this sets up cors for all origin reqeusts (* means all)
    res.json({                                  // if we want to just give access to one oriigin we can put the http request url of
        post1: 'test1',                        // the requester here so for example "http://localhost:3000" etc 
        post2: 'test2',
        post3: 'test3'
    })
})

