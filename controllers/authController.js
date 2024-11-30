const jwt = require("jsonwebtoken");
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
    newUser.registeredDate = Date.now();
    await newUser.save();

    res.status(201).json({ message: "Account created" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error);
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
    res.status(200).json({ message: "Login succesfully", token });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error);
  }
};

module.exports.getUser = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(400).json({ message: "Cannot find user" });
    }

    res.status(200).json({ message: "User fetched succesfully", user });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const userId = req.user._id;
    const { name, membershipType } = req.body;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({ message: "Cannot find user" });
    }

    user.name = name || user.name;
    user.membershipType = membershipType || user.membershipType;
    await user.save();

    res.status(200).json({ message: "User updated" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(400).json({ message: "Cannot find user" });
    }

    res.status(200).json({ message: "User deleted succesfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
