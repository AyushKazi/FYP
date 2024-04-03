import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart/cart-slice";
import authUserReducer from "./authUser/authUser-slice";
import tokenReducer from "./token/token-slice";
import userRegisterReducer from "./userRegister/userRegister-slice";

const store = configureStore({
  reducer: {
    userRegister: userRegisterReducer,
    cart: cartReducer,
    authUser: authUserReducer,
    token: tokenReducer,
  },
});

export default store;
