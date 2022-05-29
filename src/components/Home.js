import React from "react";
import Available from "./Available";
import Banner from "./Banner";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <header>
        <Navbar />
        <Banner />
      </header>
      <Available />
    </div>
  );
};

export default Home;
