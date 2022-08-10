const express = require('express');
const {
  validateFields,
  validateEmail,
  validatePassword,
  validateDisplayName,
} = require('../validations/validation.user.js');
const { createUserController } = require('../controllers/user.controller.js');

const router = express.Router();

router.post(
  '/',
  validateFields,
  validatePassword,
  validateDisplayName,
  validateEmail,
  createUserController,
);

module.exports = router;
