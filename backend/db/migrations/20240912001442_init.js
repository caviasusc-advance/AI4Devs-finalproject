async function up(knex) {
    // Creation of the USER table
    await knex.schema.createTable('user', table => {
        table.increments('id').primary();
        table.string('id_type');
        table.string('id_number');
        table.string('name');
        table.string('email').unique();
        table.string('password');
        table.string('phone');
        table.string('address');
        table.date('birth_date');
        table.timestamp('registration_date');
        table.string('status');
        table.timestamp('created');
        table.string('created_by');
        table.timestamp('updated');
        table.string('updated_by');
    });

    // Creation of the ACCOUNT table
    await knex.schema.createTable('account', table => {
        table.increments('id').primary();
        table.string('account_number').unique();
        table.string('account_type');
        table.float('balance');
        table.timestamp('creation_date');
        table.string('status');
        table.integer('user_id').references('id').inTable('user');
        table.timestamp('created');
        table.string('created_by');
        table.timestamp('updated');
        table.string('updated_by');
    });

    // Creation of the TRANSACTION table
    await knex.schema.createTable('transaction', table => {
        table.increments('id').primary();
        table.timestamp('date');
        table.string('type');
        table.float('amount');
        table.string('description');
        table.integer('source_account_id').references('id').inTable('account');
        table.integer('destination_account_id').references('id').inTable('account').nullable();
        table.string('status');
        table.timestamp('created');
        table.string('created_by');
        table.timestamp('updated');
        table.string('updated_by');
    });

    // Creation of the NOTIFICATION table
    await knex.schema.createTable('notification', table => {
        table.increments('id').primary();
        table.string('type');
        table.string('message');
        table.timestamp('send_date');
        table.integer('user_id').references('id').inTable('user');
        table.string('status');
        table.timestamp('created');
        table.string('created_by');
        table.timestamp('updated');
        table.string('updated_by');
    });

    // Creation of the SESSION table
    await knex.schema.createTable('session', table => {
        table.increments('id').primary();
        table.string('token').unique();
        table.timestamp('creation_date');
        table.timestamp('expiration_date');
        table.integer('user_id').references('id').inTable('user');
        table.boolean('terminated_by_user');
        table.timestamp('created');
        table.string('created_by');
        table.timestamp('updated');
        table.string('updated_by');
    });

    // Creation of the SYSTEM_CONFIGURATION table
    await knex.schema.createTable('system_configuration', table => {
        table.increments('id').primary();
        table.string('name');
        table.string('value');
        table.string('description');
        table.timestamp('created');
        table.string('created_by');
        table.timestamp('updated');
        table.string('updated_by');
    });
}

async function down(knex) {
    // Dropping tables in reverse order of creation
    await knex.schema.dropTableIfExists('system_configuration');
    await knex.schema.dropTableIfExists('session');
    await knex.schema.dropTableIfExists('notification');
    await knex.schema.dropTableIfExists('transaction');
    await knex.schema.dropTableIfExists('account');
    await knex.schema.dropTableIfExists('user');
}

exports.up = up;
exports.down = down;