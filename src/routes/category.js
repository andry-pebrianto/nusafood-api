const express = require("express");
const {
  fetchAllCategories,
  createCategory,
  fetchCategoryById,
  updateCategoryById,
  deleteCategoryById,
} = require("../controllers/category");

const router = express.Router();

// @GET     | Public     | /api/categories
router.get("/categories", fetchAllCategories);
// @POST    | Public     | /api/categories
router.post("/categories", createCategory);
// @GET     | Public     | /api/categories/:id
router.get("/categories/:id", fetchCategoryById);
// @PUT     | Public     | /api/categories/:id
router.put("/categories/:id", updateCategoryById);
// @DELETE  | Public     | /api/categories/:id
router.delete("/categories/:id", deleteCategoryById);

module.exports = router;
