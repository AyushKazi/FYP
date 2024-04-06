import express from "express";
const router = express.Router();

import userRoutes from "../routes/user-routes.js";
import orderRoutes from "./order-routes.js";
import categoryRoutes from "./category-routes.js";
import productRoutes from "./product-routes.js";
import brandRoutes from "./brand-routes.js";

router.use("/user", userRoutes);
router.use("/categories", categoryRoutes);
router.use("/brands", brandRoutes);
router.use("/orders", orderRoutes);
router.use("/products", productRoutes);

export default router;
