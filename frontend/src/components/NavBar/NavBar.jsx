import React, { useState } from "react";
import { PiShoppingCartFill } from "react-icons/pi";
import { PiUserBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import logo from "../../assets/electroLogo.png";
import { Link } from "react-router-dom";
import Products from "../../routes/Products";
import CartPage from "../../routes/CartPage";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authUser/authUser-action";

const NavBar = () => {
  const { isAuthenticated, userInfo } = useSelector((state) => state.authUser);

  const dispatch = useDispatch();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpenAdmin, setIsDropdownOpenAdmin] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleDropdownAdmin = () =>
    setIsDropdownOpenAdmin(!isDropdownOpenAdmin);

  return (
    <>
      {/* top */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 w-full bg-[#2C2C2C] ">
        <div className="top bg-[#2C2C2C] text-white text-xs h-[30px] md:flex items-center px-4 hidden md:text-sm ">
          Connect with us !!
        </div>

        <div className="bottom bg-[#2C2C2C] text-white text-xs h-[30px] flex justify-center items-center text-center md:text-sm  ">
          Grab the deals !! 15% OFF
        </div>
      </div>

      {/* Middle */}
      <div className="bg-[#D9D9D9] ">
        <div className="mid h-[60px] flex justify-around items-center  bg-[#D9D9D9] max-w-screen-2xl mx-auto  border border-slate-200">
          <Link to={"/"}>
            <img
              src={logo}
              alt=""
              className=" w-30 h-7 mx-12 ml-8 my-2 sm:w-34 sm:h-9 md:w-38 md:h-10 lg:w-40 lg:h-13 "
            />
          </Link>

          {/* Search Bar */}
          <div className="search flex relative items-center  h-[35px]  w-1/2 ">
            <input
              className="rounded-full px-6 w-full h-full drop-shadow-2xl  "
              type="text"
              placeholder="Search "
            ></input>
            <IoIosSearch className="absolute top-2 text-lg right-5  " />
          </div>

          {/* buttons */}

          <div className="right flex items-center  mx-4 space-x-3  ">
            <Link to="/cart">
              <PiShoppingCartFill className=" size-6" />
            </Link>

            <Link to="/login">
              <PiUserBold className="mx-2 size-5 md:hidden" />
            </Link>

            {userInfo && userInfo.isAdmin && (
              <div className="relative inline-block text-left group">
                {" "}
                {/* Add group class */}
                <button
                  onMouseEnter={() => setIsDropdownOpenAdmin(true)} // Consider removing if click is preferred
                  onMouseLeave={() => setIsDropdownOpenAdmin(false)} // Consider removing if click is preferred
                  className="sign hidden text-sm font-medium md:block px-6 py-1 border border-black bg-white hover:bg-white hover:border-white transition-all duration-500"
                >
                  Admin
                </button>
                {/* Conditionally rendering removed, using hidden and group-hover:block for visibility control */}
                <div className="origin-top-right absolute right-0 mt-1 w-30 rounded-md shadow-lg bg-[#2C2C2C] text-white py-1 z-50 hidden group-hover:block">
                  <Link
                    to="/admin/dashboard"
                    className="dropdown-item block px-4 py-2 text-sm hover:bg-white hover:text-black"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/admin/users"
                    className="dropdown-item block px-4 py-2 text-sm hover:bg-white hover:text-black"
                  >
                    Users
                  </Link>
                  <Link
                    to="/admin/products"
                    className="dropdown-item block px-4 py-2 text-sm hover:bg-white hover:text-black"
                  >
                    Products
                  </Link>
                  <Link
                    to="/admin/category"
                    className="dropdown-item block px-4 py-2 text-sm hover:bg-white hover:text-black"
                  >
                    Category
                  </Link>
                  <Link
                    to="/admin/brands"
                    className="dropdown-item block px-4 py-2 text-sm hover:bg-white hover:text-black"
                  >
                    Brand
                  </Link>
                  <Link
                    to="/admin/orders"
                    className="dropdown-item block px-4 py-2 text-sm hover:bg-white hover:text-black"
                  >
                    Orders
                  </Link>
                </div>
              </div>
            )}

            {isAuthenticated && (
              <div className="relative group">
                {" "}
                {/* Parent container as hover target */}
                <button className="log hidden text-sm text-white font-medium md:block bg-[#2C2C2C] px-4 py-1 rounded-sm hover:bg-white border hover:border-black hover:text-black transition-all duration-500">
                  My Account
                </button>
                <div className="dropdown-menu absolute w-24 right-0 mt-1 bg-[#2C2C2C] text-white rounded-md py-1 z-50 hidden group-hover:block">
                  {" "}
                  {/* Use group-hover to show on hover */}
                  <Link
                    to="/userProfile/dashboard"
                    className="block px-4 py-2 text-sm hover:bg-white hover:text-black"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => dispatch(logout())}
                    className="block  px-4 py-2 text-sm hover:bg-white hover:text-black"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}

            {!isAuthenticated && (
              <Link
                to="/login"
                className="log hidden text-sm text-white font-medium md:block bg-[#2C2C2C] px-4 py-1 rounded-sm hover:bg-white border hover:border-black hover:text-black transition-all duration-500"
              >
                LOGIN
              </Link>
            )}

            {!isAuthenticated && (
              <Link
                to="/signup"
                className="sign hidden text-sm font-medium md:block px-4 py-1 border border-black hover:bg-white hover:border-white transition-all duration-500"
              >
                {" "}
                SIGN UP
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
