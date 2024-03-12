import express from "express";
const router = express.Router();

import {
  registerUser,
  loginUser,
  forgotPassword,
  getAllUserInfo,
  getUserProfile,
  logout,
  updatePassword,
  resetPassword,
} from "../controllers/user-controllers.js";
import auth from "../middlewares/auth.js";

// public user routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgotPassword", forgotPassword);

// private user routes
router.get("/getUserProfile", auth, getUserProfile);
router.post("/logout", logout);
router.put("/updatePassword", auth, updatePassword);
router.post("/resetPassword", auth, resetPassword);

//admin routes
router.get("/getAllUserInfo", getAllUserInfo);
export default router;
