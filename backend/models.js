const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Blogpost = new Schema({
    blogTitle: {type: String, required: true},
    blogSubTitle: {type: String, required: true},
    blogBody: {type: String, required: true}
})

const User = new Schema({
    userName: {type: String, required: true},
    passWord: {type: String, required: true}
})

const Comment = new Schema({
    username: {type: String, require: true},
    message: {type: String, require: true},
    URLid: {type: String, require: true},
}, {timestamps: true})

const BlogComment = mongoose.model('BlogComment', Comment)
const Post = mongoose.model('BlogPost', Blogpost);
const UserProfile = mongoose.model('AdminLogin', User);

module.exports = {Post: Post, UserProfile: UserProfile, BlogComment: BlogComment}