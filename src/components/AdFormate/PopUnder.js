import React from "react";
import { FiExternalLink } from "react-icons/fi";
import pop from '../../assets/under.png';

const PopUnder = () => {
  return (
    <div className="mt-20 flex justify-center gap-20">
      <div class="card bg-primary text-primary-content w-[50%]">
        <img className="" src={pop} alt="" />
      </div>
      <div className="w-[50%] flex flex-col justify-between">
        <div>
          <h3 className="text-secondary mb-8 font-semibold uppercase">
            Pop-under
          </h3>
          <p>
            This is one of the most popular ads. After user’s click, this ad
            opens landing page in behind. So, the user experience is not
            hampered much. This is one of the most popular ads. After user’s
            click, this ad opens landing page in behind. So, the user experience
            is not hampered much. This is one of the most popular ads. After
            user’s click, this ad opens landing page in behind. So, the user
            experience is not hampered much. This is one of the most popular
            ads. After user’s click, this ad opens landing page in behind. So,
            the user experience is not hampered much.
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

export default PopUnder;
