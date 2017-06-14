const path = require('path');
const tables = require('./tables');
const createTables = require('./createTables');
const createDatabase = require('./createDatabase');
const saveConfig = require('./saveConfig');
const { waterfall } = require('utils');
const qbLog = require('qb-log');

qbLog({
  install: {
    prefix: 'INSTALL',
    formatter: qbLog._chalk.cyan // eslint-disable-line no-underscore-dangle
  },
  error: {
    prefix: 'ERROR',
    formatter: qbLog._chalk.red // eslint-disable-line no-underscore-dangle
  }
});

module.exports = function install() {
  const dbPath = path.join(__dirname, 'db.sqlite');

  return createDatabase(dbPath)
    .then((db) => {
      const steps = [
        () => createTables(db, tables),
        () => saveConfig(db, dbPath)
      ];

      return waterfall(steps).finally(db.destroy);
    })
    .then(() => qbLog.install('Complete.'))
    .catch((err) => qbLog.error('Installation failed', err.message));
};
