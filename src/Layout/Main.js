import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

export const QuizTopicsContext = createContext();

const Main = () => {
    const quizTopics = useLoaderData();
    return (
        <QuizTopicsContext.Provider value={quizTopics}>
            <Navbar />
            <Outlet />
            <Footer />
        </QuizTopicsContext.Provider>
    );
};

export default Main;