const User = require("../models/user.model");

exports.create = async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      // A user with the same email already exists
      return res.status(409).send({ error: "User already exists." });
    }

    // User does not exist, proceed with user creation
    const user = new User(req.body);
    const newUser = await user.save();
    const token = await user.generateAuthToken();

    res.status(201).send({ newUser, token });
  } catch (e) {
    console.log("error====", e);
    res.status(400).send({
      error: e.message,
    });
  }
};

exports.login = async (req, res) => {
  console.log("-----Requested-----");
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    console.log("user=====", user);
    const token = await user.generateAuthToken();
    console.log("Token in login route====", token);
    if (user) res.status(200).send({ user: user, token: token });

    // res.send({ user });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};
