const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },

  completed: {
    type: Boolean,
    default: false
  },

  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium"
  },

  dueDate: {
    type: Date
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }

}, { timestamps: true });

module.exports = mongoose.model("Todo", todoSchema);





// const mongoose = require("mongoose");

// const todoSchema = new mongoose.Schema({
//   text: {
//     type: String,
//     required: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "User",
//     required: true
//   }
// }, { timestamps: true });

// module.exports = mongoose.model("Todo", todoSchema);










// const mongoose = require("mongoose");

// const todoSchema = new mongoose.Schema({
//   text: {
//     type: String,
//     required: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   }
// }, { timestamps: true });

// module.exports = mongoose.model("Todo", todoSchema);