import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./components/LogIn/Login";
import SignUp from "./components/LogIn/SignUp";
import ErrorPage from "./components/Error/ErrorPage";
import RootLayout from "./routes/RootLayout";
import Products from "./routes/Products";
import ProductDetailPage from "./routes/ProductDetailPage";
import CartPage from "./routes/CartPage";
import Checkout from "./routes/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Products />, index: true },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/products/:id", element: <ProductDetailPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <Checkout /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
