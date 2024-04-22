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
  getAccessToken,
  updateUserDetails,
} from "../controllers/user-controllers.js";
import auth from "../middlewares/auth.js";

// public user routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/refreshToken", getAccessToken);

router.post("/forgotPassword", forgotPassword);

// private user routes
router.get("/profile", auth, getUserProfile);
router.put("/info", auth, updateUserDetails);

router.get("/logout", logout);
router.put("/updatePassword", auth, updatePassword);
router.post("/resetPassword", auth, resetPassword);

//admin routes
router.get("/getAllUserInfo", auth, getAllUserInfo);
export default router;
