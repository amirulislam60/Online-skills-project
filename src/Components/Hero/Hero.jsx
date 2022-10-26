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
                        <p>Lorium ipsum is one of the biggest site in the world. there so many paragraph
                            for use Demo website</p>
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