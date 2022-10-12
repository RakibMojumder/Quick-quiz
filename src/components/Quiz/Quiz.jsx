import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faMultiply } from "@fortawesome/free-solid-svg-icons";

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [wrongScore, setWrongScore] = useState(0);
  const [isOpen, setOpen] = useState(false);
  const quiz = useLoaderData().data;
  const { name, questions } = quiz;

  return (
    <div className="my-32">
      <h1 className="text-center text-3xl uppercase">
        Quiz of <span className="text-blue-500 font-semibold">{name}</span>
      </h1>
      {questions.map((quest, indx) => (
        <Question
          key={quest.id}
          indx={indx}
          quest={quest}
          score={score}
          setScore={setScore}
          wrongScore={wrongScore}
          setWrongScore={setWrongScore}
        />
      ))}

      <div className="text-center">
        <button
          onClick={() => setOpen(true)}
          className="px-6 py-1 bg-blue-500 text-slate-100 rounded-md"
        >
          Tap to see your score
        </button>
      </div>

      <div
        className={`score-modal w-[300px] h-[200px] fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-gray-700 text-white rounded-md flex flex-col justify-center items-center ${
          isOpen ? "show" : "hidden"
        }`}
      >
        <p className="text-lg mt-8">
          Your correct ans is
          <span className="text-2xl text-green-500 ml-3 font-bold">
            {score}
          </span>
        </p>

        <p className="text-lg">
          Your wrong ans is{" "}
          <span className="text-2xl text-red-500 ml-3 font-bold">
            {wrongScore}
          </span>
        </p>

        <div className="relative top-[-122px] -right-24">
          <span
            onClick={() => {
              setOpen(false);
            }}
            title="Minimize pop up"
            className="text-lg px-3 rounded-md  font-semibold cursor-pointer"
          >
            <FontAwesomeIcon icon={faMinus} />
          </span>

          <span
            onClick={() => {
              setOpen(false);
              setScore(0);
              setWrongScore(0);
            }}
            title="close the pop up"
            className="text-lg px-4 rounded-md font-semibold cursor-pointer"
          >
            <FontAwesomeIcon icon={faMultiply} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
