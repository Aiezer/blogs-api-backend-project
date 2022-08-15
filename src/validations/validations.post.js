const { StatusCodes } = require('http-status-codes');

const validateFieldsForCreate = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Some required fields are missing',
    });
  }
  next();
};

const validateFieldsForUpdate = (req, res, next) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Some required fields are missing',
    });
  }
  next();
};

module.exports = { validateFieldsForCreate, validateFieldsForUpdate };
