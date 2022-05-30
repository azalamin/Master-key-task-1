import React from "react";
import CustomLink from "./CustomLink";

const Navbar = () => {
  return (
    <nav className="px-5">
      <div className="flex justify-between items-center pt-3">
        <div>
          <a
            href="#home"
            className="text-2xl font-['PT Sans', sans-serif] font-bold"
          >
            LOGO
          </a>
        </div>
        <div>
          <span className="text-success">BN</span> / EN
        </div>
      </div>
      <div className="flex justify-around items-center">
        <div>
          <ul className="menu menu-horizontal p-0">
            <li>
              <CustomLink to="/" className="text-sm">
                HOME
              </CustomLink>
            </li>
            <li>
              <a href="#advertiser" className="text-sm hover:text-secondary text-primary">
                ADVERTISER
              </a>
            </li>
            <li>
              <a href="#publisher" className="text-sm hover:text-secondary text-primary">
                PUBLISHER
              </a>
            </li>
            <li>
              <a href="#influencer" className="text-sm hover:text-secondary text-primary">
                INFLUENCER
              </a>
            </li>
            <li>
              <a href="#formate" className="text-sm hover:text-secondary text-primary">
                AD FORMATE
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm hover:text-secondary text-primary">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <div className="bg-base-100 px-4 py-4 rounded-3xl drop-shadow-lg">
            <a
              href="#btn"
              className="px-6 py-2 hover:bg-secondary rounded-3xl uppercase hover:text-white login-btn"
            >
              Login
            </a>
            <a
              href="#btn"
              className="px-5 py-2 bg-secondary rounded-3xl text-white uppercase ml-3  hover:bg-base-100 hover:text-black custom-btn"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
