import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../.././assets/img/logo.png";

const Navbar = () => {
  return (
    <header className="bg-gray-200">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img className="h-16" src={logo} alt="" />
          <h1 className="text-3xl -ml-3 font-bold">uick Quiz</h1>
        </a>
        <ul className="items-stretch hidden space-x-3 md:flex">
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/home"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/topics"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Topics
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/statistics"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Statistics
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/blog"
              className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <button className="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
