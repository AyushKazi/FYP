import React from "react";
import monitor from "../../assets/4kMonitor.jpg";
import Rating from "./Rating";

const ProductCard = () => {
  return (
    <>
      <div className="card border border-slate-300 shadow-2xl  rounded-sm my-12 mx-3 w-72 space-y-3 bg-[#F0F0F0] ">
        {/* image */}
        <div className="img border border-slate-300">
          <img src={monitor} alt="" className="object-fill" />
        </div>

        <div className="px-4 space-y-3 ">
          {/* title */}
          <div className="title text-3xl font-medium tracking-wide ">
            4K Monitor
          </div>

          {/* rating */}
          <div className="rating ">
            <Rating text={`${12} reviews`} value={4} />
          </div>

          {/* price */}
          <div className="price text-red-700 line-through text-xl">
            NPR 20000/-
          </div>
          <div className="price text-3xl">NPR 18000/-</div>
          {/* add to cart button */}
          <div className="button mt-2">
            <button className="w-full py-2 my-2 bg-[#7D7D7D] text-white rounded-sm">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
