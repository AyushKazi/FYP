import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/Product/ProductCard";
import { getFeaturedProductList } from "../features/featuredProducts/product-actions";

const FilterScreen = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const categroySearch = searchParams.get("category") || "";
  console.log(categroySearch);

  const productList = useSelector((state) => state.featuredProductList);
  const { products } = productList;
  console.log(products);

  useEffect(() => {
    dispatch(getFeaturedProductList());
  }, [dispatch]);

  const [updatedList, setUpdatedList] = useState();

  useEffect(() => {}, [categroySearch]);

  return (
    <>
      <div className="border border-red-400 p-10 max-w-screen-2xl mx-auto">
        <div className="border border-red-400 grid grid-cols-4">
          <div className="grid border border-red-400 ">
            {/* radion buttons */}
            hi
          </div>

          <div className="border border-red-400  col-span-3">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterScreen;
