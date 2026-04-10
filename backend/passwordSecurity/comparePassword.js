const bcrypt = require("bcrypt");

async function compareParrword(password, storedPassword) {
  let result = await bcrypt.compare(password, storedPassword);
  return result;
}

module.exports = compareParrword;
