import React from 'react';
import { Outlet } from 'react-router-dom';
import SectionTitle from '../../Shared/SectionTitle';
import AdFormateCustomLink from '../AdFormateCustomLink';
import '../styles.css';

const AdFormate = () => {
    return (
      <section className="mt-20 pb-20">
        <SectionTitle>Versatile ad formats</SectionTitle>
        <div className="flex justify-center gap-20 mt-10">
          <AdFormateCustomLink
            to="/"
            className="btn btn-sm bg-[#F2F2F2] text-black border-0 hover:text-white hover:btn-secondary px-20 rounded-3xl py-2 custom-btn"
          >
            POP-Under
          </AdFormateCustomLink>
          <AdFormateCustomLink
            to="/banner-ad"
            className="btn btn-sm bg-[#F2F2F2] text-black border-0 hover:btn-secondary hover:text-white px-20 rounded-3xl py-2 custom-btn"
          >
            Banner ad
          </AdFormateCustomLink>
          <AdFormateCustomLink
            to="/native"
            className="btn btn-sm bg-[#F2F2F2] text-black border-0 hover:btn-secondary hover:text-white px-20 rounded-3xl py-2 custom-btn"
          >
            Native
          </AdFormateCustomLink>
          <AdFormateCustomLink
            to="/skim"
            className="btn btn-sm bg-[#F2F2F2] text-black border-0 hover:btn-secondary hover:text-white px-20 rounded-3xl py-2 custom-btn"
          >
            Skim
          </AdFormateCustomLink>
        </div>
        <div className="px-5">
          <Outlet />
        </div>
      </section>
    );
};

export default AdFormate;