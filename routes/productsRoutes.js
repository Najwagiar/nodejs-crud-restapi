import express from "express";
import { getProducts, insertProduct, showProduct, updateProduct, deleteProduct } from "../controllers/productsController.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/", insertProduct);
router.get("/:id", showProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;