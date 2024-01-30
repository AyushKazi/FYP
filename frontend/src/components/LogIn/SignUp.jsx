import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="flex border border-red-600  justify-center items-center my-10 h-[-100px] ">
        <div className="border   px-6 py-4 rounded-lg shadow-2xl w-3/4 sm:max-w-screen-sm space-y-5 md:max-w-prose  lg:max-w-prose   ">
          <h1 className="text-xl  mb-4 font-semibold">Sign Up</h1>

          {/* input fields */}
          <div className="names grid grid-cols-2 space-x-2 border border-red-500 ">
            <input
              type="firstName"
              id="firstName"
              className="firstName border border-slate-400  rounded-sm w-full py-2 px-2 placeholder:text-sm md:placeholder:text-base focus:shadow-lg  focus:outline-slate-400 "
              placeholder="First Name"
              required
            />
            <input
              type="Last Name"
              id="Last Name"
              className="Last Name border border-slate-400 block rounded-sm w-full py-2 px-2 placeholder:text-sm md:placeholder:text-base focus:shadow-lg  focus:outline-slate-400 "
              placeholder="Last Name"
              required
            />
          </div>

          <div className=" space-y-6">
            {/* email */}
            <input
              type="email"
              id="email"
              className="email border border-slate-400 block rounded-sm w-full py-2 px-2 placeholder:text-sm md:placeholder:text-base focus:shadow-lg  focus:outline-slate-400 "
              placeholder="Email"
              required
            />

            {/* contact */}
            <input
              type="number"
              id="contact"
              className="contact border border-slate-400 block rounded-sm w-full py-2 px-2 placeholder:text-sm md:placeholder:text-base focus:shadow-lg  focus:outline-slate-400 "
              placeholder="Contact Number"
              required
            />
            {/* password */}
            <input
              type="password"
              id="password"
              className=" border border-slate-400 block rounded-sm w-full py-2 px-2 placeholder:text-sm md:placeholder:text-base focus:shadow-lg  focus:outline-slate-400 "
              placeholder="Password"
              required
            />
            <input
              type="c-password"
              id="c-password"
              className=" border border-slate-400 block rounded-sm w-full py-2 px-2 placeholder:text-sm md:placeholder:text-base focus:shadow-lg  focus:outline-slate-400 "
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="flex items-center ">
            <input type="checkbox" className="" />
            <label htmlFor="checkbox" className="text-xs mx-2">
              Sign Up for newsletter
            </label>
          </div>
          <button
            type="submit"
            className="signup bg-[#2C2C2C] text-white my-4 rounded-sm text-sm md:text-base py-2 w-full shadow-lg hover:bg-black"
          >
            Sign Up
          </button>
          <div className="text-xs flex justify-center">
            <p className="forgot">
              Already have a account?{" "}
              <a href="#" className="signup underline underline-offset-1">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
