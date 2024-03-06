import React from "react";
import { useParams, Link } from "react-router-dom";
import Rating from "../components/Product/Rating";
import ProductCard from "../components/Product/ProductCard";
import { FaCaretDown } from "react-icons/fa";
const ProductDetailPage = () => {
  const { id: productID } = useParams();
  return (
    <>
      <div className="main max-w-screen-xl mx-3 my-3 md:mx-5 md:my-5 xl:mx-auto lg:mx-7 ">
        <Link to={"/"}>
          <button className="bg-neutral-700 px-4 mx-2 py-1 text-white rounded-sm">
            GO BACK
          </button>
        </Link>
        {/* image and details */}
        <div className="top grid my-3 md:grid-cols-2 rounded-md overflow-hidden p-2 ">
          {/* image grid 1 */}
          <div className="image ">
            <img
              src="https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="w-full h-full rounded-md "
            />
          </div>

          {/* details grid 2 */}
          <div className="details space-y-3 lg:space-y-6 mt-3 md:mt-0 px-2 md:mx-4 lg:mx-6 relative">
            {/* title */}
            <div className="title font-semibold text-3xl lg:text-4xl ">
              Samsung Galaxy Edge 7
            </div>

            <div className="catBrand flex space-x-4 ">
              {/* category */}
              <div className="category  text-xs ">
                Category :{" "}
                <span className="px-2 py-1 rounded-xl bg-[#D9D9D9]">
                  Mobile
                </span>
              </div>

              {/* Brand */}
              <div className="brand text-xs ">
                Brand :{" "}
                <span className="px-2 py-1 rounded-xl bg-[#D9D9D9]">
                  Samsung
                </span>
              </div>
            </div>
            {/* rating */}
            <div className="rating   ">
              <Rating value={3} />
            </div>
            {/* price */}
            <div className="price text-3xl  lg:text-4xl font-light">
              NPR. 50000 /-
            </div>

            {/* div for after md breakpoint to align items stick to bottom */}
            <div className="space-y-3 lg:space-y-4  flex flex-col lg:absolute bottom-0  lg:w-1/2">
              {/* stock */}
              <div className="text-sm">In Stock : 2</div>
              {/* quantity */}
              <div className="flex items-center border-gray-100">
                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-neutral-500 hover:text-neutral-50">
                  {" "}
                  -{" "}
                </span>
                <input
                  className="h-8 w-8 border bg-white text-center text-xs outline-none"
                  type="number"
                  value="2"
                  min="1"
                />
                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-neutral-500 hover:text-neutral-50">
                  {" "}
                  +{" "}
                </span>
              </div>
              {/* cart button */}
              <div className="button">
                <button className="w-full md:w-full py-2  bg-neutral-700 text-white rounded-md hover:bg-white border hover:border-black hover:text-black hover:opacity-90 hover:duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* product description */}
        <div className="description my-4 lg:my-8 px-2 md:px-0 ">
          <div className="title flex justify-between uppercase font-semibold  text-sm rounded-t-md bg-neutral-300 text-black px-4 py-1 lg:py-2 lg:px-6 border-x-2 border-neutral-900">
            <p>Product Description</p>
            <button className="text-lg lg:text-xl">
              <FaCaretDown />
            </button>
          </div>
          <div className="description border rounded-b-md text-xs lg:text-sm  px-4 lg:px-6 py-2 text-justify">
            This is very good mobile with good hello specs please do not break
            it. This is very good mobile with good specs okay please do not
            break it. This is very good mobile with good hello specs please do
            not break it. This is very good mobile it is alrightwith good specs
            please do not break it. This is very good not good mobile with good
            specs please do not break it. This is very good mobile with good
            hello specs please do not break it. This is very good mobile with
            good specs okay please do not break it. This is very good mobile
            with good hello specs please do not break it. This is very good
            mobile it is alrightwith good specs please do not break it. This is
            very good not good mobile with good specs please do not break it.
          </div>
        </div>
        {/* end of product description */}

        {/* reviews section */}
        <div className="description lg:my-8 px-2 md:px-0  my-8">
          <div className="title flex justify-between uppercase font-semibold  text-sm rounded-t-md bg-neutral-300 text-black px-4 py-1 lg:py-2 lg:px-6 border-x-2 border-neutral-900">
            <p>Reviews</p>
            <button className="text-lg lg:text-xl">
              <FaCaretDown />
            </button>
          </div>
          <div className="description border rounded-b-md text-xs space-y-4 md:text-lg lg:text-sm  px-4 lg:px-6 py-2 text-justify">
            <p>There are no reviews yet.</p>

            <h3 className="font-medium">Write a review</h3>
            <Rating />

            <div className="reviewArea border border-neutral-400 h-20 p-2 ">
              <input type="text" placeholder="Write a comment..." />
            </div>

            <button className="flex  px-10 py-2  bg-neutral-700 text-white rounded-md hover:bg-white border hover:border-black hover:text-black hover:opacity-90 hover:duration-300">
              Submit
            </button>
          </div>
        </div>
        {/* end of reviews */}

        {/* related products */}
        <div className="realted"></div>
        {/* end of related products */}
      </div>
    </>
  );
};

export default ProductDetailPage;
