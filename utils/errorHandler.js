const newError = require("http-errors");

function notFoundHandler(req, res, next) {
  next(newError(404, "Your request not Found!"));
}

function errorHadler(err, req, res, next) {
  res.status(400).json({ error: err });
}

module.exports = { notFoundHandler, errorHadler };
