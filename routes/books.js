const {
  addBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

const router = require("express").Router();

router.post("/", addBook);
router.get("/", getBooks);
router.get("/:id", getBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
