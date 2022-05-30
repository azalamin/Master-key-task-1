import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import bannerAd from '../../assets/add.png';

const BannerAd = () => {
    return (
      <div className="mt-20 md:flex justify-center gap-20">
        <div className="bg-primary text-primary-content md:w-[50%]">
          <img className="w-full h-full" src={bannerAd} alt="" />
        </div>
        <div className="md:w-[50%] flex flex-col justify-between">
          <div>
            <h3 className="text-secondary mb-8 mt-10 md:mt-0 font-semibold uppercase">
              Banner Ad
            </h3>
            <p>
              A web banner or banner ad is a form of advertising on the World
              Wide Web delivered by an ad server. This form of online
              advertising entails embedding an advertisement into a web page. It
              is intended to attract traffic to a website by linking to the
              website of the advertiser. A web banner or banner ad is a form of
              advertising on the World Wide Web delivered by an ad server. This
              form of online advertising entails embedding an advertisement into
              a web page. It is intended to attract traffic to a website by
              linking to the website of the advertiser.
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

export default BannerAd;