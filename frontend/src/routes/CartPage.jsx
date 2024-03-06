import React from "react";
import { CartCard } from "../components/Cart/CartCard";
import CartSubTotal from "../components/Cart/CartSubTotal";

const CartPage = () => {
  return (
    <>
      <div className="main max-w-screen-xl mx-5 my-4 md:my-10 md:mx-6  lg:mx-10 lg:my-16 xl:mx-auto  ">
        {/* title */}
        <div className="title text-xl md:text-2xl text-center font-medium py-2">
          Cart Items
        </div>

        <div className="twoDivs flex flex-col lg:flex-row justify-between  my-6 md:my-14 lg:max-w-2/3 ">
          {/* products detail titles 1 */}
          <div className="">
            <CartCard />
            <CartCard />
            <CartCard />
          </div>
          {/* subtotal  */}
          <div className="lg:w-1/3">
            <CartSubTotal />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
