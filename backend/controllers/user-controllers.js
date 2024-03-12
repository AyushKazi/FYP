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
  //displays the user profile according to the token with whom it is attached
  res.json({ user: req.user });
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

const forgotPassword = async (req, res) => {
  const { email } = req.body;

  //extracting the user from the provided email
  const user = await User.findOne({ where: { email } }).catch((err) =>
    console.log("Error :", err)
  );

  // if user does not exist with the email
  if (!user) {
    res.status(400);
    throw new Error("This email does not exist!");
  }

  // if user exist

  const accessToken = createAccessToken({ id: user.id, email: user.email });

  // frontend link to enter a new password
  const url = `http://localhost:3000/api/v1/user/reset/${accessToken}`;

  console.log(url);
  res.json({
    message:
      "Password reset email sent to your mail. Please check your mail to reset.",
  });
};

// @desc  reset password
// @route POST api/v1/user/resetPassowrd
// @access PUBLIC

const resetPassword = async (req, res) => {
  try {
    const { password } = req.body;
    console.log(password);

    const passwordHash = await bycrypt.hash(password, 10);

    await User.update(
      {
        password: passwordHash,
      },
      { where: { id: req.user.id } }
    );

    res.json({ message: "Password successfully changed!" });
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
};

// @desc  update password
// @route PUT api/v1/user/updatePassword
// @access PRIVATE

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

// access tokken for forget password
// expires in 15m

const createAccessToken = (payload) => {
  return jwt.sign(payload, "12345", {
    expiresIn: "15m",
  });
};

export {
  registerUser,
  loginUser,
  forgotPassword,
  getAllUserInfo,
  getUserProfile,
  logout,
  resetPassword,
  updatePassword,
};
