const express = require("express");
const router = express.Router();
const Concentrate = require("../concentrates");

const cart = [];
//Post Routes - simplified for now
router.get("/", (req, res, next) => {
    
    const data = user.find({}, (err,cursor) => {
        cursor.forEach((dataset) => {
            cart.push(dataset)
        })
    })
    res.render('cart'), {
        cartProduct: cart
    };
})

// router.post("/createPost", upload.single("file"), postsController.createPost);

// router.put("/likePost/:id", postsController.likePost);

// router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;