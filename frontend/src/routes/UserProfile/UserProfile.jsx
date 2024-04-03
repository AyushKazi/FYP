import React from "react";
import Dashboard from "./Dashboard";
import { NavLink, Outlet } from "react-router-dom";
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
      <div className="my-14 mx-20 grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-6 py-6 text-left uppercase font-medium border-2 border-[#D9D9D9] rounded-md">
          {/* Use NavLink for navigation links */}
          <NavLink
            to="/userProfile/dashboard"
            className={({ isActive }) =>
              isActive
                ? "py-2 px-10 bg-[#D9D9D9]"
                : "py-2 px-10 hover:bg-[#D9D9D9] duration-300"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/userProfile/orders"
            className={({ isActive }) =>
              isActive
                ? "py-2 px-10 bg-[#D9D9D9]"
                : "py-2 px-10 hover:bg-[#D9D9D9] duration-300"
            }
          >
            Orders
          </NavLink>
          <NavLink
            to="/userProfile/personalInfo"
            className={({ isActive }) =>
              isActive
                ? "py-2 px-10 bg-[#D9D9D9]"
                : "py-2 px-10 hover:bg-[#D9D9D9] duration-300"
            }
          >
            Personal Info
          </NavLink>
          <div
            className="py-2 px-10 hover:bg-[#D9D9D9] duration-300 cursor-pointer"
            onClick={() => dispatch(logout())}
          >
            LogOut
          </div>
        </div>
        <div className="col-span-2 border-2 border-[#D9D9D9] rounded-sm">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
