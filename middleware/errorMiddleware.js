const { validationResult } = require("express-validator");

exports.errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Server Error"
  });
};

exports.validationHandler = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  next();
};