import User from "../models/userModel.js";

export const registerUser = async (req, res) => {
  const query = req.query();

  if (!query) {
    res.status(400);
    throw new error("wrong credentials");
  }

  const user = await User.create({
    name: req.query.username,
    email: req.query.email,
    password: req.query.password,
  });

  res.status(200).json({ message: "register user" });
};
