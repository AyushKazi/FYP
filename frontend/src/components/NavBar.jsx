import React from "react";
import { PiShoppingCartFill } from "react-icons/pi";
import { PiUserBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import logo from "../assets/electroLogo.png";

const NavBar = () => {
  return (
    <>
      {/* top */}
      <div className="top bg-slate-800 text-white text-xs py-1  md:text-sm ">
        Connect with us !!
      </div>

      {/* Middle */}
      <div className="mid flex justify-between items-center bg-[#D9D9D9] h-10">
        <img src={logo} alt="" className=" w-24 h-6 mx-2 my-2" />

        {/* Search Bar */}
        <div className="search flex relative  ">
          <input
            className="rounded-xl h-6 my-1 px-2 drop-shadow-2xl placeholder:text-sm sm:w-96 md:w-[450px] lg:w-[700px]"
            type="text"
            placeholder="Search "
          ></input>
          <IoIosSearch className="absolute top-2 right-2 " />
        </div>

        <div className="right flex items-center  mx-2  space-x-3 mr-4">
          <PiShoppingCartFill className=" size-6" />
          <PiUserBold className="mx-2 size-5 md:hidden" />
          <span className="log hidden text-sm font-light md:block">LOGIN</span>
          <span className="sign hidden text-sm font-light md:block">
            {" "}
            SIGN UP
          </span>
        </div>
      </div>

      {/* Bottom */}
      <div className="bottom bg-slate-800 text-white text-xs py-1 text-center md:text-sm  ">
        Grab the deals !! 15% OFF
      </div>
    </>
  );
};

export default NavBar;
