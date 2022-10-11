import React, { useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Question = ({ quest, indx }) => {
  const [isActive, setActive] = useState(false);
  const { options, correctAnswer, question } = quest;

  const findCorrectAns = (e) => {
    const value = e.target.textContent;

    if (value === correctAnswer) {
      Swal.fire("Good job!", "Your answer is correct!", "success");
    } else {
      Swal.fire("Ops!", "Your answer is wrong!", "fail");
    }
  };

  const showAnswer = () => {
    setActive(!isActive);
  };

  return (
    <div className="border bg-gray-200 rounded-md my-10 px-4 md:px-6 w-[90%] md:w-[60%] mx-auto text-center py-10">
      <p className="mb-8 relative text-lg md:text-2xl">
        <span>
          Quiz No-{indx}:
          <span className="ml-3">{question.replace(/(<([^>]+)>)/gi, "")}</span>
        </span>
        <span
          onClick={showAnswer}
          className="absolute text-lg right-0 -top-7"
          title="see the correct answer"
        >
          {isActive ? (
            <FontAwesomeIcon icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon icon={faEye} />
          )}
        </span>
      </p>
      <div className="options grid grid-cols-1 gap-3">
        <div className="flex items-center border w-full md:w-3/4 mx-auto rounded-md bg-white">
          <input
            className="ml-4"
            type="radio"
            id={options[0]}
            name="quiz"
            value={options[0]}
          />
           {" "}
          <label
            onClick={(e) => findCorrectAns(e)}
            className="w-full h-full py-2"
            htmlFor={options[0]}
          >
            {options[0]}
          </label>
        </div>

        <div className="flex items-center border w-full md:w-3/4 mx-auto rounded-md bg-white">
          <input
            className="ml-4"
            type="radio"
            id={options[1]}
            name="quiz"
            value={options[1]}
          />
           {" "}
          <label
            onClick={(e) => findCorrectAns(e)}
            className="w-full h-full py-2"
            htmlFor={options[1]}
          >
            {options[1]}
          </label>
        </div>

        <div className="flex items-center border w-full md:w-3/4 mx-auto rounded-md bg-white">
          <input
            className="ml-4"
            type="radio"
            id={options[2]}
            name="quiz"
            value={options[2]}
          />
           {" "}
          <label
            onClick={(e) => findCorrectAns(e)}
            className="w-full h-full py-2"
            htmlFor={options[2]}
          >
            {options[2]}
          </label>
        </div>

        {options.length === 4 ? (
          <div className="flex items-center border w-full md:w-3/4 mx-auto rounded-md bg-white">
            <input
              className="ml-4"
              type="radio"
              id={options[3]}
              name="quiz"
              value={options[3]}
            />
             {" "}
            <label
              onClick={(e) => findCorrectAns(e)}
              className="w-full h-full py-2"
              htmlFor={options[3]}
            >
              {options[3]}
            </label>
          </div>
        ) : null}
      </div>

      {isActive ? (
        <div className="mt-6">
          <q className="text-lg">
            <span className="italic">The correct answer is </span>
            <span className="font-semibold text-blue-500">{correctAnswer}</span>
          </q>
        </div>
      ) : null}
    </div>
  );
};

export default Question;
