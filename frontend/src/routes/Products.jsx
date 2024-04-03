import React from "react";
import ProductCard from "../components/Product/ProductCard";
import Banner from "../components/Product/Banner";
import CategoryCard from "../components/Category/CategoryCard";
import products from "../data/product";
import { categories } from "../data/category";

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
      <div className=" px-6 py-6  max-w-screen-2xl mx-auto ">
        {/* title */}
        <div className="title flex justify-center  py-2">
          <span className="font-medium text-xl uppercase md:text-2xl px-4 tracking-wide ">
            Featured Products
          </span>
        </div>

        {/* featured products */}
        <div className="flex flex-wrap justify-evenly  px-4 ">
          {products.map((product) => (
            <ProductCard product={product} key={product.product_id} />
          ))}
        </div>
        {/* end of featured products */}

        {/* categories  title*/}
        <div className="title flex justify-center py-2  my-3 ">
          <span className="font-medium uppercase text-xl md:text-2xl px-4 tracking-wide ">
            Our Categories
          </span>
        </div>

        {/* category list */}
        <div className=" flex flex-wrap justify-evenly  px-4 py-2 ">
          {categories.map((category) => (
            <CategoryCard category={category} key={category.cat_id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
