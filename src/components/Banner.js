import React from "react";
import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div class="hero min-h-[85vh] bg-[#F8F8F8]">
      <div class="hero-content flex-col lg:flex-row-reverse ">
        <div className="w-[50%] flex justify-center">
          <img src={banner} class="max-w-sm rounded-lg shadow-2xl" alt="" />
        </div>
        <div className="w-[50%]">
          <h1 class="text-5xl font-bold text-primary">Welcome To Our Website</h1>
          <p class="py-6">
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