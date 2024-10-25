
import React from 'react';
import '../scripts/Contact.css';

const ContactUs = () => {

    return (
        <div>
            <div className="contact-us">
                <h1 className='contact-us-main-heading text-uppercase'>Contact Us</h1>
            </div>

            <div className="contact-us-feedback-form-container">
                <div className="contact-us-feedback-form-container-card">
                    <div className='contact-us-feedback-form-container-card-text'>
                        <h1>Address</h1>
                        <p>Parul University <br /> Post Limda, Waghodia, <br />Gujarat 391760</p>
                    </div>
                    <div className='contact-us-feedback-form-container-card-text'>
                        <h1>Bussiness Hours</h1>
                        <p>Monday - Friday 9am to 4pm  <br /> Saturday - 9am to 12pm , <br />Sunday - Closed</p>
                    </div>
                    <div className='contact-us-feedback-form-container-card-text'>
                        <h1>Telephone</h1>
                        <p>+91 1234567890 <br /> +91 1234567890</p>
                    </div>
                </div>
                <div className="contact-us-feedback-form-container-card">
                    <h2>Feedback Us</h2>
                    <form action="https://formspree.io/f/mvgpyvjr" method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required autoComplete="off" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required autoComplete="off" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea name="Message" placeholder="Enter your Message" rows="5" required autoComplete="off" />
                        </div>
                        <input type="submit" value="Send" className='button' />
                    </form>
                </div>
            </div>


            <div className="contact-us-map">
                <iframe
                    title="Google Maps Embed"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59067.4754755963!2d73.33650111243485!3d22.288699330240693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fda2400192473%3A0xc319c9237f2928e8!2sParul%20University!5e0!3m2!1sen!2sin!4v1725694919792!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    key='iframe1'
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
};

export default ContactUs;