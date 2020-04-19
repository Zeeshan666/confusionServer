var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var promoRouter = require("./routes/promorouter");
var leaderRouter = require("./routes/dishRouters");
var dishRouters = require("./routes/dishRouters");
var app = express();

const mongoose = require("mongoose");
const dishes = require("./models/dishes");
const promos = require("./models/promo");
const leader = require("./models/leader");
const url = "mongodb://localhost:27017/confusion";

const connect = mongoose.connect(url);

connect
  .then((db) => {
    console.log("connected successFully");
  })
  .catch((err) => {
    console.log(err);
  });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Basic authentication
function auth(req, res, next) {
  console.log(req.headers);
  const authHeaders = req.headers.authorization;
  if (!authHeaders) {
    var err = new Error("you are not authenticated");
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    return next(err);
  }
  var auth = new Buffer.from(authHeaders.split(" ")[1], "base64")
    .toString()
    .split(":");
    var user = auth[0];
    var pass = auth[1];
    if (user == 'admin' && pass == 'password') {
      next(); // authorized
  } else {
      var err = new Error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');      
      err.status = 401;
      next(err);
  }
}
app.use(auth);
app.use(express.static(path.join(__dirname, "public")));

//mounted endPoints
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/dishes", dishRouters);
app.use("/promos", promoRouter);
app.use("/leaders", leaderRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
