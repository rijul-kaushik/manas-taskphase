import React from 'react';
import './Gallery.css'; 
import images from './images.json';
import sample from '../Images/video1.mp4' 
import Footer from '../../Footer/Footer';

const Gallery = () => {
    return (
        <>
        <video className='videoTag' autoPlay loop muted>
            <source src={sample} type='video/mp4' />
        </video>
    <div className="gallery-container">
        <h1 className="gallery-heading">Gallery</h1>
        <div className="photo-grid">
        {images.map(image => (
            <div className="photo-column" key={image.id}>
            <img
                src={image.src}
                alt={image.alt}
                className="gallery-photo"
            />
            </div>
        ))}
        </div>
    </div>
    <Footer />
    </>
    );
}

export default Gallery;
