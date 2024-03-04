import React from "react";

const CategoryCard = () => {
  return (
    <>
      <div className=" relative max-w-[200px] rounded-md overflow-hidden drop-shadow-lg  ">
        <div className="text-xl text-white font-medium absolute w-full h-full bg-black/50 flex justify-center items-center">
          Mobile Phones
        </div>
        <img
          src="https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="object-fill"
        />
      </div>
    </>
  );
};

export default CategoryCard;
