import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <>
      <div className=" relative max-w-[200px] rounded-md overflow-hidden drop-shadow-lg  ">
        <div className="text-xl text-white font-medium absolute w-full h-full bg-black/50 flex justify-center items-center">
          {category.cat_name}
        </div>
        <img src={category.cat_image} alt="" className="" />
      </div>
    </>
  );
};

export default CategoryCard;
