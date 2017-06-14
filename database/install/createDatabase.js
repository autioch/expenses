const knex = require('knex');
const Bluebird = require('bluebird');
const qbLog = require('qb-log');

module.exports = function createDatabase(dbPath) {
  qbLog.install('Create database', dbPath);
  const db = knex({
    client: 'sqlite3',
    connection: {
      filename: dbPath
    },
    useNullAsDefault: true
  });

  return Bluebird.resolve(db);
};
