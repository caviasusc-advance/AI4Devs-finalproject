/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('account').del();
    await knex('user').del();
    await knex('transaction').del();
    await knex('system_configuration').del();
  
    // Inserts seed entries for user
    await knex('user').insert([
      { id_type: 'CC', id_number: '123456', name: 'John Doe', email: 'john@example.com', password: '$2b$10$QMeIaIBz.796yEf6zVkqre8WYp4hIJn4qUYeZE07CRKSLZXORqr3G', phone: '1234567890', address: '123 Main St', birth_date: '1990-01-01', created_by: 'seed'},
      { id_type: 'CC', id_number: '654321', name: 'Jane Smith', email: 'jane@example.com', password: '$2b$10$QMeIaIBz.796yEf6zVkqre8WYp4hIJn4qUYeZE07CRKSLZXORqr3G', phone: '0987654321', address: '456 Elm St', birth_date: '1992-02-02', created_by: 'seed'},
      { id_type: 'CC', id_number: '112233', name: 'Alice Johnson', email: 'alice@example.com', password: '$2b$10$QMeIaIBz.796yEf6zVkqre8WYp4hIJn4qUYeZE07CRKSLZXORqr3G', phone: '1122334455', address: '789 Oak St', birth_date: '1994-03-03', created_by: 'seed'},
    ]);
  
    // Inserts seed entries for account
    await knex('account').insert([
      { account_number: '123456789012', account_type: 'A', balance: 1000, user_id: 1, created_by: 'seed'},
      { account_number: '234567890123', account_type: 'C', balance: 2000, user_id: 2, created_by: 'seed'},
      { account_number: '345678901234', account_type: 'A', balance: 3000, user_id: 3, created_by: 'seed'},
    ]);

    // Inserts seed entries for transaction
    // await knex('transaction').insert([
    //   { account_number: '123456789012', account_type: 'savings', balance: 1000, user_id: 1},
    //   { account_number: '234567890123', account_type: 'checking', balance: 2000, user_id: 2},
    //   { account_number: '345678901234', account_type: 'savings', balance: 3000, user_id: 3}
    // ]);

    // Inserts seed entries for account
    await knex('system_configuration').insert([
      { type: 'documentType', name: 'Cedula de ciudadanía', value: 'CC', created_by: 'initialValues'},
      { type: 'documentType', name: 'Documento Nacional de Identidad', value: 'DNI', created_by: 'initialValues'},
      { type: 'accountType', name: 'Ahorros', value: 'A', created_by: 'initialValues'},
      { type: 'accountType', name: 'Corriente', value: 'C', created_by: 'initialValues'}
    ]);
  };