const { StatusCodes } = require('http-status-codes');
const { getPostById } = require('./getPosts.service');

const deletePost = async (id, userId) => {
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
  await post.destroy();
  return {
    statusCode: StatusCodes.NO_CONTENT,
  };
};

module.exports = { deletePost };
