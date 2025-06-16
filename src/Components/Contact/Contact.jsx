import React from 'react'
import './Contact.css'
import arrow from '../../assets/arrow_icon.png'
import rightImage from '../../assets/right_img.png'
const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className="contact-container">
                <form action="" class="contact-left">
                    <div className="contact-left-title">
                        <h2>Get in touch</h2>
                        <hr />
                    </div>
                    <input type="text" name='name' placeholder='Your Name' className='contact-inputs' required />
                    <input type="email" name='email' placeholder='Your email' className='contact-inputs' required />
                    <textarea name="message" placeholder='Your Message' className='contact-inputs' required></textarea>
                    <button type='submit'>Submit <img src={arrow} alt="arrow-icon" /></button>
                </form>
                <div className="contact-right">
                    <img src={rightImage} alt="right image" />
                </div>
            </div>

        </div>
    )
}

export default Contact
