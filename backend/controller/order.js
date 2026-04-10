const Order = require("../model/orderModel");
const Holding = require("../model/holdingModel");

module.exports.addOrder = (req, res) => {
  let { name, qty, price, mode } = req.body;

  let addOrder = new Order({
    name: name,
    qty: qty,
    price: price,
    mode: mode,
  });
  if (mode == "Buy") {
    let addOrderInHoldings = Holding({
      name: name,
      qty: qty,
      avg: Math.ceil(Math.random()) + 100.2,
      price: price,
      net: `+${Math.ceil(Math.random() + 6.43)}%`,
      day: `+${Math.ceil(Math.random() + 2.43)}%`,
      isLoss: true,
    });
    addOrderInHoldings.save();
  }

  addOrder.save();
  res.send("order placed"); //this will be not shown, it is just a response, for stopping termination of the code
};

module.exports.allOrders = async (req, res) => {
  let allOrders = await Order.find({});
  res.json(allOrders);
};
