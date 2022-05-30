import React from 'react';

const Summary = () => {
    return (
      <section className="bg-primary py-20 mb-28 mt-20">
        <div className="flex justify-center gap-28">
          <div className="border border-dashed rounded-[50%] h-[250px] w-[250px] flex justify-center items-center">
            <div className="text-white text-center">
              <h1 className="text-5xl text-center">1 BN+</h1>
              <p className="py-5 text-xl">Daily Impressions</p>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-[50%] h-[250px] w-[250px] flex justify-center items-center">
              <div className="text-primary text-center">
                <h1 className="text-5xl text-center">$500k+</h1>
                <p className="py-5 text-xl">Paid</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-secondary rounded-[50%] h-[250px] w-[250px] flex justify-center items-center">
              <div className="text-white text-center">
                <h1 className="text-5xl text-center">8k+</h1>
                <p className="py-5 text-xl">Global Publishers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Summary;