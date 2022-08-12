const express = require('express');
const {
  validateFields,
  validateEmail,
  validatePassword,
  validateDisplayName,
} = require('../validations/validations.user.js');
const {
  createUserController,
  getAllUsersController,
  getByIdController,
  deleteAllUsersController,
} = require('../controllers/user.controller.js');
const { validateToken } = require('../middlewares/validateToken.middleware.js');

const router = express.Router();

router.post(
  '/',
  validateFields,
  validatePassword,
  validateDisplayName,
  validateEmail,
  createUserController,
);
router.get('/', validateToken, getAllUsersController);
router.get('/:id', validateToken, getByIdController);
router.delete('/', deleteAllUsersController);

module.exports = router;
