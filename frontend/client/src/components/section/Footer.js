import React from 'react';
import { NavLink } from 'react-router-dom';
import '../scripts/Footer.css';

const Footer = ({ isLoginIn }) => {

    return (
        <footer>
            <div className='footer-top'>
                <div className="contact-info-container">
                    <h1>Contact Info</h1>
                    <div className="contact-info-container-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                        </svg>
                        <p>Address: Parul University</p>
                    </div>
                    <div className="contact-info-container-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe-central-south-asia" viewBox="0 0 16 16">
                            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.882 1.731a.48.48 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.7.7 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a1 1 0 0 0-.462-.04 7 7 0 0 1 2.45-2.027m-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.8.8 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.45.45 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282l.04-.001a7.003 7.003 0 0 1-12.658.905Z" />
                        </svg>
                        <p> Waghodia, Gujarat 391760</p>
                    </div>
                    <div className="contact-info-container-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                        </svg>
                        <p>Phone: +91 9876543210</p>
                    </div>
                    <div className="contact-info-container-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                        </svg>
                        <p>Mobile: +91 9876543210</p>
                    </div>
                    <div className="contact-info-container-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
                            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z" />
                            <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                        </svg>
                        <p>Email: </p>
                    </div>
                </div>
                <div className="project-links-container">
                    <h1>Project Links</h1>
                    <ul>
                        <li>
                            <p>&gt;</p>
                            <NavLink to={'/'}>
                                Home
                            </NavLink>
                        </li>
                        <hr />
                        {isLoginIn && (
                            <>
                                <li>
                                    <p>&gt;</p>
                                    <NavLink to={'/adminstration'}>
                                        Disease Prediction
                                    </NavLink>
                                </li>
                                <hr />
                            </>
                        )}
                        {isLoginIn && (
                            <>
                                <li>
                                    <p>&gt;</p>
                                    <NavLink to={'/hospitals'}>
                                    Hospitals
                                    </NavLink>
                                </li>
                                <hr />
                            </>
                        )}
                        <li>
                            <p>&gt;</p>
                            <NavLink to={'/about'}>
                                About
                            </NavLink>
                        </li>
                        <hr />
                        {!isLoginIn && (
                            <>
                                <li>
                                    <p>&gt;</p>
                                    <NavLink to="/register">Register</NavLink>
                                </li>
                                <hr />
                            </>
                        )}
                        {!isLoginIn && (
                            <>
                                <li>
                                    <p>&gt;</p>
                                    <NavLink to="/login">Login</NavLink>
                                </li>
                                <hr />
                            </>
                        )}
                        {isLoginIn && (
                            <>
                                <li>
                                    <p>&gt;</p>
                                    <NavLink to="/logout">Logout</NavLink>
                                </li>
                                <hr />
                            </>
                        )}
                        <li>
                            <p>&gt;</p>
                            <NavLink to={'/contact'}>
                                Contact Us
                            </NavLink>
                        </li>
                        <hr />
                    </ul>
                </div>
                <div className='about-project-container'>
                    <h1>About Project</h1>
                    <p>Healthcare industry has huge amount of data that contains hidden information. This information supports decision making process on related area. In this research paper, we discussed various approaches of data mining which are useful in predicting the disease disease.</p>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className="copyright">
                    &copy; Copyright {new Date().getFullYear()}
                </div>
                <div className="research-papers-container">
                    <h1>Here the Research Papers</h1>
                    <button><a href='https://drive.google.com/drive/folders/1rEdfYZB3haqT3EYL05Lilb9rx8WjxevK?usp=sharing'>Read More</a></button>
                </div>
            </div>
        </footer>
    )
}

export default Footer