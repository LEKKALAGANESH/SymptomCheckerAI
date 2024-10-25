import React from 'react';
import { useLocation } from 'react-router-dom';
import '../scripts/Home.css';

import About from './About';

const Home = ({ isLoginIn }) => {

    return (
        <div>
            <div className='m-5 mt-1 pl-3 pr-3'>
            </div>
            <div>
                <div className='home-main-heading'>
                    <h1>DISEASE PREDICTION SYSTEM USING MACHINE LEARNING</h1>
                </div>
                <div>
                    <div className='home-top-container'>
                        <div className='home-top-container-card'>
                            <img src='Files Management System.png' className='home-top-container-card-image' alt='Files Management System' />
                            <h1 className='home-top-container-heading'>Files Management System</h1>
                            <p className='home-top-container-description'>An online trading community provides participants with a structured method for trading, bartering, or selling goods and services.</p>
                        </div>
                        <div className='home-top-container-card'>
                            <img src='usermanagement.png' className='home-top-container-card-image' alt='User Management System' />
                            <h1 className='home-top-container-heading'>User Management System</h1>
                            <p className='home-top-container-description'>A trading circle is a form of online trading designed to facilitate viewing of television series and episodic pysical media.</p>
                        </div>
                        <div className='home-top-container-card'>
                            <img src='diseasedatasetsystem.png' className='home-top-container-card-image' alt='Disease Dataset System' />
                            <h1 className='home-top-container-heading'>Disease Dataset System</h1>
                            <p className='home-top-container-description'>Physical media such as videocassettes, DVDs and CDs are exchanged via mail. Each member agrees to pass an episode on to the next member.</p>
                        </div>
                    </div>
                </div>
                <div className='home-bottom-container'>
                    <div>
                        <img src='DISEASE PREDICTION SYSTEM.jpg' className='home-bottom-container-image' alt='ABOUT DISEASE PREDICTION SYSTEM' />
                    </div>
                    <div className='home-bottom-container-card'>
                        <h1 className='home-bottom-container-heading'>A Comprehensive Analysis of Disease Prediction Systems using Data Mining Techniques</h1>
                        <hr />
                        <p className='home-bottom-container-description'>The healthcare industry generates vast amounts of data, which, when analyzed, can reveal valuable insights to support decision-making processes. However, predicting diseases is a complex task that requires expertise and knowledge. This research paper aims to explore various data mining approaches that can be employed to predict diseases accurately.</p>
                    </div>
                </div>
            </div>
            <About />
            <section className="how-it-works-section">
                <h2>Simple Steps to Better Health</h2>
                <div className="steps">
                    <div className="step">
                        <h3>1. Enter Your Information</h3>
                        <p>Fill in basic details about your symptoms, medical history, and lifestyle.</p>
                    </div>
                    <div className="step">
                        <h3>2. AI Analysis</h3>
                        <p>Our AI model analyzes your data to predict potential health risks.</p>
                    </div>
                    <div className="step">
                        <h3>3. Get Results</h3>
                        <p>Receive a detailed report with personalized recommendations for further steps.</p>
                    </div>
                    <div className="step">
                        <h3>4. Take Action</h3>
                        <p>Consult healthcare professionals for preventive care or treatment based on your results.</p>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="features-section">
                <h2>Why Choose Our System?</h2>
                <ul className="features-list">
                    <li>Accurate Predictions based on thousands of medical data points.</li>
                    <li>User-Friendly Interface designed for everyone.</li>
                    <li>Privacy First with secure encryption of your health data.</li>
                    <li>Continuous Updates to ensure the best possible analysis.</li>
                </ul>
            </section>
        </div>
    )
}


export default Home

