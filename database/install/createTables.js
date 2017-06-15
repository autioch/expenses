const qbLog = require('qb-log');
const { waterfall } = require('utils');

const MAX_VAR = 255; // eslint-disable-line no-magic-numbers
const LABEL = 50; // eslint-disable-line no-magic-numbers

module.exports = function createTables(db, definitions) {
  return waterfall(definitions.map((def) => () => {
    qbLog.install('Create table', def.name);

    return db.schema.createTable(def.name, (table) => {
      table.increments('id');
      table.string('name', LABEL);
      table.string('comment', MAX_VAR);

      if (def.setup) {
        def.setup(table);
      }

      table.timestamp('created_at');
      table.timestamp('modified_at');
      table.timestamp('deleted_at');
    });
  }))
    .then(() => db);
};
