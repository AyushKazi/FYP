import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "./components/LogIn/Login";
import SignUp from "./components/LogIn/SignUp";
import ErrorPage from "./components/Error/ErrorPage";
import RootLayout from "./routes/RootLayout";
import Products from "./routes/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Products />, index: true },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
