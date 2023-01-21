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

// router.post("/createProduct", upload.single("file"), productsController.createProduct);

// router.put("/likeProduct/:id", productsController.likeProduct);

// router.delete("/deleteProduct/:id", productsController.deleteProduct);

module.exports = router;