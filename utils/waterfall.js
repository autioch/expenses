const Bluebird = require('bluebird');

module.exports = function waterfall(tasksArray, initialPromise = Bluebird.resolve()) {
  return tasksArray.reduce((prevPromise, task) => prevPromise.then(task), initialPromise);
};
