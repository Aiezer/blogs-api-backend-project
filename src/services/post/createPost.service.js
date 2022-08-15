// const Sequelize = require('sequelize');
const { StatusCodes } = require('http-status-codes');
const { BlogPost, PostCategory, Category } = require('../../database/models');

const createPost = async ({ title, content, categoryIds, userId }) => {
  const verifyCategoryIds = await Category.findOne({ where: { id: categoryIds } });
  if (!verifyCategoryIds) {
    return { message: '"categoryIds" not found', statusCode: StatusCodes.BAD_REQUEST };
  }
  const post = await BlogPost.create({
    title,
    content,
    userId,
    published: Date.now(),
    updated: Date.now(),
  });
  categoryIds.forEach(async (categoryId) => {
    await PostCategory.create({
      postId: post.id,
      categoryId,
    });
  });
  return post.dataValues;
};

module.exports = { createPost };