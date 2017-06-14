const config = require('./config');
const knex = require('knex');

module.exports = knex({
  client: 'sqlite3',
  connection: {
    filename: config.filename
  }
});
