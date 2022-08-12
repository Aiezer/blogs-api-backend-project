const express = require('express');
const {
  createCategoryController,
  getAllCategoriesController,
} = require('../controllers/category.controller.js');

const { validateToken } = require('../middlewares/validateToken.middleware.js');

const router = express.Router();

router.post('/', validateToken, createCategoryController);
router.get('/', validateToken, getAllCategoriesController);

module.exports = router;
