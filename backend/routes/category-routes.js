import express from "express";
import {
  createCategory,
  deleteCategory,
  findAllCategories,
  updateCategory,
} from "../controllers/category-controllers";
import auth from "../middlewares/auth";
import authAdmin from "../middlewares/authAdmin";
const router = express.Router();

router.route("/").get(findAllCategories);

// Admin
router.post("/", auth, authAdmin, createCategory);
router.put("/:id", auth, auth, updateCategory);
router.delete("/:id", auth, authAdmin, deleteCategory);
