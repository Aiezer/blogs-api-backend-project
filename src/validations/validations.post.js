const { StatusCodes } = require('http-status-codes');

const validateFields = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Some required fields are missing',
    });
  }
  next();
};

module.exports = { validateFields };
