let bcrypt = require("bcrypt");

async function encryptPassword(password) {
  let salt = await bcrypt.genSalt(10);
  let result = await bcrypt.hash(password, salt);
  return result;
}

module.exports = encryptPassword;
