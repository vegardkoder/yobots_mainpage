import React from 'react';
import './landing_page.css';
import yobots_logo from './images/yobots_logo.png';

const Landing_Page = ({stateChanger}) => {
    const clickEvent = () => {
        stateChanger("main");
    }

    return (
        <div className="centered" onClick={clickEvent}>
            <div>
                <img src={yobots_logo} className="landing_page_img"/>
                <h2>Click anywhere to enter</h2>
            </div>
        </div>
    )
}

export default Landing_Page;