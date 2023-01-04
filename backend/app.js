const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const {Post, UserProfile, BlogComment} = require('./models')
const ejs = require('ejs')
const cors = require('cors')
require('dotenv').config(); // allow us to access the secure env file
const passport = require('passport');
const LocalStrategy = require('passport-local');
const PORT = process.env.PORT || 3001;


app = express(); // initialise the express framework
app.use(cors())

app.listen(PORT) // listen for requests on post 3001
app.set('view engine', 'ejs')
app.use(express.static('/Users/mac1/Node.JS/My-Coding-Blog/public'))
app.use(express.urlencoded())
app.use(express.json())




let databaseURI = process.env.DBURI
mongoose.set('strictQuery', false)
mongoose.connect(databaseURI, { useUnifiedTopology: true, useNewUrlParser: true });
const database = mongoose.connection
database.on("error", console.error.bind(console, "mongo connection error")); 

//  const  newPost = new Post({ 
//         blogTitle: 'new title4',
//         blogSubTitle: 'this is the sub title4',
//         blogBody:   'this is the blog body4'
//  });
//  newPost.save();

// The purpose of this project is to simply produce apis that will be consumed by the react websites. Of which, one
// site will consume only the api and the other will have the ability to perform crud actions on the api. 

app.get('/', (req,res) => {
    // res.render('index')
}) 
app.get('/posts', (req,res) => { // for fetching articles
    res.set('Access-Control-Allow-Origin', '*'); // this sets up cors for all origin reqeusts (* means all)
    // res.database.find(blogPosts)
    Post.find().then((result) => {res.json(result)})

});
app.post('/newarticle', (req,res) => {
    console.log(req.body)
    const newArticle = new Post({
        blogTitle: req.body.BlogTitle,
        blogSubTitle: req.body.BlogSubTitle,
        blogBody: req.body.BlogBody
    })
    newArticle.save();
})
app.post('/delete', (req, res) => {
    console.log(req.body)
    Post.deleteOne({_id: req.body.id}).then(() => {res.sendStatus(200)})
})
app.post('/deletecomment', (req, res) => {
    console.log(req.body)
    BlogComment.deleteOne({_id: req.body.id}).then(() => {res.sendStatus(200)})
})

app.post('/blogComment', (req, res) => {
    console.log(req.body)
    const add = new BlogComment({
        username: req.body.username,
        message: req.body.message,
        URLid: req.body.URLid
    })
    add.save();
})
app.get('/comments', (req,res) => {
    res.set('Access-Control-Allow-Origin', '*'); // this sets up cors for all origin reqeusts (* means all)
    BlogComment.find().then((result) => {res.json(result), console.log(result)})
})
