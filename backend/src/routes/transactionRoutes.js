const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.post('/transactions', transactionController.createTransaction);

router.get('/accounts/:accountId/transactions', transactionController.getTransactionsByAccountId)

module.exports = router;