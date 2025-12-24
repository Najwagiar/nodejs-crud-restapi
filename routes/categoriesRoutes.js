import express from "express";
import{ getCategories, insertCategory, showCategory, updateCategory, deleteCategory } from "../controllers/categoriesController.js";

const router = express.Router();

router.get("/", getCategories);
router.post("/", insertCategory);
router.get("/:id", showCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

export default router;