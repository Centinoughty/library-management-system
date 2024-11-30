const auth = require("../middlewares/auth");
const {
  registerUser,
  loginUser,
  getUser,
  updateUser,
} = require("../controllers/authController");

const router = require("express").Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", auth, getUser);
router.put("/", auth, updateUser);

module.exports = router;
