import React from "react";

const SectionTitle = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="sm:w-[30%] lg:w-[50%] h-[1px] border-dashed border border-bottom border-gray-400"></div>
      <h2 className="w-[100%] lg:w-[70%] text-center mt-[-20px] text-3xl sm:text-4xl uppercase text-primary">
        {children}
      </h2>
      <div className="sm:w-[30%] lg:w-[50%] h-[1px] border-dashed border border-bottom border-gray-400"></div>
    </div>
  );
};

export default SectionTitle;
