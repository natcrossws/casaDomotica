const express = require('express');
const router = express.Router();

const db = require('../app');  // Asegúrate de poner la ruta correcta a tu archivo app.js
const customerController = require('../controllers/customerController');

router.get('/', customerController.list);

module.exports = router;
