import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import pop from "../../assets/pop.png";

const Skim = () => {
    return (
      <div className="mt-20 md:flex justify-center gap-20">
        <div class="bg-primary text-primary-content md:w-[50%]">
          <img className="w-full h-full" src={pop} alt="" />
        </div>
        <div className="md:w-[50%] flex flex-col justify-between">
          <div>
            <h3 className="text-secondary mb-8 mt-10 md:mt-0 font-semibold uppercase">
              Skim
            </h3>
            <p>
              SKIM" is a link that a publisher inserts on a specific site
              element, and after clicking on it, an advertisement appears to the
              user. SKIM gives 100% control of your sold traffic amount, higher
              CR to advertisers and CPM rates to publishers. SKIM" is a link
              that a publisher inserts on a specific site element, and after
              clicking on it, an advertisement appears to the user. SKIM gives
              100% control of your sold traffic amount, higher CR to advertisers
              and CPM rates to publishers. SKIM" is a link that a publisher
              inserts on a specific site element, and after clicking on it, an
              advertisement appears to the user. SKIM gives 100% control of your
              sold traffic amount, higher CR to advertisers and CPM rates to
              publishers.
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

export default Skim;