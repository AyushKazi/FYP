import React from "react";

export const Login = () => {
  return (
    <>
      <div className="h-[500px]">
        <input type="text" className="email" />
        <input type="text" className="password" />
        <p className="forgot">Forgot your password?</p>
        <button className="login"></button>
        <p className="forgot">Create new account? Sign Up</p>
      </div>
    </>
  );
};
