const logImg = require('./../core');

const args = process.argv;
const filePath = args[2];

module.exports = () => {
  logImg(filePath);
}