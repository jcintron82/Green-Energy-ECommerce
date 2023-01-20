const express = require("express");
const router = express.Router();
// const Concentrate = require("../concentrates");

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

// router.post("/createProduct", upload.single("file"), productsController.createProduct);

// router.put("/likeProduct/:id", productsController.likeProduct);

// router.delete("/deleteProduct/:id", productsController.deleteProduct);

module.exports = router;