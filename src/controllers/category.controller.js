const { StatusCodes } = require('http-status-codes');
const { createCategory, getAllCategories } = require('../services/category.service');

const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: '"name" is required' });
    }
    const result = await createCategory({ name });
    return res.status(StatusCodes.CREATED).json(result);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

const getAllCategoriesController = async (req, res) => {
  try {
    const result = await getAllCategories();
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

module.exports = { createCategoryController, getAllCategoriesController };