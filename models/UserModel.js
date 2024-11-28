const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    membershipType: {
      type: String,
      enum: ["regular", "premium"],
      default: "regular",
    },
    registeredDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
