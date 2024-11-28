const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    author: {
      type: String,
    },
    publishedYear: {
      type: Number,
    },
    genre: {
      type: String,
    },
    availableCopies: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("books", bookSchema);
