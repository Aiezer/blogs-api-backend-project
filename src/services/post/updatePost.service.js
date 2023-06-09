const { StatusCodes } = require('http-status-codes');
const { getPostById } = require('./getPosts.service');

const updatePost = async (id, data, userId) => {
  const post = await getPostById(id);
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
