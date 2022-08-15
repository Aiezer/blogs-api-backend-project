const { StatusCodes } = require('http-status-codes');
const {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
} = require('../services/post/index');

const createPostController = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const result = await createPost({
      title,
      content,
      categoryIds,
      userId: req.user.id,
    });
    if (result.statusCode === StatusCodes.BAD_REQUEST) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: result.message,
      });
    } return res.status(StatusCodes.CREATED).json(result);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message,
    });
  }
};

const getAllPostsController = async (req, res) => {
  try {
    const result = await getAllPosts();
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message,
    });
  }
};

const getPostByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getPostById(id);
    if (!result) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: 'Post does not exist',
      });
    }
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message,
    });
  }
};

const updatePostController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const result = await updatePost(id, { title, content }, req.user.id);
    if (
      result.statusCode === StatusCodes.NOT_FOUND
      || result.statusCode === StatusCodes.UNAUTHORIZED
    ) {
      return res.status(result.statusCode).json({
        message: result.message,
      });
    }
    return res.status(StatusCodes.OK).json(result);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message,
    });
  }
};

module.exports = {
  createPostController,
  getAllPostsController,
  getPostByIdController,
  updatePostController,
};
