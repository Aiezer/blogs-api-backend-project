const express = require('express');
const { validateToken } = require('../middlewares/validateToken.middleware');
const { validateFields } = require('../validations/validations.post');

const router = express.Router();

const {
  createPostController,
  getAllPostsController,
  getPostByIdController,
} = require('../controllers/post.controller');

router.post('/', validateToken, validateFields, createPostController);
router.get('/', validateToken, getAllPostsController);
router.get('/:id', validateToken, getPostByIdController);

module.exports = router;
