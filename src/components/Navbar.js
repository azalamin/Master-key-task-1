import React from "react";
import CustomLink from "./CustomLink";

const Navbar = () => {

  return (
    <nav className="px-5">
      <div className="flex justify-between items-center pt-5">
        <div>
          <a
            href="#home"
            className="text-2xl font-['PT Sans', sans-serif] font-bold"
          >
            LOGO
          </a>
        </div>
        <div className="cursor-pointer">
          <span className="text-success">BN</span> / EN
        </div>
      </div>
      <div className="dropdown">
        <label
          tabIndex="0"
          class="btn btn-circle swap swap-rotate mt-5 lg:hidden"
        >
          <input type="checkbox" />
          <svg
            class="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
          <svg
            class="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </label>
        <ul
          tabIndex="0"
          class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <CustomLink to="/" className="text-sm">
              HOME
            </CustomLink>
          </li>
          <li>
            <a
              href="#advertiser"
              className="text-sm hover:text-secondary text-primary"
            >
              ADVERTISER
            </a>
          </li>
          <li>
            <a
              href="#publisher"
              className="text-sm hover:text-secondary text-primary"
            >
              PUBLISHER
            </a>
          </li>
          <li>
            <a
              href="#influencer"
              className="text-sm hover:text-secondary text-primary"
            >
              INFLUENCER
            </a>
          </li>
          <li>
            <a
              href="#formate"
              className="text-sm hover:text-secondary text-primary"
            >
              AD FORMATE
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-sm hover:text-secondary text-primary"
            >
              CONTACT US
            </a>
            <li>
              <a
                href="#btn"
                className="py-1 hover:bg-secondary rounded-3xl uppercase hover:text-white login-btn"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#btn"
                className="py-1 bg-secondary rounded-3xl text-white uppercase sm:ml-3  hover:bg-base-100 hover:text-black custom-btn mt-2 sm:mt-0"
              >
                Sign up
              </a>
            </li>
          </li>
        </ul>
      </div>
      <div className="hidden lg:block">
        <div className="lg:flex justify-around items-center">
          <div>
            <ul className="menu lg:menu-horizontal p-0">
              <li>
                <CustomLink to="/" className="text-sm">
                  HOME
                </CustomLink>
              </li>
              <li>
                <a
                  href="#advertiser"
                  className="text-sm hover:text-secondary text-primary"
                >
                  ADVERTISER
                </a>
              </li>
              <li>
                <a
                  href="#publisher"
                  className="text-sm hover:text-secondary text-primary"
                >
                  PUBLISHER
                </a>
              </li>
              <li>
                <a
                  href="#influencer"
                  className="text-sm hover:text-secondary text-primary"
                >
                  INFLUENCER
                </a>
              </li>
              <li>
                <a
                  href="#formate"
                  className="text-sm hover:text-secondary text-primary"
                >
                  AD FORMATE
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm hover:text-secondary text-primary"
                >
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
          <div className="sm:w-72 flex justify-center mt-10 sm:mt-0">
            <div className="bg-base-100 px-4 py-4 rounded-3xl drop-shadow-lg">
              <a
                href="#btn"
                className="px-6 py-2 hover:bg-secondary rounded-3xl uppercase hover:text-white login-btn block sm:inline-block w-56 sm:w-28"
              >
                Login
              </a>
              <a
                href="#btn"
                className="px-5 py-2 bg-secondary rounded-3xl text-white uppercase sm:ml-3  hover:bg-base-100 hover:text-black custom-btn block sm:inline-block w-56 sm:w-28 mt-5 sm:mt-0"
              >
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
