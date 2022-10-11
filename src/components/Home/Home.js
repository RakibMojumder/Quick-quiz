import React from 'react';
import Header from '../Header/Header';
import Statistics from '../Statistics/Statistics';
import Topics from '../Topics/Topics';

const Home = () => {
    return (
        <div>
            <Header />
            <Topics />
            <Statistics />
        </div>
    );
};

export default Home;