const qbLog = require('qb-log');
const { waterfall } = require('utils');

module.exports = function createTables(db, definitions) {
  return waterfall(definitions.map((def) => () => {
    qbLog.install('Create table', def.tableName);

    return db.schema.createTable(def.tableName, (table) => {
      table.increments('id');
      def.callback(table);
      table.timestamp('created_at');
      table.timestamp('modified_at');
      table.timestamp('deleted_at');
    });
  }))
    .then(() => db);
};
