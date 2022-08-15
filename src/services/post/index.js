const { createPost } = require('./createPost.service');
const { getAllPosts, getPostById } = require('./getPosts.service');

module.exports = { createPost, getAllPosts, getPostById };