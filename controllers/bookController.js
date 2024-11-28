const mongoose = require("mongoose");
const Book = require("../models/BookModel");

module.exports.addBook = async (req, res) => {
  try {
    const { title, author, publishedYear, genre, availableCopies } = req.body;

    if (!title || !author || !publishedYear || !genre || !availableCopies) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const book = await Book.findOne({ title });
    if (book) {
      return res.status(400).json({ message: "Book already exists" });
    }

    const newBook = new Book(req.body);
    await newBook.save();

    res.status(201).json({ message: "Book added" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ message: "Fetched books", books });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.getBook = async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid id" });
    }

    const book = await Book.findById(id);
    if (!book) {
      return res.status(400).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book fetched succesfully", book });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, author, publishedYear, genre, availableCopies } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid id" });
    }

    const book = await Book.findById(id);

    book.title = title || book.title;
    book.author = author || book.author;
    book.publishedYear = publishedYear || book.publishedYear;
    book.genre = genre || book.genre;
    book.availableCopies = availableCopies || book.availableCopies;

    await book.save();
    res.status(200).json({ message: "Book saved succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.deleteBook = async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: " Invalid id" });
    }

    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(400).json({ message: "Cannot find book" });
    }

    res.status(200).json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
