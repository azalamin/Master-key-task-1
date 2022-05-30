import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Available from "./Available";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Slider from "./Slider";
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
      <Slider />
      <Footer />
    </div>
  );
};

export default Home;
