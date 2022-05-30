import React from "react";
import { Outlet } from "react-router-dom";
import Available from "./Available";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Summary from "./Summary";

const Home = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <header>
        <Navbar />
        <Banner />
      </header>
      <Available />
      <Outlet />
      <Summary />
    </div>
  );
};

export default Home;
