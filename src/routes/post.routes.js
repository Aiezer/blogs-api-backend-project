const express = require('express');
const { validateToken } = require('../middlewares/validateToken.middleware');
const { validateFields } = require('../validations/validations.post');

const router = express.Router();

const { createPostController } = require('../controllers/post.controller');

router.post('/', validateToken, validateFields, createPostController);

module.exports = router;