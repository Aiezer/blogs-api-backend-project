const { StatusCodes } = require('http-status-codes');
const { User } = require('../../database/models/index');
const { createToken } = require('../jwt.service');

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });
  if (!user) {
    return {
      message: 'Invalid fields',
      statusCode: StatusCodes.BAD_REQUEST,
    };
  }
  return {
    token: createToken(user),
    statusCode: StatusCodes.OK,
  };
};

module.exports = { login };
