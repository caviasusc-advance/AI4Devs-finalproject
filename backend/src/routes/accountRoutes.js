const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.post('/accounts', accountController.createAccount);

router.get('/users/:id/accounts', accountController.getAccountsByUserId); // Nueva ruta

module.exports = router;