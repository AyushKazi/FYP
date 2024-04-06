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

// @desc    Create a product
// @route   POST /api/v1/products
// @access  Protected/Admin
const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      imagePath,
      countInStock,
      category_id,
      brand_id, // Assuming you're passing brand_id in the request body
      featured,
    } = req.body;

    const product = {
      name,
      description,
      price,
      imagePath,
      countInStock,
      category_id,
      brand_id, // Include brand_id when creating the product
      user_id: req.user.id,
      featured,
    };

    const newProduct = await Product.create(product);

    // Adding category and brand info
    const createdProduct = await Product.findByPk(newProduct.product_id, {
      attributes: [
        "product_id",
        "name",
        "description",
        "price",
        "imagePath",
        "countInStock",
        "user_id",
        "category_id",
        "brand_id", // Include brand_id in the attributes to fetch
        "featured",
        // Assuming db.sequelize.col is correctly set up to access the category name
        [db.sequelize.col("category.name"), "category_name"],
        [db.sequelize.col("brand.name"), "brand_name"], // Include brand name similarly
      ],
      include: [
        {
          model: Category,
          as: "category",
          attributes: [],
        },
        {
          model: Brand, // Include the Brand model in the query
          as: "brand", // Make sure the alias matches the one defined in your model associations
          attributes: [],
        },
      ],
    });

    res.status(201).json({
      message: "Product created Successfully",
      createdProduct,
    });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(400).json({ message: "Something went wrong!" });
  }
};

// @desc    Delete a product
// @route   DELETE /api/v1/products/:id
// @access  Protected/Admin
const deleteProduct = async (req, res) => {
  const productId = req.params.id;

  try {
    const num = await Product.destroy({ where: { product_id: productId } });

    if (num == 1) {
      res.json({ message: "Product removed succesfully!" });
    } else {
      res.status(500);
      throw new Error("Product could not be found!");
    }
  } catch (error) {
    console.log("here");
    throw new Error(error.message);
  }
};

// @desc    To update product by id
// @route   PUT /api/v1/products/:id
// @access  Protected/Admin

const updateProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      imagePath,
      countInStock,
      category_id,
      featured,
    } = req.body;

    const product = await Product.findByPk(req.params.id);

    if (!product) {
      res.status(404);
      throw new Error("Product could not found!");
    }

    if (product) {
      product.name = name;
      product.description = description;
      product.price = price;
      (product.imagePath = imagePath), (product.countInStock = countInStock);
      product.category_id = category_id;
      product.featured = featured;
    }

    const editedProduct = await product.save();

    // Adding category info
    const updatedProduct = await Product.findByPk(editedProduct.product_id, {
      attributes: [
        "product_id",
        "name",
        "description",
        "price",
        "imagePath",
        "countInStock",
        "user_id",
        "category_id",
        "featured",
        [db.sequelize.col("category.name"), "category_name"],
      ],

      include: {
        model: Category,
        as: "category",
        attributes: [],
      },
    });

    res.json({
      message: "Product updated successfully",
      updatedProduct,
    });
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
};

export {
  findProductById,
  findAllFeaturedProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
