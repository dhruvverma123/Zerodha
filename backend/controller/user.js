const User = require("../model/userModel");
const encryptPassword = require("../passwordSecurity/encrypt");
const { createSecretToken } = require("../util/secretToken");
const compareParrword = require("../passwordSecurity/comparePassword");

module.exports.signup = async (req, res) => {
  let { name, email, password } = req.body;

  let user = await User.findOne({ email: email });

  if (user) {
    return res.json({ data: { message: "User already exsists" } });
  }
  let hashPassword = await encryptPassword(password);

  let newUser = new User({
    name: name,
    email: email,
    password: hashPassword,
  });

  newUser.save();

  let token = createSecretToken(newUser._id);

  res
    .cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    })
    .status(201)
    .json({
      data: { message: "user registered successfully", success: true, newUser },
    });
};

module.exports.login = async (req, res) => {
  let { email, password } = req.body;

  let user = await User.findOne({ email: email });

  if (!user) {
    return res.json({ response: "Incorrect email or password" });
  }

  let checkedPassword = await compareParrword(password, user.password);

  if (checkedPassword) {
    let token = createSecretToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.status(201).json({
      response: "logged in successfully",
    });
  } else {
    return res.json({ response: "Incorrect email or password" });
  }
};

module.exports.logout = (req, res) => {
  res.cookie("token", "");
  res.json({ response: "Logged out successfully" });
};

module.exports.getUser = async (req, res) => {
  let { id } = req.user;
  let name = await User.findOne({ _id: id });
  res.json({ data: name });
};
