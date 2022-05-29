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
            {/* <img src={logo} className="max-w-xs" alt="" /> */}
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
              <CustomLink to="/advertiser" className="text-sm">
                ADVERTISER
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/publisher" className="text-sm">
                PUBLISHER
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/influencer" className="text-sm">
                INFLUENCER
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/formate" className="text-sm">
                AD FORMATE
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/contact" className="text-sm">
                CONTACT US
              </CustomLink>
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
