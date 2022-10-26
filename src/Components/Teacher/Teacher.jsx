import React from 'react';
import imgPic from '../../img/Photo-header1.png'
import './Teacher.css'


const Teacher = () => {
    return (
        <div>
            <div className="Creative-team container">
                <div className="ct-head">
                    <h1> Our Creative Team </h1>
                    <p> Lorem ipsum best performance website in the world Lorem ipsum dolar summit against Norendro modi is one of the Greatest Criminal in the world
                    </p>
                </div>
                <div className="ct-content">
                    <ol>
                        <li>
                            <div>
                                <img src={imgPic} alt="" />
                            </div>
                        </li>
                        <li>
                            <div><img src={imgPic} alt="" /></div>
                        </li>
                        <li>
                            <div><img src={imgPic} alt="" /></div>
                        </li>
                        <li>
                            <div ><img src={imgPic} alt="" /></div>
                        </li>
                    </ol>
                </div>
            </div>

        </div>
    );
};

export default Teacher;