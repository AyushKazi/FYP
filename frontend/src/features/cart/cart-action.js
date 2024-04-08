import { toast } from "react-toastify";
import { addItemToCart, removeItemFromCart, replaceCart } from "./cart-slice";
import localForage from "localforage";

export const addToCart = (item) => async (dispatch, getState) => {
  dispatch(addItemToCart(item));

  // localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  await localForage.setItem("cartItems", getState().cart.cartItems);

  toast.success("Added to cart successfully!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  // dispatch(updateSuccessMessage("Product added to cart successfully!"));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch(removeItemFromCart(id));

  await localForage.setItem("cartItems", getState().cart.cartItems);

  // dispatch(updateSuccessMessage("Product removed from cart successfully!"));
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const cartItemsFromStorage = (await localForage.getItem("cartItems"))
      ? await localForage.getItem("cartItems")
      : [];

    dispatch(replaceCart(cartItemsFromStorage));
  };
};
