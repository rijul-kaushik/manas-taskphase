import React from "react";
import './Home.css'
import sample from '../Images/video1.mp4'
// import Image from 'react-image-resizer';
import image1 from '../Images/mans.png'
import Footer from "../../Footer/Footer";

const Home = () => {
    return(
        <>
        <video className='videoTag' autoPlay loop muted>
            <source src={sample} type='video/mp4' />
        </video>
        <div className="container">
            <a href="https://projectmanas.in/"><img src={image1} alt="Your Image" className="centered-image" /></a>
        </div>
        <Footer />
        </>
    );
};

export default Home