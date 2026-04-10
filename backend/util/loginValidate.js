const loginSchema = require("../joi/user/loginSchema");

const loginValidate = (req, res, next) => {
  let { error } = loginSchema.validate(req.body);
  if (error) {
    next(error.details[0].message);
  }
  next();
};

module.exports = loginValidate;
