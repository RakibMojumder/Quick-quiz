import React, { useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Question = ({
  quest,
  indx,
  score,
  setScore,
  wrongScore,
  setWrongScore,
}) => {
  const [isActive, setActive] = useState(false);
  const { options, correctAnswer, question } = quest;
  const [color, setColor] = useState();
  const [color2, setColor2] = useState();

  const findCorrectAns = (e) => {
    const value = e.target.textContent;

    if (value === correctAnswer) {
      Swal.fire("Good job!", "Your answer is correct!", "success");
      score++;
      setScore(score);
      setColor("bg-green-500");
    } else {
      Swal.fire("Ops!", "Your answer is wrong!", "fail");
      wrongScore++;
      setWrongScore(wrongScore);
      setColor2("bg-red-500");
    }
  };

  const showAnswer = () => {
    setActive(!isActive);
  };

  return (
    <div className="border bg-gray-200 rounded-md my-10 px-4 md:px-6 w-[90%] md:w-[60%] mx-auto text-center py-10">
      <p className="mb-8 relative text-lg md:text-2xl">
        <span>
          Quiz-{indx}:
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

      {options.map((option, indx) => {
        return (
          <div
            key={indx}
            className="flex items-center border w-full md:w-3/4 mx-auto rounded-md bg-white"
          >
            <input
              className="ml-4"
              type="radio"
              id={options[indx]}
              name="quiz"
              value={options[indx]}
            />{" "}
            <label
              onClick={(e) => findCorrectAns(e)}
              className="w-full h-full py-2"
              htmlFor={options[indx]}
            >
              {options[indx]}
            </label>
          </div>
        );
      })}

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
