const express = require('express');
const { validateToken } = require('../middlewares/validateToken.middleware');
const {
  validateFieldsForCreate,
  validateFieldsForUpdate,
} = require('../validations/validations.post');

const router = express.Router();

const {
  createPostController,
  getAllPostsController,
  getPostByIdController,
  updatePostController,
} = require('../controllers/post.controller');

router.post('/', validateToken, validateFieldsForCreate, createPostController);
router.get('/', validateToken, getAllPostsController);
router.get('/:id', validateToken, getPostByIdController);
router.put(
  '/:id',
  validateToken,
  validateFieldsForUpdate,
  updatePostController,
);

module.exports = router;
