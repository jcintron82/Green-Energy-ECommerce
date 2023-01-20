const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const productsController = require("../controllers/products");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, productsController.getProduct);

router.post("/createProduct", upload.single("file"), productsController.createProduct);

router.put("/likeProduct/:id", productsController.likeProduct);

router.delete("/deleteProduct/:id", productsController.deleteProduct);

module.exports = router;
