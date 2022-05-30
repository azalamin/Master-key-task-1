import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import native from "../../assets/native.png";

const Native = () => {
    return (
      <div className="mt-20 md:flex justify-center gap-20">
        <div className="bg-primary text-primary-content md:w-[50%]">
          <img className='w-full h-full' src={native} alt="" />
        </div>
        <div className="md:w-[50%] flex flex-col justify-between">
          <div>
            <h3 className="text-secondary mb-8 mt-10 md:mt-0 font-semibold uppercase">
              Native
            </h3>
            <p>
              Ad format with the image and the title, that perfectly fits into
              the content of the site. Native ads are placed in the most visible
              areas of the page and, thus, this format shows good results and
              the level of interaction. Ad format with the image and the title,
              that perfectly fits into the content of the site. Native ads are
              placed in the most visible areas of the page and, thus, this
              format shows good results and the level of interaction. Ad format
              with the image and the title, that perfectly fits into the content
              of the site. Native ads are placed in the most visible areas of
              the page and, thus, this format shows good results and the level
              of interaction.
            </p>
          </div>
          <div className="mt-16 flex link-hover text-primary items-center gap-1">
            <p>
              <a className="" href="#link">
                Learn More
              </a>
            </p>
            <FiExternalLink />
          </div>
        </div>
      </div>
    );
};

export default Native;