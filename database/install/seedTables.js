const qbLog = require('qb-log');
const { waterfall } = require('utils');
const Bluebird = require('bluebird');

module.exports = function seedTables(db, definitions) {
  return waterfall(definitions.map((def) => () => {
    if (!def.rows || !def.rows.length) {
      return Bluebird.resolve();
    }

    /* TODO for batch inserts we need to solve foregin keys */
    // https://github.com/tgriesser/knex/issues/744
    // let references = {};
    // if (def.references && def.references.length) {
    //   references = def.references.reduce((refDict, refName) => {
    //     refDict[refName] = db.select('id').from(refName).pluck('id');
    //
    //     return refDict;
    //   }, {});
    // }

    qbLog.install('Seed table', def.name);

    return db.batchInsert(def.name, def.rows);
  }))
    .then(() => db);
};
