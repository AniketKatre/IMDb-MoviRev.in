const User = require("../models/user");

exports.create = async (req, res) => {
  const { name, email, password } = req.body;

  const oldUser = await User.findOne({ email });
  // console.log(oldUser);
  if (oldUser) {
    return res.status(401).json({ error: "Email is already exist!" });
  }

  const newUser = new User({ name, email, password });
  await newUser.save();

  console.log(req.body);
  res.json({ user: newUser });
};
