import React, { useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Question = ({ quest, indx }) => {
  const [isActive, setActive] = useState(false);
  const { options, correctAnswer, question } = quest;
  const removePTag = question.replace(/<p>/g, "");

  let count = 0;
  const findCorrectAns = (e) => {
    const value = e.target.value;

    if (value === correctAnswer) {
      Swal.fire("Good job!", "Your answer is correct!", "success");
      count = 1;
    } else {
      Swal.fire("Ops!", "Your answer is wrong!", "fail");
      count = 2;
    }
  };

  const showAnswer = () => {
    setActive(!isActive);
  };

  return (
    <div className="border bg-gray-200 rounded-md my-10 px-4 md:px-6 w-[90%] md:w-[60%] mx-auto text-center py-10">
      <p className="mb-8 relative text-2xl">
        <span>
          Quiz No-{indx}:
          <span className="ml-3">{removePTag.replace("</p>", "")}</span>
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
      <div className="options grid grid-cols-1 md:grid-cols-2 gap-5">
        <button
          onClick={(e) => findCorrectAns(e)}
          className="option-4 mb-3 border py-2 rounded-md bg-white"
          value={options[0]}
        >
          {options[0]}
        </button>

        <button
          onClick={(e) => findCorrectAns(e)}
          className="option-2 mb-3 border py-2 rounded-md bg-white"
          value={options[1]}
        >
          {options[1]}
        </button>
        <button
          onClick={(e) => findCorrectAns(e)}
          className="option-3 mb-3 border py-2 rounded-md bg-white"
          value={options[2]}
        >
          {options[2]}
        </button>
        {options.length === 4 ? (
          <button
            onClick={(e) => findCorrectAns(e)}
            className={`option-4 mb-3 border py-2 rounded-md bg-white`}
            value={options[3]}
          >
            {options[3]}
          </button>
        ) : (
          <button
            onClick={(e) => findCorrectAns(e)}
            className="option-3 mb-3 border py-2 rounded-md bg-white"
            value="None"
          >
            None
          </button>
        )}
      </div>
      {isActive ? (
        <q className="text-lg">
          <span className="italic">The correct answer is </span>
          <span className="font-semibold text-blue-500">{correctAnswer}</span>
        </q>
      ) : null}
    </div>
  );
};

export default Question;
