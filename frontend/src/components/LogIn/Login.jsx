import React from "react";

export const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center my-10 h-[-100px] ">
        <div className="border border-blue-500 p-4 rounded-lg shadow-2xl w-3/4  ">
          <h1 className="text-xl  mb-4 font-semibold">Login to your account</h1>

          {/* input fields */}
          <div className=" space-y-4">
            {/* email */}
            <input
              type="email"
              id="email"
              className="email border border-slate-400 block rounded-sm w-full py-1 px-2 placeholder:text-sm focus:shadow-lg  focus:outline-slate-400 "
              placeholder="Email"
            />
            {/* password */}
            <input
              type="password"
              id="password"
              className=" border border-slate-400 block rounded-sm w-full py-1 px-2 placeholder:text-sm focus:shadow-lg  focus:outline-slate-400 "
              placeholder="Password"
            />

            <p className="forgot text-xs">Forgot your password?</p>
          </div>
          <button className="login bg-[#2C2C2C] text-white my-2 rounded-sm text-sm p-1 w-full">
            Login
          </button>
          <p className="forgot">Create new account? </p>
        </div>
      </div>
    </>
  );
};
