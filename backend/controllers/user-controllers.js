import bycrypt from "bcryptjs";
import User from "../models/user-model.js";
import jwt from "jsonwebtoken";

// @desc  add new user
// @route POST api/v1/user/register
// @access Public

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, role } = req.body;

  //checking if the user is already in the database.
  const alreadyUser = await User.findOne({ where: { email } }).catch(
    (error) => {
      console.log("Error : ", error);
    }
  );

  //throw message if user already exists
  if (alreadyUser) {
    return res.json({ message: "User already exists" });
  }

  const hashPassword = bycrypt.hashSync(password, 10);
  const newUser = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: hashPassword,
    role: role,
  });
  //saving the new user in the database
  const savedUser = await newUser.save().catch((err) => {
    console.log("Error : ", err);
    res.json({ message: "Cannot register" });
  });

  //throw success message if the user is saved in the database
  if (savedUser) {
    res.json({ messgae: "Thanks for registering" });
  }
};

// @desc  login user
// @route POST api/v1/user/login
// @access Public

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  //first of all, check user with email exist or not
  const userWithEmail = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log("Error : ", err);
    }
  );

  if (!userWithEmail) {
    return res.json({ message: "User not found" });
  }

  //now check the password
  const isPasswordValid = await bycrypt.compare(
    password,
    userWithEmail.password
  );

  if (!isPasswordValid)
    return res.json({ message: "Email or password is wrong" });

  //initializing jwt token with id and email of the user
  const jwtToken = jwt.sign(
    { id: userWithEmail.id, email: userWithEmail.email },
    "12345"
  );
  //checking if the user is admin
  //default is 0 which is customer and 1 is for admin
  if (userWithEmail.role === 1) {
    return res.json({ message: "Welcome to admin panel" });
  }

  //message after succesfull login
  res.json({ message: "Welcome back!", token: jwtToken });
};

// @desc  logout user / clear cookie
// @route POST api/v1/user/logout
// @access PRIVATE

const logout = (req, res) => {
  res.json({ message: "User logged out" });
};

// @desc  get user profile
// @route GET api/v1/user/userProfile
// @access PRIVATE

const getUserProfile = (req, res) => {
  res.json({ message: "User profile" });
};

// @desc  get all users info
// @route GET api/v1/user/
// @access PRIVATE (ADMIN)

const getAllUserInfo = (req, res) => {
  res.json({ message: "All User profile" });
};

// @desc  forget password
// @route POST api/v1/user/forgotPassword
// @access PUBLIC

const forgotPassword = (req, res) => {
  res.json({ message: "Forgot password" });
};

const updatePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  try {
    // finding user
    const user = await User.findByPk(req.user.id);

    // comparing the password
    const isPasswordValid = await bycrypt.compare(
      currentPassword,
      user.password
    );

    // checkiing if the old password matches
    if (!isPasswordValid) {
      res.status(400);
      throw new Error("Current password does not match!");
    }

    //hashing the new password
    const newHashPassword = bycrypt.hashSync(newPassword, 10);

    //updating the password
    user.password = newHashPassword;

    await user.save();

    res.json({ message: "Password Updated Successfully!" });
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

export {
  registerUser,
  loginUser,
  forgotPassword,
  getAllUserInfo,
  getUserProfile,
  logout,
  updatePassword,
};
