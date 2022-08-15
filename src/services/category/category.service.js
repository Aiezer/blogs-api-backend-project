const { Category } = require('../../database/models/index');

const createCategory = async (category) => {
    const newCategory = await Category.create(category);
    return newCategory;
};

const getAllCategories = async () => {
    const categories = await Category.findAll();
    return categories;
};

module.exports = { createCategory, getAllCategories };