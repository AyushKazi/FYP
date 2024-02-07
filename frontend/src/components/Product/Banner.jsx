import React from "react";
import banner from "../../assets/banner-airpods-pro.jpeg";

const Banner = () => {
  return (
    <div className="max-w-[1400px] h-[400px] w-full m-auto relative border border-red-500 rounded-sm">
      <div
        className="w-full h-full bg-cover bg-center "
        style={{ backgroundImage: `url(${banner})` }}
      ></div>
    </div>
  );
};

export default Banner;
