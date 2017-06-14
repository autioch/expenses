const { fs } = require('utils');
const path = require('path');
const qbLog = require('qb-log');

qbLog({
  uninstall: {
    prefix: 'UNINSTALL',
    formatter: qbLog._chalk.cyan // eslint-disable-line no-underscore-dangle
  },
  error: {
    prefix: 'ERROR',
    formatter: qbLog._chalk.red // eslint-disable-line no-underscore-dangle
  }
});

module.exports = function uninstall() {
  const configPath = path.join(__dirname, '..', 'config.json');

  return fs
    .readFileAsync(configPath, 'utf-8')
    .then((fileContent) => JSON.parse(fileContent))
    .then((config) => fs.unlinkAsync(config.filename).then(() => fs.unlinkAsync(configPath)))
    .then(() => qbLog.uninstall('Uninstall complete.'))
    .catch((err) => qbLog.error('Uninstall failed.', err.message));
};
