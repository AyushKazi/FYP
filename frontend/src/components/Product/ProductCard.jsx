import React from "react";
import monitor from "../../assets/4kMonitor.jpg";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../features/cart-slice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (id, name) => {
    dispatch(addProduct({ product: { _id: id, name: name, quantity: 1 } }));
  };

  return (
    <>
      <div className="card border border-slate-300 shadow-2xl w-64  rounded-sm my-4 bg-[#F0F0F0] hover:scale-105  hover:duration-300 hover:ease-in-out mx-3 ">
        {/* image */}
        <Link to={`/products/${product._id}`}>
          <div className="img border border-slate-300">
            <img src={product.image} alt="" className="object-fill" />
          </div>
        </Link>

        {/* card informations */}

        <div className="px-4 py-2 space-y-2 ">
          {/* title */}
          <Link to={`/products/${product._id}`}>
            <div className="title text-xl  tracking-wide ">{product.name}</div>
          </Link>

          {/* rating */}
          <div className="rating ">
            <Rating
              text={`${product.numReviews} reviews`}
              value={product.rating}
            />
          </div>

          {/* price */}
          <div className="price flex  space-x-1  ">
            <div className="price text-xl  ">NPR {product.price} /-</div>
          </div>
          {/* end of price */}

          {/* add to cart button */}
          <div className="button">
            <button
              onClick={() => {
                handleAddToCart(product._id, product.name);
              }}
              className="w-full py-2 border border-black rounded-sm hover:bg-neutral-700 hover:ease-linear hover:left- hover:text-white hover:opacity-90 hover:duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>

        {/* end of card information */}
      </div>
    </>
  );
};

export default ProductCard;
