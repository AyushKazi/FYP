import React from "react";
import ProductCard from "../components/Product/ProductCard";
import Banner from "../components/Product/Banner";

const Products = () => {
  return (
    <>
      {/* <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="img border border-red-500 ">IMG</div>
        <div className="details border border-red-500 ">Details</div>
        <div className="order border border-red-500 ">Order</div>
      </div>

      <div className="reviews"></div>

      <div className="recommendations"></div> */}
      <Banner />
      <div className="border border-red-500 px-6 py-10 ">
        {/* title */}
        <div className="title">
          <span className="font-medium text-xl px-4 tracking-wide border border-blue-400">
            Featured Products
          </span>
        </div>

        {/* featured products */}
        <div className="flex flex-wrap justify-evenly border border-red-500 px-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        {/* end of featured products */}
      </div>
    </>
  );
};

export default Products;
