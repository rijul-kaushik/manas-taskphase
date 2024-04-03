import React, { useState } from 'react';
import './Projects.css';
import images from './images.json';
import popupContent from './popupContent.json';
import sample from '../Images/video.mp4'
import Footer from '../../Footer/Footer';

const Projects = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleClosePopup = () => {
        setSelectedImage(null);
    };

    return (
        <div><video className='videoTag' autoPlay loop muted>
            <source src={sample} type='video/mp4' />
        </video>
        <div className="grid-page">
            <h1 className="page-heading">Grid Page</h1>
            <div className="grid-container">
                {images.map(image => (
                    <div key={image.id} className="grid-item" onClick={() => handleImageClick(image)}>
                        <img src={image.url} alt={image.alt} />
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close" onClick={handleClosePopup}>&times;</span>
                        <h2>{popupContent[selectedImage.id - 1].title}</h2>
                        <p>{popupContent[selectedImage.id - 1].paragraph}</p>
                    </div>
                </div>
            )}
        </div>
        <Footer />
    </div>
    );
}

export default Projects;
