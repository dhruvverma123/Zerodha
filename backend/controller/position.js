const Position = require("../model/positionModel");

module.exports.getAllPositions = async (req, res) => {
  let allPositions = await Position.find({});
  res.json(allPositions);
};
