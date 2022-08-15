const { createPost } = require('./createPost.service');
const { getAllPosts, getPostById } = require('./getPosts.service');
const { updatePost } = require('./updatePost.service');

module.exports = { createPost, getAllPosts, getPostById, updatePost };