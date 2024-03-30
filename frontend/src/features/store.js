import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import authUserReducer from "./authUser/authUser-slice";
import tokenReducer from "./token/token-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    authUser: authUserReducer,
    token: tokenReducer,
  },
});

export default store;
