import React from "react";
import { ImBin } from "react-icons/im";

export const CartCard = () => {
  return (
    <>
      <div className="cartdetails main flex flex-col md:flex-row justify-start  bg-neutral-200 p-6 rounded-lg border-x-2 border-neutral-800 drop-shadow-lg  mb-8 lg:mr-4">
        {/* div grid 1 for image  */}
        <div className="1 flex justify-center  ">
          <div className="image md:w-52 md:max-h-48  rounded-md overflow-hidden border border-blue-">
            <img
              src="https://images.pexels.com/photos/50614/pexels-photo-50614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* div grid 2 for product details */}
        <div className="2  w-full  md:ml-4 ">
          {/* now flex this div as col */}
          <div className="details mt-4 md:mt-0  h-full flex flex-col justify-between gap-4  ">
            {/* flex this name and button div */}
            <div className="nameAndButton flex justify-between  space-y-2   ">
              <div className="name text-xl md:text-2xl font- text-neutral-900 ">
                Samsung Galaxy Edge 7 Samsung Galaxy Edge 7 Samsung Galaxy Edge
                7
              </div>
              <div className="delButton ml-4 text-red-700 hover:text-xl hover:rotate-45 hover:duration-200 font-medium">
                <ImBin />
              </div>
            </div>

            {/* flex this price and qunatity div */}
            <div className="priceAndQuantity flex justify-between items-center my-2   w-full ">
              <div className="price text-xl md:text-2xl ">NPR 50000 /-</div>

              {/* quantiry button */}
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
                  disabled
                />
                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-neutral-500 hover:text-neutral-50">
                  {" "}
                  +{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
