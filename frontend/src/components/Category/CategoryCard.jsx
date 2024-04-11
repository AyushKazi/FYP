import React from "react";
import { apiUrl } from "../Product/ProductCard";

const CategoryCard = ({ category }) => {
  const { imagePath } = category;
  return (
    <>
      <div className=" relative max-w-[200px] rounded-md overflow-hidden drop-shadow-lg  ">
        <div className="text-xl text-white font-medium absolute w-full h-full bg-black/50 flex justify-center items-center">
          {category.name}
        </div>
        <img src={`${apiUrl}${imagePath}`} alt="" className="" />
      </div>
    </>
  );
};

export default CategoryCard;
