import React from 'react';
import './Sponsors.css';
import images from './images.json';
import sample from '../Images/video1.mp4'
import Footer from '../../Footer/Footer';

const Sponsors = () => {
    return (
    <div className='abuku'>
        <video className='videoTag' autoPlay loop muted>
            <source src={sample} type='video/mp4' />
        </video>

        <div className="table-container">
        <table className="custom-table">
            <tbody>
            {[...Array(4)].map((row, rowIndex) => (
                <tr key={rowIndex}>
                {[...Array(5)].map((cell, cellIndex) => {
                  const index = rowIndex * 4 + cellIndex;
                    const image = images[index];
                    return (
                    <td key={cellIndex}>
                        {image && (
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="cell-image"
                        />
                        )}
                    </td>
                    );
                })}
                </tr>
            ))}
            </tbody>
        </table>
        </div>
        <Footer />
    </div>
    );
}

export default Sponsors;
