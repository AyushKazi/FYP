import React from "react";
import Dashboard from "./Dashboard";
import { Link, Outlet } from "react-router-dom";
import Orders from "./Orders";
import { useDispatch } from "react-redux";
import { logout } from "../../features/authUser/authUser-action";

const UserProfile = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="bg-[#2C2C2C] text-white flex justify-center py-10 font-light  text-2xl  ">
        My ElectroHub Account
      </div>
      <div className="my-14 mx-20 grid grid-cols-3  gap-4">
        <div className="flex flex-col gap-6 py-6 text-left  uppercase font-medium border border-black rounded-md">
          <Link
            to="/userProfile/dashboard"
            className=" py-2 px-4 hover:bg-[#D9D9D9] duration-300"
          >
            Dashboard
          </Link>
          <Link
            to="/userProfile/orders"
            className="py-2 px-4 hover:bg-[#D9D9D9] duration-300"
          >
            Orders
          </Link>
          <Link
            to="/userProfile/personalInfo"
            className="py-2 px-4 hover:bg-[#D9D9D9] duration-300"
          >
            Personal Info
          </Link>
          <div
            className="py-2 px-4 hover:bg-[#D9D9D9] duration-300"
            onClick={() => dispatch(logout())}
          >
            LogOut
          </div>
        </div>
        <div className=" col-span-2 border border-black rounded-sm">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
