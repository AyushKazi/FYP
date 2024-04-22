import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/Product/ProductCard";
import { getFeaturedProductList } from "../features/featuredProducts/product-actions";
import axios from "axios";

const FilterScreen = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const categroySearch = searchParams.get("category") || "";
  console.log(categroySearch);

  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("http://localhost:3001/api/v1/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  console.log(products);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axios.get(
        "http://localhost:3001/api/v1/categories"
      );
      setCategories(data);
    };
    const fetchBrands = async () => {
      const { data } = await axios.get("http://localhost:3001/api/v1/brands");
      setBrands(data);
    };
    fetchCategories();
    fetchBrands();
  }, []);

  const [updatedList, setUpdatedList] = useState([]);

  useEffect(() => {
    const data = products.filter(
      (product) => product.category.category_id === 6
    );
    setUpdatedList(data);
  }, []);

  console.log(updatedList);

  useEffect(() => {}, [categroySearch]);

  return (
    <>
      <div className="max-w-screen-2xl mx-auto pb-6">
        <div className="flex w-full  justify-center items-center gap-8 bg-[#2C2C2C] opacity-90 rounded-sm">
          <h1 className="text-white text-xl font">Filter :</h1>
          {/* radion buttons */}
          <div className=" flex flex-col py-4 items-center">
            <select
              required
              defaultValue={categories.category_id}
              name="category_id"
              title="category_id"
              className="px-4 py-2 border border-gray-500 rounded-md"
              // className={`border outline-none px-3 py-2 rounded-md placeholder:text-sm ${
              //   roleIdError !== "" ? " border-red-500" : "border-slate-300"
              // }`}
            >
              <option value="">Choose Category</option>
              {categories.map((category) => {
                return (
                  <option
                    value={category.category_id}
                    key={category.category_id}
                  >
                    {category.name}
                  </option>
                );
              })}
            </select>{" "}
          </div>

          <div className=" flex flex-col py-4 items-center">
            <select
              required
              defaultValue={categories.category_id}
              name="category_id"
              title="category_id"
              className="px-4 py-2 border border-gray-500 rounded-md"
              // className={`border outline-none px-3 py-2 rounded-md placeholder:text-sm ${
              //   roleIdError !== "" ? " border-red-500" : "border-slate-300"
              // }`}
            >
              <option value="">Choose Brand</option>
              {categories.map((category) => {
                return (
                  <option
                    value={category.category_id}
                    key={category.category_id}
                  >
                    {category.name}
                  </option>
                );
              })}
            </select>{" "}
          </div>

          <div className=" flex flex-col py-4 items-center">
            <select
              required
              defaultValue={categories.category_id}
              name="category_id"
              title="category_id"
              className="px-6 py-2 text-center border border-gray-500 rounded-md"
              // className={`border outline-none px-3 py-2 rounded-md placeholder:text-sm ${
              //   roleIdError !== "" ? " border-red-500" : "border-slate-300"
              // }`}
            >
              <option value=""> Any Price</option>
              <option value=""> High to low</option>
              <option value=""> Any</option>
            </select>{" "}
          </div>

          <div className=" flex flex-col py-4 items-center">
            <select
              required
              defaultValue={categories.category_id}
              name="category_id"
              title="category_id"
              className="px-6 py-2 text-center border border-gray-500 rounded-md"
              // className={`border outline-none px-3 py-2 rounded-md placeholder:text-sm ${
              //   roleIdError !== "" ? " border-red-500" : "border-slate-300"
              // }`}
            >
              <option value=""> Any Rating</option>
              <option value=""> High to low</option>
              <option value=""> Any</option>
            </select>{" "}
          </div>
        </div>

        <div className="title flex justify-center  py-2 my-4">
          <span className="font-medium text-xl uppercase md:text-2xl px-4 tracking-wide ">
            All Products under category "Cameras"
          </span>
        </div>

        {/* featured products */}
        <div className="flex flex-wrap justify-evenly  px-4  ">
          {updatedList.map((product) => (
            <ProductCard product={product} key={product.product_id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterScreen;
