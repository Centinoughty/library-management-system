const User = require("../models/UserModel");
const JWT_TOKEN = process.env.JWT_TOKEN;

module.exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, type } = req.body;

    if (!name || !email || !password || !type) {
      return res.status(400).json({ message: "All fields must be present" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json({ message: "Account created" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Account not found" });
    }

    if (!(await user.isMatchPassword(password))) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = jwt.sign({ _id: user._id }, JWT_TOKEN);
    res.status(200).json({ message: "Login succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
