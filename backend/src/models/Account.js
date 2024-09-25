const knex = require('../db/knex');

class Account {
    static async create(accountData) {
        const [account] = await knex('account').insert(accountData).returning('*');
        return account;
    }

    static async findByAccountNumber(account_number) {
        return knex('account').where({ account_number }).first();
    }
}

module.exports = Account;
