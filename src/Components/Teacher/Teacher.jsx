import React from 'react';
import png1 from '../../img/1.png'
import png2 from '../../img/2.png'
import png3 from '../../img/4.png'
import png4 from '../../img/vaiya.png'
import './Teacher.css'


const Teacher = () => {
    return (
        <div>
            <div className="Creative-team container">
                <div className="ct-head">
                    <h1> Our Creative Team </h1>
                    <p> Learning computer programming languages has become an essential skill for students. Python, the fastest-growing language of them all, is employed in various sectors ranging from data science and software engineering to mobile app development, artificial intelligence
                        (AI) and machine learning. You can learn this popular coding language from a variety of online platforms.
                    </p>
                </div>
                <div className="ct-content">
                    <ol>
                        <li>
                            <div>
                                <img src={png1} alt="" />
                            </div>
                        </li>
                        <li>
                            <div><img src={png2} alt="" /></div>
                        </li>
                        <li>
                            <div><img src={png3} alt="" /></div>
                        </li>
                        <li>
                            <div ><img src={png4} alt="" /></div>
                        </li>
                    </ol>
                </div>
            </div>

        </div>
    );
};

export default Teacher;