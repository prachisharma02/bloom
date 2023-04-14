//registration logic

const asyncHandler = require("express-async-handler");
const User = require("../data/models/UserModel");
const generateToken = require("../Config/generateToken");

//async handler that handles all the error

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body; //this is from user model

  if (!name || !email || !password) {
    res.status(400); //if anything is undefined then for handling error
    throw new Error("Please enter all the fields");
  }
  //user is the model
  const userExists = await User.findOne({ email }); // email should be unique so if this email exist throw error
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
  if (user) {
    res.status(201).json({
      //201 for success
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to Create the User");
  }
});

module.exports = { registerUser };
