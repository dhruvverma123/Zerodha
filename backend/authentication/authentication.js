const authentication = (req, res, next) => {
  if (req.user == null) {
    res.send(req);
  } else {
    next();
  }
};
module.exports = authentication;
