const express = require("express");
const router = express.Router();
// const user = require("../models/User");
const cartController = require("../controllers/cart");
// const passport = require("passport")
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.put("/addToCart/:id", ensureAuth, cartController.addToCart);


// const cart = [
//     {
//         name:'Solar Panels',
//         price: 3000
//     }
// ];
// //Post Routes - simplified for now
// router.get("/", (req, res, next) => {
//     console.log('f')
//     const data = User.find({}, (err,cursor) => {
//         cursor.forEach((dataset) => {
//             console.log(dataset)
//             cart.push(dataset)
//         })
//     })
//     res.render('cart'), {
//         cartProduct: cart
//     };
// })

// router.post("/createProduct", upload.single("file"), productsController.createProduct);

// router.put("/likeProduct/:id", productsController.likeProduct);

// router.delete("/deleteProduct/:id", productsController.deleteProduct);

module.exports = router;