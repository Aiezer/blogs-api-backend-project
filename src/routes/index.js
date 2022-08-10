const express = require('express');
const loginRoutes = require('./login.routes');
const userRoutes = require('./user.routes');

const router = express.Router();

router.use('/login', loginRoutes);
router.use('/user', userRoutes);

module.exports = router;