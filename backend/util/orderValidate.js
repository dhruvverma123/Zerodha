const orderSchema = require("../joi/order/order");

const orderValidate = (req, res, next) => {
  let { error } = orderSchema.validate(req.body);
  if (error) {
    next(error.details[0].message);
  }
  next();
};

module.exports = orderValidate;
