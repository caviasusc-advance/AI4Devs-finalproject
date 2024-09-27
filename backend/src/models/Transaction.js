const knex = require('../db/knex');

class Transaction {
    static async create(transactionData) {
        const [transaction] = await knex('transaction').insert(transactionData).returning('*');
        return transaction;
    }
}

module.exports = Transaction;