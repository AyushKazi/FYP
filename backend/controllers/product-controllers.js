import db from "../models/index.js";

const Product = db.product;
const Category = db.category;
const Brand = db.brand;
const Review = db.review;
const User = db.user;

// @desc    Fetch all featured products
// @route   GET api/v1/products
// @access  Public (anything can hit it)
const findAllFeaturedProducts = async (req, res) => {
  try {
    const products = await Product.findAll({ where: { featured: 1 } });
    res.json(products);
  } catch (error) {
    res.status(500);
    throw new Error("Error retrieving product details!");
  }
};

// @desc    Fetch product by ID
// @route   GET /api/v1/products/:id
// @access  Public

const findProductById = async (req, res) => {
  const productId = req.params.id;

  const product = await Product.findOne({
    where: {
      product_id: productId,
    },
    attributes: { exclude: ["category_id"] },
    include: [
      {
        model: Category,
        required: true,
        attributes: ["category_id", "name"],
      },
      {
        model: Brand,
        required: true,
        attributes: ["brand_id", "name"],
      },

      {
        model: Review,
        attributes: { exclude: ["user_id"] },
        include: {
          model: User,
          attributes: ["user_id", "first_name", "last_name"],
        },
      },
    ],
  });

  // // if product is found
  // // if id is formatted validly
  if (product) {
    return res.json(product);
  } else {
    // not found error code
    res.status(404);
    throw new Error("Cannot find the product!");
  }
};

export { findProductById, findAllFeaturedProducts };
