const knex = require('../db/knex');

class Transaction {
    static async create(transactionData) {
        const [transaction] = await knex('transaction').insert(transactionData).returning('*');
        return transaction;
    }

    
    static async findByAccountId(accountId) {
        return knex('transaction')
            .select('date', 'description', 'amount', 'source_account_id', )
            .where({ source_account_id: accountId })
            .orWhere({ destination_account_id: accountId })
            .orderBy('date', 'desc')
            .then(transactions => transactions.map(transaction => ({
                amount: transaction.source_account_id == accountId ? -transaction.amount : transaction.amount,
                date: transaction.date,
                description: transaction.description,
            })));
    }
}

module.exports = Transaction;