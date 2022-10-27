import React from 'react';
import headerimg from '../../img/Photo-header1.png'
import './Hero.css'


const Hero = () => {
    return (
        <div>
            <div className="header">
                <div className="header-content container">
                    <div className="hc-left">
                        <h4>Online Course</h4>
                        <h1>Grow Your Experience <br /> And Programing Knowledge With Us</h1>
                        <p>Everyone’s talking about coding, but where do you start? This path will give you an introduction to the world of code and basic concepts. By the end, you’ll know whether Data Science, Computer Science or Web Development is right for you.</p>
                        <ul>
                            <li>Learn More</li>
                            <li>Get Started</li>
                        </ul>
                    </div>
                    <div className="hc-right">
                        <img src={headerimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;