import React from "react";
import { PiShoppingCartFill } from "react-icons/pi";
import { PiUserBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import logo from "../assets/electroLogo.png";
import { Link } from "react-router-dom";
import Products from "../routes/Products";

const NavBar = () => {
  return (
    <>
      {/* top */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full bg-[#2C2C2C]">
        <div className="top bg-[#2C2C2C] text-white text-xs h-[30px] md:flex items-center px-4 hidden md:text-sm ">
          Connect with us !!
        </div>

        <div className="bottom bg-[#2C2C2C] text-white text-xs h-[30px] flex justify-center items-center text-center md:text-sm  ">
          Grab the deals !! 15% OFF
        </div>
      </div>

      {/* Middle */}
      <div className="mid h-[60px] flex justify-between items-center border border-slate-200 bg-[#D9D9D9] ">
        <img
          src={logo}
          alt=""
          className=" w-30 h-7 mx-4 ml-8 my-2 sm:w-34 sm:h-9 md:w-38 md:h-10 lg:w-40 lg:h-13 border border-black"
        />

        {/* Search Bar */}
        <div className="search flex relative border border-black h-[35px]  w-1/2 ">
          <input
            className="rounded-lg px-4 w-full h-full drop-shadow-2xl placeholder:text-sm "
            type="text"
            placeholder="Search "
          ></input>
          <IoIosSearch className="absolute top-2 right-2 " />
        </div>

        <div className="right flex items-center  mx-2 border border-black  space-x-3 mr-6">
          <Link to="/">
            <PiShoppingCartFill className=" size-6" />
          </Link>

          <Link to="/signup">
            <PiUserBold className="mx-2 size-5 md:hidden" />
          </Link>

          <Link to="/login" className="log hidden text-sm font-light md:block">
            LOGIN
          </Link>
          <Link
            to="/signup"
            className="sign hidden text-sm font-light md:block"
          >
            {" "}
            SIGN UP
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
