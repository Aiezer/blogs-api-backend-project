const express = require('express');
const loginRoutes = require('./login.routes');

const router = express.Router();

router.use('/login', loginRoutes);

module.exports = router;
