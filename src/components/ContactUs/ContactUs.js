import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';
import sample from '../Images/video3.mp4';
import Footer from '../../Footer/Footer';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qg81kce', 'template_75kskma', form.current, {publicKey: 'X3SkUb2LvkBb47_6Q',})
            .then(
                () => {
                    console.log('Mail Sent!');
                },
                (error) => {
                    console.log('Mail Not Sent!', error.text);
                },
            );
    };

    return (
        <>
            <video className='videoTag' autoPlay loop muted>
                <source src={sample} type='video/mp4' />
            </video>

            <div className='container'>
                <form className='contact-container' ref={form} onSubmit={sendEmail}>
                    <label className='label' >Name</label>
                    <input className='input-field' type="text" name="user_name" />
                    <label className='label' >Email</label>
                    <input className='input-field' type="email" name="user_email" />
                    <label className='label' >Message</label>
                    <textarea className='textarea-field' name="message" />
                    <input className='button' type="submit" value="Send" />
                </form>
            </div>
            <Footer />
        </>
    );
};

export default ContactUs;
