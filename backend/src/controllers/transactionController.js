const Transaction = require('../models/Transaction');
const Account = require('../models/Account');
const createTransactionDTO = require('../dto/createTransactionDTO');

exports.createTransaction = async (req, res) => {
    try {
        const transactionData = createTransactionDTO(req.body);

        if (transactionData.source_account_id) {
            const sourceAccount = await Account.findById(transactionData.source_account_id);
            if (sourceAccount.balance < transactionData.amount) {
                return res.status(400).send({ error: 'Fondos insuficientes en la cuenta de origen' });
            }
            transactionData.source_account_number = sourceAccount.source_account_number;
            
        }

        if (transactionData.destination_account_number) {
            const destinationAccount = await Account.findByAccountNumber(transactionData.destination_account_number);
            if (destinationAccount) 
                transactionData.destination_account_id = destinationAccount.id;
        }

        // Crear la transacción
        const newTransaction = await Transaction.create(transactionData);

        // Actualizar el balance de las cuentas internas involucradas
        if (transactionData.source_account_id) {
            await Account.updateBalance(transactionData.source_account_id, -transactionData.amount);
        }
        if (transactionData.destination_account_id) {
            await Account.updateBalance(transactionData.destination_account_id, transactionData.amount);
        }

        res.status(201).send(newTransaction);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

exports.getTransactionsByAccountId = async (req, res) => {
    try {
        const accountId = req.params.accountId;
        const transactions = await Transaction.findByAccountId(accountId);
        res.status(200).send(transactions);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};