import { faL } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Question = ({ quest, indx }) => {
  const [isActive, setActive] = useState(false);
  const { options, correctAnswer, question } = quest;
  const removePTag = question.replace(/<p>/g, "");
  const findCorrectAns = (e) => {
    const value = e.target.value;

    if (value === correctAnswer) {
      Swal.fire("Good job!", "Your answer is correct!", "success");
    } else {
      Swal.fire("Ops!", "Your answer is wrong!", "fail");
    }
  };

  // const seeCorrectAns = () => {
  //   for (const option of options) {
  //     if (option === correctAnswer) {
  //       setActive(!isActive);
  //     }
  //   }
  // };

  return (
    <div className="border bg-gray-200 rounded-md my-10 px-4 md:px-10 w-[70%] mx-auto text-center py-10">
      <p className="mb-8 relative text-2xl">
        <span>
          Quiz No-{indx} {removePTag.replace("</p>", "")}
        </span>
        <span
          className="absolute text-lg right-0 -top-7"
          title="see the correct answer"
        >
          <FontAwesomeIcon icon={faEye} />
        </span>
      </p>
      <div className="options flex flex-col">
        <button
          onClick={(e) => findCorrectAns(e)}
          className="option-1 mb-3 border py-2 rounded-md bg-white"
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
            className="option-4 mb-3 border py-2 rounded-md bg-white"
            value={options[3]}
          >
            {options[3]}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Question;
