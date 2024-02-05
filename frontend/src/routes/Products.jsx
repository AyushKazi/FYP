import React from "react";
import ProductCard from "../components/Product/ProductCard";

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
      <div className="grid grid-cols-1 border border-red-500 my-4 justify-items-center mx-auto max-w-screen-2xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};

export default Products;
