const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishedYear: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    availableCopies: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("books", bookSchema);
