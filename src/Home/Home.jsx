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
                        <p>Lorium ipsum is one of the greatest Website ever. There are lot of peple go the website to find out what is they need. Sometime i go there and copy their text</p>
                    </li>
                    <li>
                        <FaWeebly></FaWeebly>
                        <h5>WEB DESIGN</h5>
                        <p>Lorium ipsum is one of the greatest Website ever. There are lot of peple go the website to find out what is they need. Sometime i go there and copy their text</p>
                    </li>
                    <li>
                        <FaDelicious></FaDelicious>
                        <h5>GRAPHIC DESIGN</h5>
                        <p>Lorium ipsum is one of the greatest Website ever. There are lot of peple go the website to find out what is they need. Sometime i go there and copy their text</p>
                    </li>
                </ul>
                <button>VIEW MORE </button>
            </div>
            <Teacher></Teacher>
        </div>
    );
};

export default Home;