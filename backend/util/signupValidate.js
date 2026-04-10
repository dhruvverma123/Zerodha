const signupSchema = require("../joi/user/signupSchema");

const signupValidate = (req, res, next) => {
  let { error } = signupSchema.validate(req.body);
  if (error) {
    next(error.details[0].message);
  }
  next();
};

module.exports = signupValidate;
