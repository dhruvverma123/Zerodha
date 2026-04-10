const { verifyUser } = require("./secretToken");

function userAuthentication(req, res, next) {
  let token = req.cookies.token;
  if (!token) {
    req.user = null;
    return next();
  } else {
    try {
      let decodedToken = verifyUser(token);
      req.user = decodedToken;
      return next();
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = userAuthentication;
