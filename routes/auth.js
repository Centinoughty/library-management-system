const auth = require("../middlewares/auth");
const {
  registerUser,
  loginUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/authController");

const router = require("express").Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", auth, getUser);
router.put("/", auth, updateUser);
router.delete("/", auth, deleteUser);

module.exports = router;
