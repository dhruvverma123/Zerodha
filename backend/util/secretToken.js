require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

module.exports.verifyUser = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY);
};
