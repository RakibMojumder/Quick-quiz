import React, { useContext } from "react";
import { QuizTopicsContext } from "../../Layout/Main";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const quizTopic = useContext(QuizTopicsContext).data;

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-10 font-semibold uppercase">
        Quiz Total <span className="text-blue-500">StatisTics</span>
      </h1>
      <ResponsiveContainer width="70%" height={400}>
        <LineChart data={quizTopic}>
          <Line type="monotone" dataKey="total" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Statistics;
