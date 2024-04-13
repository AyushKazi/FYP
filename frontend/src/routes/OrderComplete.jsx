import React from "react";
import { Link } from "react-router-dom";

const OrderComplete = () => {
  return (
    <>
      <div className=" my-32">
        <h1 className="flex justify-center text-3xl my-16">
          Thank you for purchasing with us!
        </h1>
        <Link to={"/"}>
          <button className="mx-auto my-8 text-sm text-white font-medium md:block bg-[#2C2C2C] px-6 py-2 rounded-sm hover:bg-white border hover:border-black hover:text-black transition-all duration-500">
            Go to Home
          </button>
        </Link>
        <Link>
          <button className="mx-auto my-8 text-sm text-white font-medium md:block bg-[#2C2C2C] px-6 py-2 rounded-sm hover:bg-white border hover:border-black hover:text-black transition-all duration-500">
            View Order
          </button>
        </Link>
      </div>
    </>
  );
};

export default OrderComplete;
