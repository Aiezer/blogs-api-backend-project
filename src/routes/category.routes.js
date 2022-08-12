const express = require('express');
const {
  createCategoryController,
} = require('../controllers/category.controller.js');

const { validateToken } = require('../middlewares/validateToken.middleware.js');

const router = express.Router();

router.post('/', validateToken, createCategoryController);

module.exports = router;
