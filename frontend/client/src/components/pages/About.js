import React from 'react'
import '../scripts/About.css'



const About = () => {
    return (
        <div>
            <div className="about">
                <h1 className='about-main-heading text-uppercase'>About disease Prediction system</h1>
            </div>
            <div className="about-container">
                <div className='about-container-image'>
                    <p className='about-container-image-description'>Disease Prediction System</p>
                </div>
                <div className='about-container-text'>
                    <h1 className='about-container-text-heading'>About Disease Prediction System</h1>
                    <p className='about-container-text-description'>Healthcare Industry has huge amount of data that contains hidden information. This information supports decision making process on related area. In this research paper, we discussed various approaches of data mining which are useful in predicting the disease disease. One of the complex tasks in healthcare industry is predicting of disease disease and it requires more experience and knowledge. Some of the ways of predicting disease diseases are ECG, stress test and disease MRI etc. Here the system uses 14 parameters for predicting disease disease that include blood pressure, cholesterol, chest pain and disease rate. These parameters are used to improve an accuracy level. The main aim of this paper is to provide an analysis of data mining techniques on diagnosing disease disease. Healthcare industry has huge amount of data that contains hidden information. This information supports decision making process on related area. In this research paper, we discussed various approaches of data mining which are useful in predicting the disease disease.</p>
                </div>
            </div>
        </div>
    )
}

export default About
