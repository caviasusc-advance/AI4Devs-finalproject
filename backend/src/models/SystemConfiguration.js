const knex = require('../db/knex');

class SystemConfiguration {
    static async findByTypeAndName(type, name) {
        return knex('system_configuration')
            .where({ type, name })
            .first();
    }

    static async findByTypeAndValue(type, value) {
        return knex('system_configuration')
            .where({ type, value })
            .first();
    }

    static async findByType(type) {
        return knex('system_configuration')
            .select('name', 'value', 'description')
            .where({ type });
    }
}

module.exports = SystemConfiguration;