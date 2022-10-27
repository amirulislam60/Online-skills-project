import React from 'react';
import './Home.css'
import { FaBattleNet, FaDelicious, FaWeebly } from "react-icons/fa";
import Hero from '../Components/Hero/Hero';
import Teacher from '../Components/Teacher/Teacher';






const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="service-provide container">
                <h1>Service We are Provide </h1>
                <table>
                    <tr>
                        <td>CEO</td>
                        <td>UI, UX</td>
                        <td>CLOUD</td>
                    </tr>
                </table>
                <ul>
                    <li>
                        < FaBattleNet />
                        <h5>UX/UI DESIGN</h5>
                        <p>UI refers to the screens, buttons, toggles, icons, and other visual elements that you interact with when using a website, app, or other electronic device. UX refers to the entire interaction you have with a product, including how you feel about the interaction.</p>
                    </li>
                    <li>
                        <FaWeebly></FaWeebly>
                        <h5>WEB DESIGN</h5>
                        <p>Go from no-code to an in-demand junior web developer, at a fraction of the cost of a bootcamp. Start with the front-end by learning HTML, CSS, and JavaScript. Then, master the back-end and APIs to round out your full-stack skills.</p>
                    </li>
                    <li>
                        <FaDelicious></FaDelicious>
                        <h5>GRAPHIC DESIGN</h5>
                        <p>This course teaches you the art of graphic design from the ground up and suits novices
                             and those looking to polish their creative skills. We explore the history of 
                             graphic design and examine its theory, .</p>
                    </li>
                </ul>
                <button>VIEW MORE </button>
            </div>
            <Teacher></Teacher>
        </div>
    );
};

export default Home;