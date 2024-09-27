const knex = require('../db/knex');

class Account {
    static async create(accountData) {
        const [account] = await knex('account').insert(accountData).returning('*');
        return account;
    }

    static async findByAccountNumber(account_number) {
        return knex('account').where({ account_number }).first();
    }

    static async findByUserId(user_id) {
        return knex('account')
            .select('id','account_number', 'account_type', 'balance', 'creation_date', 'status')
            .where({ user_id }).orderBy('created', 'desc');
    }

    static async findById(id) {
        return knex('account').where({ id }).first();
    }

    static async updateBalance(id, amount) {
        await knex('account')
            .where({ id })
            .increment('balance', amount);
    }

}

module.exports = Account;
