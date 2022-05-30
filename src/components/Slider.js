import React, { useEffect, useState } from "react";

const Slider = () => {
  const [increase, setIncrease] = useState(1);
  const [decrease, setDecrease] = useState(4);
  useEffect(() => {
    if (increase === 4) {
      setIncrease(1);
    }
    if (decrease === 1) {
      setDecrease(4);
    }
  }, [increase, decrease]);
  console.log("increase", increase);
  console.log("decrease", decrease);
  return (
    <div>
      <div class="carousel w-full">
        <div id="item1" class="carousel-item w-full py-20">
          <div className="flex justify-center items-center gap-10 mx-auto">
            <div className="custom-shadow bg-white p-3 rounded-3xl w-[40%]">
              <div class="card card-side bg-base-100 border border-dashed border-red-500">
                <figure>
                  <img
                    className="p-4"
                    src="https://api.lorem.space/image/movie?w=200&h=280"
                    alt="Movie"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    Strong technical knowledge with quantitative aptitude
                  </h2>
                  <p>Click the button to watch on Jetflix app.</p>
                </div>
              </div>
            </div>
            <div className="custom-shadow bg-white p-3 rounded-3xl w-[40%]">
              <div class="card card-side bg-base-100 border border-dashed border-red-500">
                <figure>
                  <img
                    className="p-4"
                    src="https://api.lorem.space/image/movie?w=200&h=280"
                    alt="Movie"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    Proficient in MIS with great reporting and organizational
                    skills
                  </h2>
                  <p>Click the button to watch on Jetflix app.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="item2" class="carousel-item w-full">
          <div className="flex justify-center items-center gap-10 mx-auto">
            <div className="custom-shadow bg-white p-3 rounded-3xl w-[40%]">
              <div class="card card-side bg-base-100 border border-dashed border-red-500">
                <figure>
                  <img
                    className="p-4"
                    src="https://api.lorem.space/image/movie?w=200&h=280"
                    alt="Movie"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    Flair for creating creative content out of regular
                  </h2>
                  <p>Click the button to watch on Jetflix app.</p>
                </div>
              </div>
            </div>
            <div className="custom-shadow bg-white p-3 rounded-3xl w-[40%]">
              <div class="card card-side bg-base-100 border border-dashed border-red-500">
                <figure>
                  <img
                    className="p-4"
                    src="https://api.lorem.space/image/movie?w=200&h=280"
                    alt="Movie"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    A result-oriented financial analyst seeking to work{" "}
                  </h2>
                  <p>Click the button to watch on Jetflix app.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="item3" class="carousel-item w-full">
          <div className="flex justify-center items-center gap-10 mx-auto">
            <div className="custom-shadow bg-white p-3 rounded-3xl w-[40%]">
              <div class="card card-side bg-base-100 border border-dashed border-red-500">
                <figure>
                  <img
                    className="p-4"
                    src="https://api.lorem.space/image/movie?w=200&h=280"
                    alt="Movie"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    Great at developing unique designs as per the latest trends
                  </h2>
                  <p>Click the button to watch on Jetflix app.</p>
                </div>
              </div>
            </div>
            <div className="custom-shadow bg-white p-3 rounded-3xl w-[40%]">
              <div class="card card-side bg-base-100 border border-dashed border-red-500">
                <figure>
                  <img
                    className="p-4"
                    src="https://api.lorem.space/image/movie?w=200&h=280"
                    alt="Movie"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    Expertise in creating aesthetic spaces for bedrooms
                  </h2>
                  <p>Click the button to watch on Jetflix app.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="item4" class="carousel-item w-full">
          <div className="flex justify-center items-center gap-10 mx-auto">
            <div className="custom-shadow bg-white p-3 rounded-3xl w-[40%]">
              <div class="card card-side bg-base-100 border border-dashed border-red-500">
                <figure>
                  <img
                    className="p-4"
                    src="https://api.lorem.space/image/movie?w=200&h=280"
                    alt="Movie"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    Skilled at planning tours for both individuals
                  </h2>
                  <p>Click the button to watch on Jetflix app.</p>
                </div>
              </div>
            </div>
            <div className="custom-shadow bg-white p-3 rounded-3xl w-[40%]">
              <div class="card card-side bg-base-100 border border-dashed border-red-500">
                <figure>
                  <img
                    className="p-4"
                    src="https://api.lorem.space/image/movie?w=200&h=280"
                    alt="Movie"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    Internship experience with a leading travel company
                  </h2>
                  <p>Click the button to watch on Jetflix app.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center w-full py-10 gap-2 my-10">
        <a
          href={`#item${increase}`}
          onClick={() => setIncrease(increase + 1)}
          class="bg-white text-3xl w-10 h-10 text-center text-primary custom-btn rounded-[50%] mr-10 font-semibold"
        >
          {"<"}
        </a>
        <a
          href={`#item${decrease}`}
          onClick={() => setDecrease(decrease - 1)}
          class="bg-white text-3xl w-10 h-10 text-center text-primary custom-btn rounded-[50%] font-semibold"
        >
          {">"}
        </a>
      </div>
    </div>
  );
};

export default Slider;