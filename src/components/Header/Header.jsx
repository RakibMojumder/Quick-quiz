import React from "react";
import { NavLink } from "react-router-dom";
import headerImg from "../../assets/img/header-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="px-4 my-0 md:my-10 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <div></div>
            <h2 className="max-w-lg mb-6 font-sans text-center md:text-left font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              <span className="text-2xl block">Welcome To</span>
              <span className="text-5xl">
                Quick Quiz <br /> Explore New Thing
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Here you can further enhance your acquired knowledge and test
              yourself how much your know these topic
            </p>
          </div>
          <div className="text-center md:text-left">
            <NavLink
              to="/topics"
              className="bg-blue-500 px-8 py-2 rounded-md text-white"
            >
              Go To Topics{" "}
              <span className="ml-2">
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </NavLink>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <img className="" src={headerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
