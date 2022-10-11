import React from 'react';
import Header from '../Header/Header';
import Statistics from '../Statistics/Statistics';
import Topics from '../Topics/Topics';
import FAQ from '../FAQ/FAQ.jsx'

const Home = () => {
    return (
        <div>
            <Header />
            <Topics />
            <Statistics />
            <FAQ />
        </div>
    );
};

export default Home;