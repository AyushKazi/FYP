import React from "react";
import { Link } from "react-router-dom";

const CartSubTotal = () => {
  return (
    <>
      <div className="subtotal bg-neutral-200 border-x-2 border-neutral-800 rounded-lg mt-8 lg:mt-0 p-4 lg:px-6  lg:ml-8  ">
        <div className="head font-medium mt-2 mb-4 text-2xl">Cart Total</div>
        <div className="body space-y-6 ">
          <div className="subtotal flex justify-between">
            <p className="">Sub Total</p>
            <p className="">NPR 50000 /-</p>
          </div>

          {/* shipping */}

          <div className="shipping flex justify-between">
            <p>Shipping (Free Shipping)</p>
            <p>NPR 0 /-</p>
          </div>
          <hr className="border border-neutral-500" />

          <div className="grand total">
            <div className="grand total flex justify-between my-8">
              <p className=" text-xl">Grand Total</p>
              <p className=" text-xl">NPR 50000 /-</p>
            </div>
          </div>

          <div className="button">
            <Link to={"/checkout"}>
              <button className="w-full md:w-full py-3 mb-3  bg-neutral-700 text-white rounded-md hover:bg-white border hover:border-black hover:text-black hover:opacity-90 hover:duration-300">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSubTotal;
