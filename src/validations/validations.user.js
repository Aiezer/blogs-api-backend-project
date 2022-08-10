const { StatusCodes } = require('http-status-codes');
const { User } = require('../database/models/index');

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  if (!regex.test(String(email).toLowerCase())) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: '"email" must be a valid email',
    });
  }
  const user = await User.findOne({ where: { email } });
    if (user) {
        return res.status(StatusCodes.CONFLICT).json({
            message: 'User already registered',
        });
    }
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: '"password" length must be at least 6 characters long',
    });
  }
  next();
};

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;
  if (displayName.length < 8) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
};

const validateFields = async (req, res, next) => {
  const { displayName, email, password, image } = req.body;
  console.log('iniciou a validacao');
  if (!displayName || !email || !password || !image) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Some required fields are missing',
    });
  }
  next();
};

module.exports = { validateFields, validateEmail, validatePassword, validateDisplayName };
