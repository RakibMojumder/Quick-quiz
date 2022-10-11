import { faL } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Swal from "sweetalert2";

const Question = ({ quest, indx }) => {
  const { options, correctAnswer, question } = quest;

  // console.log(quest);

  const findCorrectAns = (e) => {
    const value = e.target.value;

    if (value === correctAnswer) {
      Swal.fire("Good job!", "Your answer is correct!", "success");
    } else {
      Swal.fire("Ops!", "Your answer is wrong!", "fail");
    }
  };

  return (
    <div className="border bg-gray-200 rounded-md my-10 px-4 md:px-10 w-[70%] mx-auto text-center py-10">
      <p className="mb-8">
        <span>
          Quiz No - {indx} {question}
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
        <button
          onClick={(e) => findCorrectAns(e)}
          className="option-4 mb-3 border py-2 rounded-md bg-white"
          value={options[3]}
        >
          {options[3]}
        </button>
      </div>
    </div>
  );
};

export default Question;
