require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const userAuthentication = require("./util/userAuthentication");

const wrapAsync = require("./wrapasync/wrapAsync");

const authentication = require("./authentication/authentication");

const signupValidate = require("./util/signupValidate");
const loginValidate = require("./util/loginValidate");
const orderValidate = require("./util/orderValidate");

const holding = require("./controller/holding");
const position = require("./controller/position");
const order = require("./controller/order");
const user = require("./controller/user");

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

app.use(
  cors({
    origin: [
      "https://zerodha-1-92dj.onrender.com",
      "https://zerodha-2-kqx1.onrender.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  }),
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(userAuthentication);

const main = async () => {
  await mongoose.connect(URL);
};

//authntication is a checker who checks is user has logged or not
app.get("/allHoldings", wrapAsync(holding.getAllHolding));

//authntication is a checker who checks is user has logged or not
app.get("/allPositions", wrapAsync(position.getAllPositions));

//orderValidate is an joi validator
app.post("/addOrder", order.addOrder);

//authntication is a checker who checks is user has logged or not
app.get("/allOrders", wrapAsync(order.allOrders));

//authntication is a checker who checks is user has logged or not
app.get("/lengthOfHoldings/:id", wrapAsync(holding.lengthOfHolding));

// user api endpoints
//signupValidate is an joi validator
app.post("/signup", signupValidate, wrapAsync(user.signup));

//loginValidate is an joi validator
app.post("/login", loginValidate, wrapAsync(user.login));

//authntication is a checker who checks is user has logged or not
app.get("/logout", user.logout);

//authntication is a checker who checks is user has logged or not
app.get("/getUser", wrapAsync(user.getUser));

//Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(400).json({ response: "Something went wrong", error: err });
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
  main()
    .then(() => {
      console.log("DB connected");
    })
    .catch(() => {
      console.log("DB has not connected");
    });
});

//flash -> done
//backend error handling middleware -> done
//MVC architechture -> done
//validation client and server both -> done
//next to continue the project from the Apna college
