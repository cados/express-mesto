const fs = require('fs').promises;

const getFileData = (pathToFile) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  fs
    .readFile(pathToFile)
    .catch(() => {
      // eslint-disable-next-line no-throw-literal
      throw `file ${pathToFile} not found`;
    })
    .then((data) => {
      try {
        return JSON.parse(data);
      } catch (_) {
        // eslint-disable-next-line no-throw-literal
        throw 'json is not valid';
      }
    })
    .catch((err) => {
      throw err;
    });

module.exports = getFileData;
