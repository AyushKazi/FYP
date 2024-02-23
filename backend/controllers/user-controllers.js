import bycrypt from "bcryptjs";
import User from "../models/user-model.js";

// add new user
// POST

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

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

export { registerUser };
