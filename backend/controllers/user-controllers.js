import bycrypt from "bcryptjs";
import User from "../models/user-model.js";
import jwt from "jsonwebtoken";

// add new user
// POST

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

// login user
//POST

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

export { registerUser, loginUser };
