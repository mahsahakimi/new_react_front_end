import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div>
            <h1>
                Play & Learn
            </h1>
            <h3>
                Let’s reach new heights together!
            </h3>
            <Link to="/Signup" id="big-button">Get Started</Link>
        </div>
    );
}

export default Home;