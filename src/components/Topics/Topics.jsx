import React, { useContext } from "react";
import { QuizTopicsContext } from "../../Layout/Main";
import Topic from "../Topic/Topic";

const Topics = () => {
  const quizTopics = useContext(QuizTopicsContext).data;

  return (
    <div className="topics grid grid-cols-1 lg:grid-cols-2 w-[65%] gap-8 mx-auto my-32">
      {quizTopics?.map((topic) => (
        <Topic key={topic.id} topic={topic} />
      ))}
    </div>
  );
};

export default Topics;
