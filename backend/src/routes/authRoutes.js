const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login/user', authController.logInUser);

router.post('/logout/user', authController.logOutUser);

module.exports = router;