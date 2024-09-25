const knex = require('../db/knex');

class User {
    static async create(userData) {
        const [user] = await knex('user').insert(userData).returning('*');
        return user;
    }

    static async findByIdTypeAndIdNumber(id_type, id_number) {
        return knex('user').where({ id_type, id_number }).first();
    }
}

module.exports = User;
