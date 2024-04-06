import React from "react";

const CategoryCard = ({ category }) => {
  return (
    <>
      <div className=" relative max-w-[200px] rounded-md overflow-hidden drop-shadow-lg  ">
        <div className="text-xl text-white font-medium absolute w-full h-full bg-black/50 flex justify-center items-center">
          {category.name}
        </div>
        <img src={category.imagePath} alt="" className="" />
      </div>
    </>
  );
};

export default CategoryCard;
