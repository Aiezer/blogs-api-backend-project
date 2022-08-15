const { StatusCodes } = require('http-status-codes');
const { createPost } = require('../services/post/index');

const createPostController = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const result = await createPost({ title, content, categoryIds, userId: req.user.id });

    if (result.statusCode === StatusCodes.BAD_REQUEST) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: result.message,
      });
    }
    return res.status(StatusCodes.CREATED).json(result);
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message,
    });
  }
};

module.exports = { createPostController };
