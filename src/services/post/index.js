const { createPost } = require('./createPost.service');
const { getAllPosts, getPostById } = require('./getPosts.service');
const { updatePost } = require('./updatePost.service');
const { deletePost } = require('./deletePost.service');
const { searchPost } = require('./searchPost.service');

module.exports = { createPost, getAllPosts, getPostById, updatePost, deletePost, searchPost };