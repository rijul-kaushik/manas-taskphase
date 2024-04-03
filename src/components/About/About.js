import React from 'react';
import './About.css'; 
import imagex from '../Images/manas team pic.jpg'
import imagey from '../Images/Seraphim.jpeg'
import Footer from '../../Footer/Footer';

const About = () => {
    return (
    <body>
        <div className="about-container">
        <h1 className="about-heading">About Us</h1>
        <h2 className="question">Who are we?</h2>
        <p className="about-description">Project MANAS is the official AI and Robotics team of MAHE, Manipal established in 2014. We are the Grand Prize winners and won the Lescoe Cup at the Intelligent Ground Vehicle Competition which is held at Michigan. Our aim is to build India’s first driverless car and are among the top 13 participants in the Mahindra’s Rise Prize challenge.</p>


        <h2 className="question">Vision</h2>
        <p className="about-description">Project MANAS aims to inspire advanced research in Artificial Intelligence and oversee its implementation enabling automated systems to be made available to general populous.</p>

        <h2 className="question">Mission</h2>
        <p className="about-description">Our mission is to uphold the tradition of pushing the limits of Artificial Intelligence and Bringing Bits to Life.</p>

        <div className="image-container">
        <img src={imagex} alt="Image" className="about-image" />
        <img id='abc' src={imagey} alt="Image" className="about-image" />
        </div>
        </div>
        <Footer />
    </body>
    );
}

export default About;
