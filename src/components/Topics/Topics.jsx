import React, { useContext } from "react";
import { QuizTopicsContext } from "../../Layout/Main";
import Topic from "../Topic/Topic";

const Topics = () => {
  const quizTopics = useContext(QuizTopicsContext).data;

  return (
    <div className="topics my-32">
      <h1 className="text-2xl uppercase text-center font-semibold mb-10">
        Quiz <span className="text-blue-500">Topics</span>!
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-[65%] gap-8 mx-auto">
        {quizTopics?.map((topic) => (
          <Topic key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
};

export default Topics;
