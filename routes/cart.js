const express = require("express");
const router = express.Router();
const user = require("../models/User");

const cart = [
    {
        name:'Solar Panels',
        price: 3000
    }
];
//Post Routes - simplified for now
router.get("/", (req, res, next) => {
    console.log('f')
    const data = user.find({}, (err,cursor) => {
        cursor.forEach((dataset) => {
            console.log(dataset)
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