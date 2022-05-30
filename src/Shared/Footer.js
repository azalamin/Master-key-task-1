import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <span className="text-primary font-semibold text-lg">Services</span>
        <p className="text-xl">Follow us</p>
        <div className="flex justify-center gap-3">
          <AiFillInstagram className="text-3xl bg-red-600 rounded-[50%] p-1 text-white" />
          <AiFillFacebook className="text-3xl bg-red-500 rounded-[50%] p-1 text-[white]" />
          <AiFillYoutube className="text-3xl bg-red-500 rounded-[50%] p-1 text-white" />
        </div>
        <a
          href="#home"
          className="text-2xl font-['PT Sans', sans-serif] font-bold"
        >
          LOGO
        </a>
      </div>
      <div>
        <span className="text-primary font-semibold text-lg uppercase">Links</span>
        <a href="#link" className="link link-hover font-semibold uppercase">
          Advertiser
        </a>
        <a href="#link" className="link link-hover font-semibold uppercase">
          Publisher
        </a>
        <a href="#link" className="link link-hover font-semibold uppercase">
          Influencer
        </a>
        <a href="#link" className="link link-hover font-semibold uppercase">
          Ad Format
        </a>
      </div>
      <div>
        <span className="text-primary font-semibold text-lg">Documentation</span>
        <a href="#link" className="link link-hover font-semibold uppercase">
          Terms & Conditions
        </a>
        <a href="#link" className="link link-hover font-semibold uppercase">
          Privacy Policy
        </a>
        <a href="#link" className="link link-hover font-semibold uppercase">
          CANCELLATION POLICY
        </a>
        <a href="#link" className="link link-hover font-semibold uppercase">
          Blog
        </a>
      </div>
      <div>
        <span className="text-primary font-semibold text-lg">Support</span>
        <a href="#link" className="link link-hover">
          FAQ
        </a>
        <a href="#link" className="link link-hover">
          MEDIA KIT
        </a>
        <a href="#link" className="link link-hover">
          CONTACT US
        </a>
      </div>
    </footer>
  );
};

export default Footer;
