const Holding = require("../model/holdingModel");

module.exports.getAllHolding = async (req, res) => {
  let allHoldings = await Holding.find({});
  res.json(allHoldings);
};

module.exports.lengthOfHolding = async (req, res) => {
  let { id } = req.params;
  let holding = await Holding.find({ name: id });

  if (!holding) {
    res.json({ data: "empty" });
  }
  res.json({ data: holding });
};
