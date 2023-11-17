const express = require('express');
const LoginController = require('../controllers/loginController');
const loginController = require('../controllers/loginController');

const router = express.Router();

router.get('views/login', loginController.login);

module.exports = router;