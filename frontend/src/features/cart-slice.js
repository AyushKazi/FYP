import { createSlice } from "@reduxjs/toolkit";

const defaultProduct = {
  name: "",
  id: 0,
  quantity: 0,
};

const initialState = {
  subTotal: 0,
  totalProduct: 0,
  products: [],
  shippingCharge: 0,
  grandTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productToAdd = action.payload.product;
      state.products = [...state.products, productToAdd];
    },
    removeProduct: (state, action) => {},
    updateCart: (state, action) => {},
    resetCart: () => {
      return initialState;
    },
  },
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
