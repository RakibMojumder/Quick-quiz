import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

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
        className={`score-modal w-[300px] h-[200px] fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] bg-blue-300 transition-all rounded-md flex flex-col justify-center items-center ${
          isOpen ? "show" : "hidden"
        }`}
      >
        <p className="text-xl">
          Your correct ans is
          <span className="text-2xl text-green-700 ml-3 font-bold">
            {score}
          </span>
        </p>

        <p className="text-xl">
          Your wrong ans is{" "}
          <span className="text-2xl text-red-700 ml-3 font-bold">
            {wrongScore}
          </span>
        </p>

        <span
          onClick={() => {
            setOpen(false);
            setScore(0);
            setWrongScore(0);
          }}
          title="close the pop up"
          className="text-xl font-semibold relative top-[-110px] -right-32 cursor-pointer"
        >
          X
        </span>
      </div>
    </div>
  );
};

export default Quiz;
