import React from "react";
import { NavLink, useRouteError } from "react-router-dom";
import errorImg from "../../assets/img/error-img.png";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="error-img">
        <img className="w-44" src={errorImg} alt="" />
      </div>
      <p className="my-4 text-5xl font-bold">{error.status}</p>
      <p className="text-lg">
        This Page is {error.statusText || error.message}
      </p>
      <NavLink
        to="/home"
        className="py-2 px-8 bg-blue-500 text-white rounded-lg mt-3"
      >
        Back To Home
      </NavLink>
    </div>
  );
};

export default ErrorPage;
