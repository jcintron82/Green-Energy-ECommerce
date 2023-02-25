// const cloudinary = require("../middleware/cloudinary");
const Product = require("../models/Product");
const User = require("../models/User");

module.exports = {
    getCart: async (req, res) => {
      try {
        const cart = await User.find({ user: req.user.cart });
        res.render("cart.ejs", { cart: cart, user: req.user });
      } catch (err) {
        console.log(err);
      }
  },
  
  addToCart: async (req, res) => {
    try {
      const product = await Product.findById({ _id: req.params.id});
      console.log(product)
      await User.findOneAndUpdate(
        { cart: req.user.cart },
        { $push: { cart: { productId: product, quantity: req.body.quantity, price: product.price, title: product.title, image: product.image } } },
      );
      console.log("Product added to cart");
      res.redirect("/cart");
    } catch (err) {
      console.log(err, "Error adding product to cart");
    }
  }

    // getProduct: async (req, res) => {
    //   try {
    //     const product = await Product.findById(req.params.id);
    //     res.render("product.ejs", { product: product, user: req.user });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    // createProduct: async (req, res) => {
    //   try {
    //     // Upload image to cloudinary
    //     const result = await cloudinary.uploader.upload(req.file.path);
  
    //     await Product.create({
    //       title: req.body.title,
    //       image: result.secure_url,
    //       cloudinaryId: result.public_id,
    //       caption: req.body.caption,
    //       likes: 0,
    //       user: req.user.id,
    //     });
    //     console.log("Product has been added!");
    //     res.redirect("/profile");
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    // likeProduct: async (req, res) => {
    //   try {
    //     await Product.findOneAndUpdate(
    //       { _id: req.params.id },
    //       {
    //         $inc: { likes: 1 },
    //       }
    //     );
    //     console.log("Likes +1");
    //     res.redirect(`/product/${req.params.id}`);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    // deleteProduct: async (req, res) => {
    //   try {
    //     // Find product by id
    //     let product = await Product.findById({ _id: req.params.id });
    //     // Delete image from cloudinary
    //     await cloudinary.uploader.destroy(product.cloudinaryId);
    //     // Delete product from db
    //     await Product.remove({ _id: req.params.id });
    //     console.log("Deleted Product");
    //     res.redirect("/profile");
    //   } catch (err) {
    //     res.redirect("/profile");
    //   }
    // },
  };
  