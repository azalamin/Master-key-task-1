import React from 'react';
import { FaPaperPlane, FaPodcast } from "react-icons/fa";
import { ImBullhorn } from "react-icons/im";
import SectionTitle from '../Shared/SectionTitle';
import './styles.css';

const Available = () => {
    return (
      <section>
        <SectionTitle>Available for everyone</SectionTitle>
        <h3 className="text-center py-3 text-xl">
          Filler text characteristics{" "}
        </h3>
        <div className="px-5 flex justify-center item-center mt-20 pb-20 gap-28">
          <div className="">
            <div className="bg-white rounded-[50%] p-10 border-2">
              <ImBullhorn className="text-[60px] text-[#1D4999]" />
            </div>
            <h3 className="text-center mt-5">Text 1</h3>
            <button className="btn btn-primary btn-sm w-full rounded-3xl my-10 text-white custom-btn">
              Hello 1
            </button>
          </div>
          <div>
            <div className="bg-white rounded-[50%] p-10 border-2">
              <FaPaperPlane className="text-[60px] text-[#1D4999]" />
            </div>
            <h3 className="text-center mt-5">Text 1</h3>
            <button className="btn btn-primary btn-sm w-full rounded-3xl my-10 text-white custom-btn">
              Hello 1
            </button>
          </div>
          <div>
            <div className="bg-white rounded-[50%] p-10 border-2">
              <FaPodcast className="text-[60px] text-[#1D4999]" />
            </div>
            <h3 className="text-center mt-5">Text 1</h3>
            <button className="btn btn-primary btn-sm w-full rounded-3xl my-10 text-white custom-btn">
              Hello 1
            </button>
          </div>
        </div>
      </section>
    );
}

export default Available;