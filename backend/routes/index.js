import express from "express";
const router = express.Router();

import userRoutes from "../routes/user-routes.js";
import categoryRoutes from "./category-routes.js";

router.use("/user", userRoutes);
router.use("/category", categoryRoutes);

export default router;
