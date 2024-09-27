/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('account').del();
    await knex('user').del();
  
    // Inserts seed entries for user
    await knex('user').insert([
      {id: 1, id_type: 'CC', id_number: '123456', name: 'John Doe', email: 'john@example.com', password: 'password123', phone: '1234567890', address: '123 Main St', birth_date: '1990-01-01', created_by: 'seed'},
      {id: 2, id_type: 'CC', id_number: '654321', name: 'Jane Smith', email: 'jane@example.com', password: 'password123', phone: '0987654321', address: '456 Elm St', birth_date: '1992-02-02', created_by: 'seed'},
      {id: 3, id_type: 'CC', id_number: '112233', name: 'Alice Johnson', email: 'alice@example.com', password: 'password123', phone: '1122334455', address: '789 Oak St', birth_date: '1994-03-03', created_by: 'seed'},
    ]);
  
    // Inserts seed entries for account
    await knex('account').insert([
      {id: 1, account_number: '123456789012', account_type: 'A', balance: 1000, user_id: 1, created_by: 'seed'},
      {id: 2, account_number: '234567890123', account_type: 'C', balance: 2000, user_id: 2, created_by: 'seed'},
      {id: 3, account_number: '345678901234', account_type: 'A', balance: 3000, user_id: 3, created_by: 'seed'},
    ]);

    // Inserts seed entries for account
    // await knex('transaction').insert([
    //   {id: 1, account_number: '123456789012', account_type: 'savings', balance: 1000, user_id: 1},
    //   {id: 2, account_number: '234567890123', account_type: 'checking', balance: 2000, user_id: 2},
    //   {id: 3, account_number: '345678901234', account_type: 'savings', balance: 3000, user_id: 3}
    // ]);

    // Inserts seed entries for account
    await knex('system_configuration').insert([
      {id: 1, type: 'documentType', name: 'Cedula de ciudadanía', value: 'CC', created_by: 'initialValues'},
      {id: 2, type: 'documentType', name: 'Documento Nacional de Identificación', value: 'DNI', created_by: 'initialValues'},
      {id: 3, type: 'accountType', name: 'Ahorros', value: 'A', created_by: 'initialValues'},
      {id: 4, type: 'accountType', name: 'Corriente', value: 'C', created_by: 'initialValues'}
    ]);
  };