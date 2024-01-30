import React from "react";

export const Login = () => {
  return (
    <>
      <div className="flex border border-red-600  justify-center items-center my-10 h-[-100px] ">
        <div className="border  py-4 px-6 rounded-lg shadow-2xl w-3/4 sm:max-w-prose space-y-5 md:max-w-prose  lg:max-w-prose  ">
          <h1 className="text-xl  mb-4 font-semibold">Login to your account</h1>

          {/* input fields */}
          <div className=" space-y-6">
            {/* email */}
            <input
              type="email"
              id="email"
              className="email border border-slate-400 block rounded-sm w-full py-2 px-2 placeholder:text-sm md:placeholder:text-base focus:shadow-lg  focus:outline-slate-400 "
              placeholder="Email"
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
          </div>
          <div>
            <a href="#" className="forgot text-xs underline underline-offset-1">
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="login bg-[#2C2C2C] text-white my-4 rounded-sm text-sm md:text-base py-2 w-full shadow-lg hover:bg-black"
          >
            Login
          </button>
          <div className="text-xs">
            <p className="forgot">
              Create new account?{" "}
              <a href="#" className="signup underline underline-offset-1">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
