import React from "react";
import WorkImg from "../assets/projects/WorkImg.png";
import RealEstate from "../assets/projects/realestate.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-red-600">
            Work
          </p>
          <p className="py-6"> Checkout some of my recent work</p>
        </div>
        {/*  CONTAINER */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* GRID ITEM */}
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* HOVER EFFECTS */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="tex-2xl font-bold text-white tracking-wider">
                Vanilla JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://sage-meringue-aa5cca.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/mrtyagi07/Bankist">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${RealEstate})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* HOVER EFFECTS */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="tex-2xl font-bold text-white tracking-wider">
                Boostrap Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://mrtyagi07.github.io/Codingscape/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/mrtyagi07/Codingscape">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
