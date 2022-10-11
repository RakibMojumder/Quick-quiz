import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  const navigate = useNavigate();
  const handlePracticeQuiz = (id) => {
    navigate(`/topics/${id}`);
  };

  return (
    <div className="topic border rounded-xl">
      <div className="topic-img bg-blue-100 rounded-tr-xl rounded-tl-xl">
        <img className="h-72 w-full" src={logo} alt="" />
      </div>
      <div className="topic-description flex flex-col md:flex-row justify-between items-center my-5 px-4">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="my-3 md:my-0">Total: {total}</p>
        <button
          onClick={() => handlePracticeQuiz(id)}
          className="bg-blue-400 text-slate-100 px-3 md:px-5 py-1 rounded-md"
        >
          Start Practice
          <span className="ml-2">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Topic;
