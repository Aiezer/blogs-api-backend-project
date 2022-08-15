const { StatusCodes } = require('http-status-codes');
const { BlogPost, User, Category } = require('../../database/models');

const getPost = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories' },
    ],
  });
  return post;
};

const updatePost = async (id, data, userId) => {
  const post = await getPost(id);
  if (!post) {
    return {
      statusCode: StatusCodes.NOT_FOUND,
      message: 'Post does not exist',
    };
  }
  if (post.userId !== userId) {
    return {
      statusCode: StatusCodes.UNAUTHORIZED,
      message: 'Unauthorized user',
    };
  }
  const updatedPost = await post.update(data);
  return updatedPost;
};

module.exports = { updatePost };
