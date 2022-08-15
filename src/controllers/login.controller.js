const { StatusCodes } = require('http-status-codes');
const { login } = require('../services/login/login.service');

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(StatusCodes.BAD_REQUEST).json({ 
        message: 'Some required fields are missing' });
    }
    const result = await login({ email, password });
    if (result.statusCode === StatusCodes.BAD_REQUEST) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: result.message,
      }); 
}
    return res.status(StatusCodes.OK).json({ token: result.token });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: error.message,
    });
  }
};

module.exports = { loginController };
