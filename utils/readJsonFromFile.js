const fs = require('fs').promises;

const getFileData = (pathToFile) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  fs
    .readFile(pathToFile)
    .then((data) => JSON.parse(data))
    .catch((err) => console.log(err));

module.exports = getFileData;
