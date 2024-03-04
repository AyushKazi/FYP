import React from "react";
import monitor from "../../assets/4kMonitor.jpg";
import Rating from "./Rating";

const ProductCard = () => {
  return (
    <>
      <div className="card border border-slate-300 shadow-2xl w-64  rounded-sm my-4 bg-[#F0F0F0] hover:scale-105  hover:duration-300 ">
        {/* image */}
        <div className="img border border-slate-300">
          <img src={monitor} alt="" className="object-fill" />
        </div>

        {/* card informations */}

        <div className="px-4 py-2 space-y-2 ">
          {/* title */}
          <div className="title text-3xl  tracking-wide ">4K Monitor</div>

          {/* rating */}
          <div className="rating ">
            <Rating text={`${12} reviews`} value={4} />
          </div>

          {/* price */}
          <div className="price flex  space-x-1  ">
            <div className="price text-red-700 line-through pt-1  ">
              NPR 20000/-
            </div>
            <div className="price text-xl  ">NPR 18000/-</div>
          </div>
          {/* end of price */}

          {/* add to cart button */}
          <div className="button">
            <button className="w-full py-2 bg-[#7D7D7D] text-white rounded-sm hover:bg-[#2C2C2C] hover:opacity-90 hover:duration-300">
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
