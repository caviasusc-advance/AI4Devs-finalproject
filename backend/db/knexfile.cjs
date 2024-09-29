// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const conf = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host:     process.env.DB_HOST,
      port:     process.env.DB_PORT,
      // ssl: true
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: 'migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

module.exports = conf