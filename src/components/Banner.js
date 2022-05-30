import React from "react";
import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-[90vh] bg-[#F8F8F8]">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="md:w-[50%] flex justify-center">
          <img src={banner} className=" rounded-lg shadow-2xl" alt="" />
        </div>
        <div className="md:w-[50%] text-center sm:text-left">
          <h1 className="text-5xl mt-5 sm:mt-0 font-bold text-primary font-['PT Sans', sans-serif]">
            Welcome To Our Website
          </h1>
          <p className="py-6">
            The term art encompasses diverse media such as painting, sculpture,
            printmaking, drawing, decorative arts, photography, and
            installation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
