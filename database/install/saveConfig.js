const { fs } = require('utils');
const path = require('path');
const qbLog = require('qb-log');

module.exports = function saveConfig(db, dbPath) {
  const configPath = path.join(__dirname, '..', 'config.json');
  const config = {
    filename: dbPath
  };

  qbLog.install('Save configuration', configPath);

  return fs
    .writeFileAsync(configPath, JSON.stringify(config, null, '  '), 'utf-8')
    .then(() => db);
};
