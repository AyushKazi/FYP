import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminView = () => {
  return (
    <div>
      <div className="bg-[#2C2C2C] text-white flex justify-center py-10 font-light  text-2xl  ">
        Welcome Admin !
      </div>
      <div className="my-10 mx-20 flex flex-col gap-10  ">
        <div className="flex justify-center  bg-[#D9D9D9]  gap-6 py-6 text-left  uppercase font-medium  max-w-screen-2xl  rounded-md">
          <Link
            to="/admin/dashboard"
            className=" py-2 px-4 hover:bg-white duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/admin/orders"
            className="py-2 px-4 hover:bg-white duration-300"
          >
            Orders
          </Link>
          <Link
            to="/admin/products"
            className="py-2 px-4 hover:bg-white duration-300"
          >
            Products
          </Link>
          <Link
            to="/admin/category"
            className="py-2 px-4 hover:bg-white duration-300"
          >
            Category
          </Link>
          <Link
            to="/admin/brands"
            className="py-2 px-4 hover:bg-white duration-300"
          >
            Brand
          </Link>
          <Link
            to="/admin/users"
            className="py-2 px-4 hover:bg-white duration-300"
          >
            Users
          </Link>
        </div>
        <div className=" rounded-sm  ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminView;
