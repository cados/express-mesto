const fs = require('fs').promises;

const getFileData = (pathToFile) =>
  fs
    .readFile(pathToFile)
    .then((data) => JSON.parse(data))
    .catch((err) => console.log(err));

module.exports = getFileData;
