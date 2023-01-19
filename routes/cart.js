const express = require("express");
const router = express.Router();

//Post Routes - simplified for now
router.get("/", (req, res, next) => {
    res.render('cart')
})

// router.post("/createPost", upload.single("file"), postsController.createPost);

// router.put("/likePost/:id", postsController.likePost);

// router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;