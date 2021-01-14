/* eslint-disable no-throw-literal */
const fs = require('fs').promises;

const getFileData = (pathToFile) => fs
  .readFile(pathToFile)
  .catch(() => {
    throw ({ message: `Файл ${pathToFile} не найден` });
  })
  .then((data) => {
    try {
      return JSON.parse(data);
    } catch (_) {
      throw ({ message: 'json не валидный' });
    }
  })
  .catch((err) => {
    throw err;
  });

module.exports = getFileData;
