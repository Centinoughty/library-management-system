const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const bookRoutes = require("./routes/books");
const { connectDb } = require("./config/db");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

connectDb();
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
