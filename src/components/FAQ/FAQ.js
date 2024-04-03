import React, { useState } from 'react';
import './FAQ.css';
import faqs from './FAQ.json';
import sample from '../Images/video1.mp4';
import Footer from '../../Footer/Footer';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
        <video className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>
        <div className="faq-page">
            <div className="faq-container">
                <h1 className="page-heading">Frequently Asked Questions</h1>
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <button className="question" onClick={() => handleToggle(index)}>
                            {faq.question} <span className={`arrow ${openIndex === index ? 'open' : ''}`}>&#9660;</span>
                        </button>
                        {openIndex === index && (
                            <div className="answer">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
        <Footer />
    </>
    );
}

export default FAQ;
