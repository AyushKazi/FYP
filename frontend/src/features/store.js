import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart/cart-slice";
import authUserReducer from "./authUser/authUser-slice";
import tokenReducer from "./token/token-slice";
import userRegisterReducer from "./userRegister/userRegister-slice";
import productListReducer from "./featuredProducts/productList-slice";

const store = configureStore({
  reducer: {
    //user
    userRegister: userRegisterReducer,
    authUser: authUserReducer,
    token: tokenReducer,

    //cart
    cart: cartReducer,

    //category

    //brand

    //product
    featuredProductList: productListReducer,
  },
});

export default store;
