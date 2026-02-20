const { body } = require("express-validator");

exports.todoValidator = [
  body("text")
    .notEmpty()
    .withMessage("Todo text is required")
    .isLength({ min: 3 })
    .withMessage("Todo must be at least 3 characters")
];

exports.registerValidator = [
  body("name").notEmpty(),
  body("email").isEmail(),
  body("password").isLength({ min: 6 })
];