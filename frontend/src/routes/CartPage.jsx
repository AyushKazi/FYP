import React, { useEffect } from "react";
import { CartCard } from "../components/Cart/CartCard";
import CartSubTotal from "../components/Cart/CartSubTotal";
import { useDispatch, useSelector } from "react-redux";
// import { updateCart } from "../features/cart-slice";

const CartPage = () => {
  const { cartItems, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const cartItems = localStorage.getItem("cart");
  //   if (cartItems) {
  //     dispatch(updateCart({ products: JSON.parse(cartItems) }));
  //   }
  // }, []);

  return (
    <>
      <div className="main max-w-screen-xl mx-5 my-4 md:my-10 md:mx-6  lg:mx-10 lg:my-16 xl:mx-auto  ">
        {/* title */}
        <div className="title text-xl md:text-2xl text-center font-medium py-2">
          Cart Items
        </div>

        <div className="twoDivs flex flex-col lg:flex-row justify-between  my-6 md:my-14  ">
          {/* products detail titles 1 */}
          <div className="w-full">
            {cartItems.map((item, index) => (
              <CartCard key={index} item={item} />
            ))}
          </div>
          {/* subtotal  */}
          <div className="lg:w-2/5">
            <CartSubTotal />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
