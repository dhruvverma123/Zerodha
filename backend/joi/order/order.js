const Joi = require("joi");

const orderSchema = Joi.object({
  name: Joi.string().required(),
  qty: Joi.number().required(),
  price: Joi.number().required(),
  mode: Joi.string().required(),
});

module.exports = orderSchema;
