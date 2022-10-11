import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Quiz = () => {
  const quiz = useLoaderData().data;
  const { name, questions, total } = quiz;
  return (
    <div className="my-32">
      <h1 className="text-center text-3xl uppercase">
        Quiz of <span className="text-blue-500 font-semibold">{name}</span>
      </h1>
      {questions.map((quest, indx) => (
        <Question key={quest.id} indx={indx} quest={quest} />
      ))}
    </div>
  );
};

export default Quiz;
