const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.get('/login.html', loginController.login);
router.get('/menuhome.html', (req, res) => {
    res.sendFile(__dirname + '/../src/views/menuhome.html');
});

module.exports = router;